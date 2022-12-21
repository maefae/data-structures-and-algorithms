"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1].value;
  }

  isEmpty() {
    return Boolean(this.storage.length === 0);
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let newNode = new Node(value);
    let q = new Queue();

    q.enqueue(this.root);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    while (!q.isEmpty()) {
      let front = q.dequeue();

      if (!front.left) {
        front.left = newNode;
        return;
      }

      if (!front.right) {
        front.right = newNode;
        return;
      }

      if (front.left) q.enqueue(front.left);
      if (front.right) q.enqueue(front.right);
    }
  }

  preOrder() {
    let collection = [];

    function traverse(root) {
      if (!root) {
        return;
      }

      collection.push(root.value);
      traverse(root.left);
      traverse(root.right);
    }

    traverse(this.root);

    return collection;
  }

  inOrder() {
    let collection = [];

    function traverse(root) {
      if (!root) {
        return;
      }

      traverse(root.left);
      collection.push(root.value);
      traverse(root.right);
    }

    traverse(this.root);

    return collection;
  }

  postOrder() {
    let collection = [];

    function traverse(root) {
      if (!root) return;

      traverse(root.left);
      traverse(root.right);
      collection.push(root.value);
    }

    traverse(this.root);

    return collection;
  }

  breadthFirst() {
    let collection = [];
    let q = new Queue();

    q.enqueue(this.root);

    while (!q.isEmpty) {
      let front = q.dequeue();
      collection.push(front.value);

      if (front.left) q.enqueue(front.left);

      if (front.right) q.enqueue(front.right);
    }

    return collection;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    function traverse(root, newNode) {
      if (newNode.value < root.value) {
        if (!root.left) {
          root.left = newNode;
        } else {
          traverse(root.left, newNode);
        }
      } else {
        if (!root.right) {
          root.right = newNode;
        } else {
          traverse(root.right, newNode);
        }
      }
    }

    traverse(this.root, node);
  }

  contains(value) {
    if (this.preOrder().includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  findMaximum() {
    if (!this.root) throw new Error("Error! Empty Tree!");

    let maximum = 0;

    function traverse(root) {
      if (!root) return;

      if (root.value > maximum) {
        maximum = root.value;
      }

      traverse(root.left);
      traverse(root.right);
    }

    traverse(this.root);

    return maximum;
  }
}

module.exports = { BinarySearchTree, BinaryTree };
