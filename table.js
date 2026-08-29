class Table {
  constructor(table) {
    this.table = table;
  }

  reloadData(data) {
    this.table.clear();
    this.table.rows.add(data).draw();
  }
}

export { Table };
