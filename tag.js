class Tag {
  constructor(value) {
    this.value = value;
  }
  createTagLi() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(this.value));
    li.appendChild(span);
    li.classList.add("tag");
    return li;
  }
}

export { Tag };
