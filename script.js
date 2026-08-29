import { TagSearch } from "./tagSearch.js";
import { Tag } from "./tag.js";
import { Table } from "./table.js";
import data from "./data.js";

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

table.ready(() => {
  const tableObj = new Table(table);
  const tagSearch = new TagSearch(tableObj);
  tagSearch.onStart();
  // Set dark-mode/light-mode
  let prefers = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  let html = document.querySelector("html");

  html.classList.add(prefers);
});
