"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    let node = new Node(val);
    let current;
    if (!this.head) {
      this.head = node;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insert(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.data === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `{ ${current.data} } -> `;
      current = current.next;
    }
    string += "NULL";
    return string;
  }
}

//instantiation of empty LinkedList
let list = new LinkedList();
// calling the insert method to add data to the head of the list
list.insert("c");
list.insert("b");
list.insert("a");
list.add("d");
list.add("e");
list.insert("f");
// { f } -> { a } -> { b } -> { c } -> { d } -> { e } -> NULL
let listIncludes = list.includes("b");
let listToString = list.toString();
console.log(list);
console.log(list.size);
console.log(listIncludes);
console.log(listToString);
console.log(JSON.stringify(list));

module.exports = LinkedList;
