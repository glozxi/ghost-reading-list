import data from "./data.js";
import { TagSearchUi } from "./tagSearchUi.js";

class TagSearch {
  searchedTags = [];
  allTags;
  table;
  selectedSuggestion = null;
  suggestedTags = [];

  constructor(table) {
    this.table = table;
    const allTags = new Set();
    data.forEach((item) => {
      item.tags.forEach((t) => {
        if (!allTags.has(t)) {
          allTags.add(t);
        }
      });
    });

    this.allTags = allTags;
    this.tagSearchUi = new TagSearchUi(table);
    this.tagSearchUi.addToggleDropdownListener(() =>
      this.handleSuggestedChange(),
    );
    this.#addListeners();
  }

  #getSearchInput() {
    return document.getElementById("tag-search-input");
  }

  removeFromSearchedTag(tag) {
    this.searchedTags = this.searchedTags.filter((t) => t !== tag);
  }

  addSearchedTag(tag) {
    this.searchedTags.push(tag);
  }

  refreshDisplayedSearchedTags() {
    this.tagSearchUi.refreshDisplayedSearchedTags(
      this.searchedTags,
      (value) => {
        this.removeFromSearchedTag(value);
        this.refreshDisplayedSearchedTags();
        this.table.reloadData(this.getDataFilteredByTags());
      },
    );
    this.selectedSuggestion = null;
    this.handleSuggestedChange();
    this.table.reloadData(this.getDataFilteredByTags());
  }

  handleSubmit(value) {
    if (!value) {
      return;
    }
    if (this.searchedTags.includes(value)) {
      return;
    }
    this.addSearchedTag(value);
    this.refreshDisplayedSearchedTags();
  }

  handleRemoveLast() {
    this.searchedTags.pop();
    this.refreshDisplayedSearchedTags();
  }

  getDataFilteredByTags() {
    if (this.searchedTags.length === 0) {
      return data;
    }
    const filteredData = data.filter((row) => {
      return this.searchedTags.every((t) => row.tags.includes(t));
    });
    return filteredData;
  }

  #getIndexOfSelectedSuggestion() {
    if (this.selectedSuggestion === null) {
      return -1;
    }
    return this.suggestedTags.findIndex((t) => t === this.selectedSuggestion);
  }

  #addListeners() {
    this.tagSearchUi.addSubmitListener((e) => {
      this.handleSubmit(this.selectedSuggestion);
    });
    this.tagSearchUi.addDropdownListeners(
      () => {
        if (this.#getSearchInput().value === "") {
          this.handleRemoveLast();
        }
        this.handleSuggestedChange();
      },
      () => {
        const i = this.#getIndexOfSelectedSuggestion();
        if (i >= 1) {
          this.selectedSuggestion = this.suggestedTags[i - 1];
          this.tagSearchUi.refreshDropdownHighlight(this.selectedSuggestion);
        }
      },
      () => {
        const i = this.#getIndexOfSelectedSuggestion();
        if (i >= 0 && i < this.suggestedTags.length - 1) {
          this.selectedSuggestion = this.suggestedTags[i + 1];
          this.tagSearchUi.refreshDropdownHighlight(this.selectedSuggestion);
        }
      },
      () => this.handleSuggestedChange(),
    );
  }

  #getSuggestedTags() {
    const searchInput = this.#getSearchInput().value;

    return [...this.allTags].filter((t) => {
      if (this.searchedTags.includes(t)) {
        return false;
      }
      return t.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  handleSuggestedChange() {
    this.suggestedTags = this.#getSuggestedTags();
    this.tagSearchUi.resetDropdown(
      this.suggestedTags,
      this.selectedSuggestion,
      (e) => {
        this.handleSubmit(e.target.textContent);
      },
    );
    this.selectedSuggestion =
      this.suggestedTags.length > 0 ? this.suggestedTags[0] : null;
    this.tagSearchUi.refreshDropdownHighlight(this.selectedSuggestion);
  }
}

export { TagSearch };
