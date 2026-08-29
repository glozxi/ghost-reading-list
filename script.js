import { TagSearch } from "./tagSearch.js";
import { Tag } from "./tag.js";

const tagSearch = new TagSearch();

function multiSearch(select, column) {
  const selectedValues = [...select.selectedOptions].map(
    (option) => option.value,
  );

  if (selectedValues.length === 0) {
    column.search("").draw();
    return;
  }
  column
    .search((d) => {
      return selectedValues.includes(d);
    })
    .draw();
}

const table = new DataTable("#example", {
  ajax: "data.json",
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
  const tagSearchForm = document.getElementById("tag-search-form");
  tagSearchForm.addEventListener("submit", (e) => {
    const value = document.getElementById("tag-search-input").value;
    tagSearch.handleSubmit(e, value);
    tagSearchForm.reset();
  });

  table.columns().every(function () {
    let column = this;

    // Create select element
    let select = document.createElement("select");
    select.setAttribute("multiple", "true");
    select.add(new Option(""));

    // Apply listener for user change in value
    select.addEventListener("change", () => multiSearch(select, column));

    // Add list of options
    column
      .data()
      .unique()
      .sort()
      .each(function (d, j) {
        select.add(new Option(d));
      });
  });

  // Set dark-mode/light-mode
  let prefers = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  let html = document.querySelector("html");

  html.classList.add(prefers);
});
