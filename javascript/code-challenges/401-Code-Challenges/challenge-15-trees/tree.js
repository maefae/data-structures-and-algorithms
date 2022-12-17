"use strict";

const { contains } = require("cheerio/lib/static");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value = null) {
    this.root = value;
  }

  preOrder() {
    let output = [];

    function traverse(node) {
      // if (!node) return;
      output.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return output;
  }

  inOrder() {
    let output = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      output.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return output;
  }

  postOrder() {
    let output = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      output.push(node.value);
    };

    traverse(this.root);
    return output;
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

    const traverse = (root, newNode) => {
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
    };

    traverse(this.root, node);
  }
  contains(value) {
    if (this.preOrder().includes(value)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
