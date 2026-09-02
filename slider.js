import data from "./data.js";

class Slider {
  #table;

  constructor(table) {
    this.#table = table;
    const slider = document.getElementById("rating-search-slider");
    this.slider = slider;

    const max = data.reduce((acc, curr) => Math.max(curr.recommended, acc), 0);

    noUiSlider.create(slider, {
      start: [0, max],
      connect: true,
      step: 1,
      range: {
        min: 0,
        max: max,
      },
      pips: {
        mode: "count",
        values: max + 1,
        density: 100,
      },
    });

    slider.noUiSlider.on("update", () => {
      table.reloadData();
    });
  }

  filterData = (data) => {
    const values = this.slider.noUiSlider.get(true);
    const filteredData = data.filter((row) => {
      return row.recommended >= values[0] && row.recommended <= values[1];
    });
    return filteredData;
  };
}
export { Slider };
