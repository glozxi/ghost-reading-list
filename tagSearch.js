import { Tag } from "./tag.js";
import data from "./data.js";

class TagSearch {
  searchedTags = [];
  allTags;
  table;

  constructor(table) {
    this.table = table;
    const allTags = new Set();
    function getUniqueTags() {
      data.forEach((item) => {
        item.tags.forEach((t) => {
          if (!allTags.has(t)) {
            allTags.add(t);
          }
        });
      });
    }
    this.allTags = getUniqueTags();
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

  onStart() {
    const tagSearchForm = document.getElementById("tag-search-form");
    tagSearchForm.addEventListener("submit", (e) => {
      const value = document.getElementById("tag-search-input").value;
      this.handleSubmit(e, value);
      tagSearchForm.reset();
      this.table.reloadData(this.getDataFilteredByTags());
    });
    tagSearchForm.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        this.handleRemoveLast();
        this.table.reloadData(this.getDataFilteredByTags());
      }
    });
  }
}

export { TagSearch };
