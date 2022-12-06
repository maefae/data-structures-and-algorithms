"use strict";

/**
 * Node class handles the packaging of values
 * @class
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList creates an implementation of the linked list data structure.
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Creates a new node and adds it to the linked list
   * @param {*} value - Can be any data type
   */
  insert(value) {
    this.head = new Node(value, this.head);
  }

  /**
   * Searches the values within the linked list for the provided value
   * @param {*} value Search value to be found
   * @returns Boolean True if found otherwise false
   */
  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value == value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * Overrides the default toString() method
   * @returns a string representating all the items in the linked list
   */
  toString() {
    let output = "";
    let current = this.head;

    while (current) {
      output += `{${current.value}} -> `;
      current = current.next;
    }

    return output + "NULL";
  }

  /**
   * Creates a new node and adds it to the end of the linked list.
   * @param {*} value Any value to be added
   */
  append(value) {
    let current = this.head;

    if (!current) {
      this.insert(value);
    }

    while (current) {
      if (current.next == null) {
        current.next = new Node(value);
        break;
      }

      current = current.next;
    }
  }

  /**
   * Creates a new node and inserts this node before the given value in the linked list.
   * @param {*} value - Value of an existing node
   * @param {*} newValue - Any value to be added
   */
  insertBefore(value, newValue) {
    let current = this.head;

    if (!current) {
      throw Error(
        "Value Error! Can't add a value before a value that does not exist."
      );
    }

    if (current.value == value) {
      this.insert(newValue);
      return;
    }

    while (current) {
      if (!current.next) {
        throw Error(
          "Value Error! Can't add a value before a value that does not exist."
        );
      }

      if (current.next.value == value) {
        current.next = new Node(newValue, current.next);
        break;
      }

      current = current.next;
    }
  }

  /**
   * Creates a new node and inserts this node after the given value in the linked list.
   * @param {*} value  Value of an existing node
   * @param {*} newValue Any value to be added
   */
  insertAfter(value, newValue) {
    let current = this.head;

    if (!current) {
      throw Error(
        "Value Error! Can't add a value after a value that does not exist."
      );
    }

    while (current) {
      if (current.value == value) {
        current.next = new Node(newValue, current.next);
        break;
      }

      current = current.next;
    }
  }
}

module.exports = LinkedList;
