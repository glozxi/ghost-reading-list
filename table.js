import data from "./data.js";

class Table {
  #filters;
  constructor(table) {
    this.#filters = [];
    this.table = table;
  }

  addFilter(filter) {
    this.#filters.push(filter);
  }

  reloadData() {
    let filtered = data;
    this.#filters.forEach((f) => {
      filtered = f(filtered);
    });
    this.table.clear();
    this.table.rows.add(filtered).draw();
  }
}

export { Table };
