import { Tag } from "./tag.js";
import data from "./data.js";

class TagSearch {
  searchedTags = [];
  allTags;

  constructor() {
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
      deleteButton.onclick = (e) => this.handleDelete(e, value);
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
}

export { TagSearch };
