"use strict";

let Node = require("./node");

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // enqueues new animal to our AnimalSheler
  enqueue(animal) {
    let newNode = new Node(animal);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = this.back.next;
    }
  }

  // dequeues a Node containing a value equal to pref
  dequeue(pref) {
    // add in check for when list is size 1
    if (!this.isEmpty()) {
      let current = this.front;
      let prev;

      // case where pref is found at the front of the queue
      if (current.value === pref) {
        let oldFront = this.front;
        this.front = oldFront.next;
        oldFront.next = null;
        return oldFront;
      }

      // case where pref is anywhere BUT front of the queue
      while (current) {
        if (current.value === pref) {
          prev.next = current.next; // redirects pointers around current Node
          return current;
        } else {
          prev = current;
          current = current.next;
        }
      }
    } else {
      throw new Error("ERROR: Queue is empty.");
    }
  }

  isEmpty() {
    return this.front === null;
  }

  toString() {
    let current = this.front;
    let string = "";
    while (current) {
      let valueStr = `{ ${current.value} } -> `;
      string = string + valueStr;
      current = current.next;
    }
    string = string + "NULL";
    return string;
  }
}

module.exports = AnimalShelter;
