"use strict";

function multiBracketValidation(string) {
  let brackets = [];
  let open_brackets = [];
  let bracket_obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let closed = Object.keys(bracket_obj);
  let open = Object.values(bracket_obj);

  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i]) || closed.includes(string[i])) {
      brackets.push(string[i]);
    }
  }

  if (brackets.length === 0) {
    return true;
  }

  for (let i = 0; i < brackets.length; i++) {
    if (open.includes(brackets[i])) {
      open_brackets.push(brackets[i]);
    } else if (open_brackets.length >= 1) {
      if (bracket_obj[brackets[i]] == open_brackets[open_brackets.length - 1]) {
        open_brackets.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = multiBracketValidation;
