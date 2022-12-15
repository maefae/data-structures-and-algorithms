"use strict";

const mbv = require("./multi-bracket validation");

describe("Testing Challenge 13: Multi-bracket Validation", () => {
  test("should handle a single set of brackets", () => {
    let testString = "{}";

    let actual = mbv(testString);
    let expected = true;

    expect(actual).toEqual(expected);
  });

  test("should handle multiple sets of brackets", () => {
    let testString = "{}[]()";

    let actual = mbv(testString);
    let expected = true;

    expect(actual).toEqual(expected);
  });

  it("Should handle unbalanced brackets", () => {
    let testString = "}{[}}";

    let actual = mbv(testString);
    let expected = false;

    expect(actual).toEqual(expected);
  });

  it("Should handle unbalanced brackets with characters", () => {
    let testString = "{aldfjlalkd)kjdfalkdj[}";

    let actual = mbv(testString);
    let expected = false;

    expect(actual).toEqual(expected);
  });

  it("Should handle a string with no brackets", () => {
    let testString = "Test string that has no brackets";

    let actual = mbv(testString);
    let expected = true;

    expect(actual).toEqual(expected);
  });
});
