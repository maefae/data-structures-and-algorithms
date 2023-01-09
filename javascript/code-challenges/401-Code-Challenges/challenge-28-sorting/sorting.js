"use strict";

function compareYear(a, b) {
  return b.year - a.year;
}

function compareTitle(a, b) {
  a = removeArticle(a.title);
  b = removeArticle(b.title);
  return a.localeCompare(b);
}

function removeArticle(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

module.exports = { compareYear, compareTitle };
