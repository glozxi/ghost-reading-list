import { Tag } from "./tag.js";

class TagSearchUi {
  #table;

  constructor(table) {
    this.#table = table;
  }
  #getSearchInput() {
    return document.getElementById("tag-search-input");
  }

  #getTagSearchForm() {
    return document.getElementById("tag-search-form");
  }

  #getDropdown() {
    const tagSearchForm = document.getElementById("tag-search-form");
    return tagSearchForm.getElementsByClassName("dropdown")[0];
  }

  #getTagList() {
    return document.getElementsByClassName("tag-search-list")[0];
  }

  #removeNonSearchInputTags() {
    const tagList = this.#getTagList();
    while (tagList.children.length > 1) {
      tagList.removeChild(tagList.firstChild);
    }
  }

  #addSearchedTags(values, handleDelete) {
    const tagList = this.#getTagList();

    values.forEach((value) => {
      const tag = new Tag(value);

      const li = tag.createTagLi();
      const deleteButton = document.createElement("button");
      li.appendChild(deleteButton);
      deleteButton.type = "button";
      deleteButton.appendChild(document.createTextNode("x"));
      deleteButton.onclick = () => {
        handleDelete(value);
      };
      tagList.prepend(li);
    });
  }

  refreshDisplayedSearchedTags(values, handleDelete) {
    this.#removeNonSearchInputTags();
    this.#addSearchedTags(values, handleDelete);
    this.#getSearchInput().focus();
  }

  refreshDropdownHighlight(selectedValue) {
    const dropdown = this.#getDropdown();
    for (const li of dropdown.childNodes) {
      if (li.textContent === selectedValue) {
        li.classList.add("selected");
      } else {
        li.classList.remove("selected");
      }
    }
  }

  resetDropdown(allSuggested, selectedValue, handleSubmit) {
    this.#clearDropdown();
    this.#addAllSuggested(allSuggested, selectedValue, handleSubmit);
  }

  #addAllSuggested(allSuggested, selectedValue, handleSubmit) {
    const dropdown = this.#getDropdown();

    allSuggested.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      li.addEventListener("mouseover", (e) => {
        selectedValue = e.target.textContent;
        this.refreshDropdownHighlight(selectedValue);
      });
      li.addEventListener("click", handleSubmit);
      dropdown.appendChild(li);
    });
  }

  #clearDropdown() {
    const dropdown = this.#getDropdown();
    dropdown.innerHTML = "";
  }

  addToggleDropdownListener(handleDropdownOpen) {
    // clear dropdown on click outside
    document.addEventListener("click", (event) => {
      const withinBoundaries =
        event.composedPath().includes(this.#getSearchInput()) ||
        event.composedPath().includes(this.#getDropdown());

      if (!withinBoundaries) {
        this.#clearDropdown();
        document.activeElement.blur();
      } else {
        handleDropdownOpen();
      }
    });
  }

  addSubmitListener(handleSubmit) {
    const tagSearchForm = this.#getTagSearchForm();
    tagSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSubmit(e);
      this.#getTagSearchForm().reset();
    });
  }

  addDropdownListeners(
    handleBackspace,
    handleArrowUp,
    handleArrowDown,
    handleSuggestedChange,
  ) {
    const tagSearchForm = this.#getTagSearchForm();
    tagSearchForm.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "ArrowUp") {
        handleArrowUp();
      } else if (e.key === "ArrowDown") {
        handleArrowDown();
      } else if (e.key === "Escape") {
        this.#clearDropdown();
        document.activeElement.blur();
      } else {
        handleSuggestedChange();
      }
    });
  }
}

export { TagSearchUi };
