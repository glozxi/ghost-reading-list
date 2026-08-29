import { TagSearch } from "./tagSearch.js";
import { Tag } from "./tag.js";
import data from "./data.js";

const tagSearch = new TagSearch();

const table = new DataTable("#example", {
  data: data,
  columns: [
    { data: "title" },
    { data: "recommended" },
    { data: "comments" },
    {
      data: "tags",
      render: (data, type, row) => {
        const listItems = data.map(function (element) {
          const tag = new Tag(element);
          return tag.createTagLi();
        });

        const ul = document.createElement("ul");
        ul.classList.add("tags");
        listItems.forEach((i) => ul.appendChild(i));

        return ul;
      },
    },
  ],
  order: [],
  responsive: true,
  paging: false,
});

function getDataFilteredByTags() {
  if (tagSearch.length === 0) {
    return;
  }
  const filteredData = data.filter((row) => {
    return tagSearch.searchedTags.every((t) => row.tags.includes(t));
  });
  return filteredData;
}

function reloadData(table, data) {
  table.clear();
  table.rows.add(data).draw();
}

table.ready(() => {
  const tagSearchForm = document.getElementById("tag-search-form");
  tagSearchForm.addEventListener("submit", (e) => {
    const value = document.getElementById("tag-search-input").value;
    tagSearch.handleSubmit(e, value);
    tagSearchForm.reset();
    reloadData(table, getDataFilteredByTags());
  });
  tagSearchForm.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      tagSearch.handleRemoveLast();
      reloadData(table, getDataFilteredByTags());
    }
  });

  // Set dark-mode/light-mode
  let prefers = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  let html = document.querySelector("html");

  html.classList.add(prefers);
});
