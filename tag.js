class Tag {
  constructor(value) {
    this.value = value;
  }
  createTagLi() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(this.value));
    li.classList.add("tag");
    return li;
  }
}

export { Tag };
