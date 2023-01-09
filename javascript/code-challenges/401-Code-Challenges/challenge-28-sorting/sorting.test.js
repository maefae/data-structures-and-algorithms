"use strict";

const { Movies } = require("./movies");
const { compareTitle, compareYear } = require("./sorting");

describe("Sort", () => {
  it("can sort movies by year", () => {
    const movies = Movies.sort(compareYear);
    expect(movies.map((m) => m.title)).toEqual([
      "Just Friends",
      "Panic Room",
      "Mulholland Drive",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = Movies.sort(compareTitle);
    expect(movies.map((m) => m.title)).toEqual([
      "Just Friends",
      "Mulholland Drive",
      "Panic Room",
    ]);
  });
});
