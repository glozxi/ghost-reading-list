import { Tag } from "./tag.js";

class TagSearch {
  searchedTags = [];

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

    this.addSearchedTag(value);
    this.refreshDisplayedSearchedTags();
  }
}

export { TagSearch };
