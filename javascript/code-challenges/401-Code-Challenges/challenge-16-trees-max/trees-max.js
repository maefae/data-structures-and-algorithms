"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
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
      if (!root) {
        return;
      }

      traverse(root.left);
      traverse(root.right);
      collection.push(root.value);
    }

    traverse(this.root);

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

  getMaximum() {
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

module.exports = BinarySearchTree;
