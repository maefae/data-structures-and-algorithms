"use strict";

//node class is utilized as a package for values
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//creates an implementation of a linked list data structure
class LinkedList {
  constructor() {
    this.head = null;
  }

  //Creates a new node and adds it to the linked list
  insert(value) {
    this.head = new Node(value, this.head);
  }

  // Searches for the values within the linked list for the provided value
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

  // Overrides the default toString() method and returns a string representing all of the items in the linked list
  toString() {
    let output = "";
    let current = this.head;

    while (current) {
      output += `{${current.value}} -> `;
      current = current.next;
    }

    return output + "NULL";
  }

  // Creates a new node and adds it to the end of the linked list.
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

  // creates a new node and insets this node before the given value in the linked list.
  // The parameter, value, is the value of an existing node
  // the paramter of, newValue, is any value to be added
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

  // insertAfter creates a new node and inserts this node after the given value in the linked list.
  // the parameter of *value*, is a value of an existing node
  //the parameter of *newValue* is any value to be added.
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

  // Given the parameter k, find the node's value that is k from the end of the linked list
  kthFromEnd(k) {
    let current = this.head;
    let follower = this.head;
    let counter = 0;

    if (k < 0) {
      throw Error(
        "Value Error! Can't find a value from end of a linked list with a negative number."
      );
    }

    while (current) {
      if (counter > k) {
        follower = follower.next;
        current = current.next;
      } else {
        counter++;
        current = current.next;
      }
    }

    if (follower.value == this.head.value && k > counter) {
      throw Error("Value Error! Input K is longer than the linked list.");
    }

    return follower.value;
  }
}

class Stack {
  constructor(item = null) {
    this.top = item;
  }

  // push takes in any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    let newNode = new Node(value);

    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
    }
  }

  // pop removes the node from the top of the stack and returns the node's value. An exception is when pop is called on an empty stack
  pop() {
    if (!this.top) {
      throw Error("Can't pop from an empty stack!");
    }

    let output = this.top;
    this.top = this.top.next;
    output.next = null;

    return output.value;
  }

  //Returns the value of the node located on top of the stack, without removing it from the stack.
  peek() {
    if (!this.top) {
      throw Error("Can't peek an empty stack!");
    }

    return this.top.value;
  }

  //Returns a boolean indicating whether or not the stack is empty.
  isEmpty() {
    return !Boolean(this.top);
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  //Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time Performance.
  enqueue(value) {
    let node = new Node(value);

    if (!this.rear) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = this.rear.next;
    }
  }

  // Removes the node from the front of the queue, and returns the node's value.
  dequeue() {
    if (!this.front) {
      throw Error("Can't dequeue from an empty queue");
    }

    let output = this.front;
    this.front = this.front.next;

    return output.value;
  }

  //Returns the value of the node located in the front of the queue, without removing it from the queue.
  peek() {
    if (!this.front) {
      throw Error("Can't peek an empty queue");
    }

    return this.front.value;
  }

  // Returns a boolean indicating whether or not the queue is empty.
  isEmpty() {
    return !Boolean(this.front);
  }
}

module.exports = { LinkedList, Stack, Queue };
