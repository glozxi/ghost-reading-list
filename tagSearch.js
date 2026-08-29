import { Tag } from "./tag.js";
import data from "./data.js";

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
  }

  #getSearchInput() {
    return document.getElementById("tag-search-input");
  }

  #getTagSearchForm() {
    return document.getElementById("tag-search-form");
  }

  removeSearchedTag(tag) {
    this.searchedTags = this.searchedTags.filter((t) => t !== tag);
  }

  addSearchedTag(tag) {
    this.searchedTags.push(tag);
  }

  refreshDisplayedSearchedTags() {
    const tagList = document.getElementsByClassName("tag-search-list")[0];
    while (tagList.children.length > 1) {
      tagList.removeChild(tagList.firstChild);
    }
    this.searchedTags.forEach((value) => {
      const tag = new Tag(value);

      const li = tag.createTagLi();
      const deleteButton = document.createElement("button");
      li.appendChild(deleteButton);
      deleteButton.type = "button";
      deleteButton.appendChild(document.createTextNode("x"));
      deleteButton.onclick = (e) => {
        this.handleDelete(e, value);
        this.table.reloadData(this.getDataFilteredByTags());
      };
      tagList.prepend(li);
    });
    this.selectedSuggestion = null;
    this.handleChange();

    this.#getSearchInput().focus();
  }

  handleDelete(e, value) {
    this.removeSearchedTag(value);
    this.refreshDisplayedSearchedTags();
  }

  handleSubmit(e, value) {
    e.preventDefault();

    if (value === "") {
      return;
    }
    if (this.searchedTags.includes(value)) {
      return;
    }
    this.addSearchedTag(value);
    this.refreshDisplayedSearchedTags();
    this.table.reloadData(this.getDataFilteredByTags());
    this.#getTagSearchForm().reset();
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

  onStart() {
    const tagSearchForm = this.#getTagSearchForm();
    tagSearchForm.addEventListener("submit", (e) => {
      this.handleSubmit(e, this.selectedSuggestion);
    });
    tagSearchForm.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        if (this.#getSearchInput().value === "") {
          this.handleRemoveLast();
          this.table.reloadData(this.getDataFilteredByTags());
        }
        this.handleChange();
      } else if (e.key == "ArrowUp") {
        const i = this.#getIndexOfSelectedSuggestion();
        if (i >= 1) {
          this.selectedSuggestion = this.suggestedTags[i - 1];
          this.highlightSuggestedTag();
        }
      } else if (e.key == "ArrowDown") {
        const i = this.#getIndexOfSelectedSuggestion();
        if (i >= 0 && i < this.suggestedTags.length - 1) {
          this.selectedSuggestion = this.suggestedTags[i + 1];
          this.highlightSuggestedTag();
        }
      } else {
        this.handleChange();
      }
    });

    // clear dropdown on click outside
    const dropdown = this.#getDropdown();
    document.addEventListener("click", (event) => {
      const withinBoundaries = event
        .composedPath()
        .includes(this.#getSearchInput());

      if (!withinBoundaries) {
        dropdown.innerHTML = "";
      } else {
        this.handleChange();
      }
    });
  }

  #getDropdown() {
    const tagSearchForm = document.getElementById("tag-search-form");
    return tagSearchForm.getElementsByClassName("dropdown")[0];
  }

  handleChange() {
    const searchInput = this.#getSearchInput().value;
    this.suggestedTags = [...this.allTags].filter((t) => {
      if (this.searchedTags.includes(t)) {
        return false;
      }
      return t.toLowerCase().includes(searchInput.toLowerCase());
    });

    const dropdown = this.#getDropdown();
    dropdown.innerHTML = "";
    this.suggestedTags.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      li.addEventListener("mouseover", (e) => {
        this.selectedSuggestion = e.target.textContent;
        this.highlightSuggestedTag();
      });
      li.addEventListener("click", (e) => {
        this.handleSubmit(e, e.target.textContent);
      });
      dropdown.appendChild(li);
    });
    this.selectedSuggestion =
      this.suggestedTags.length > 0 ? this.suggestedTags[0] : null;
    this.highlightSuggestedTag();
  }

  highlightSuggestedTag() {
    const dropdown = this.#getDropdown();
    for (const li of dropdown.childNodes) {
      if (li.textContent === this.selectedSuggestion) {
        li.classList.add("selected");
      } else {
        li.classList.remove("selected");
      }
    }
  }
}

export { TagSearch };
