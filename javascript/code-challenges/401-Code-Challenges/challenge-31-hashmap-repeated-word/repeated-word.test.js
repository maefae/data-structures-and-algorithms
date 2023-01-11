"use strict";

const repeatedWord = require("./repeated-word.js");

describe("Testing Challenge 31: Repeated Word", () => {
  let givenExamples = [
    ["Once upon a time, there was a brave princess who...", "a"],
    [
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...",
      "the",
    ],
    [
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...",
      "summer",
    ],
  ];

  it("Should pass all given examples", () => {
    givenExamples.forEach((test) => {
      let actual = repeatedWord(test[0]);
      let expected = test[1];

      expect(actual).toEqual(expected);
    });
  });

  it("Should test a random string #1", () => {
    let test =
      "Something that is random about this assignment is that this string is crazy!";
    let actual = repeatedWord(test);
    let expected = "is";

    expect(actual).toEqual(expected);
  });

  it("Should test a random string #2", () => {
    let test = "Random something going on here what is random about this";
    let actual = repeatedWord(test);
    let expected = "random";

    expect(actual).toEqual(expected);
  });

  it("Should test a random string #2", () => {
    let test =
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    let actual = repeatedWord(test);
    let expected = "the";

    expect(actual).toEqual(expected);
  });
});
