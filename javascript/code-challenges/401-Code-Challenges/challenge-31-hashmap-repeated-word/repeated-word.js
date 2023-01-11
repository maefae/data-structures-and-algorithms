"use strict";

function repeatedWord(book) {
  let maximum = [1, null];
  let regex = /[^A-Za-z0-9]+/gi;

  book = book.replace(regex, " ");

  let words = book.split(" ");

  const dictionary = {};
  for (const key of words) {
    dictionary[key.toLowerCase()] = 0;
  }

  words.forEach((word) => {
    word = word.toLowerCase();

    if (dictionary[word]) {
      dictionary[word] += 1;

      if (dictionary[word] > maximum[0]) {
        maximum = [dictionary[word], word];
      }
    } else {
      dictionary[word] = 1;
    }
  });

  return maximum[1];
}

module.exports = repeatedWord;
