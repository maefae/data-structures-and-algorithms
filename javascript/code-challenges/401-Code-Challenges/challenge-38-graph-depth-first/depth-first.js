"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(item = null) {
    this.top = item;
  }

  push(item) {
    if (this.top === null) {
      this.top = new Node(item);
    } else {
      let newNode = new Node(item);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) {
      throw Error("Can't pop item from an empty stack");
    }

    let poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;

    return poppedNode.value;
  }

  peek() {
    if (!this.top) {
      throw Error("Can't peek item from an empty stack");
    }

    return this.top.value;
  }

  isEmpty() {
    return !Boolean(this.top);
  }
}

function depthFirst(graph, root) {
  let storage = new Stack();
  let visited = [];

  storage.push(root);
  visited.push(root.value);

  while (!storage.isEmpty()) {
    let top = storage.peek();
    let status = false;

    let children = graph.graph[top.value];

    for (let i = 0; i < children.length; i++) {
      if (!visited.includes(children[i].vertex.value)) {
        status = true;
        storage.push(children[i].vertex);
        visited.push(children[i].vertex.value);
        break;
      }
    }

    if (status) {
      continue;
    } else {
      storage.pop();
    }
  }

  return visited;
}

module.exports = depthFirst;
