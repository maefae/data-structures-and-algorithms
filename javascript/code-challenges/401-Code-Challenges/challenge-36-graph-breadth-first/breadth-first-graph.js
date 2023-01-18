"use strict";

const Dequeue = require("./breadth-first-graph.test");

class Queue {
  constructor() {
    this.storage = new Dequeue();
  }

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  peek() {
    this.storage.last();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

class Vertex {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Edge {
  constructor(vertex, weight = 1) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(value) {
    let node = new Vertex(value);
    this.graph[node.value] = [];

    return node;
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (!this.graph[vertex1.value]) {
      throw Error("Error Vertex 1 is not within the Graph");
    }

    if (!this.graph[vertex2.value]) {
      throw Error("Error Vertex 2 is not within the Graph");
    }

    let edge = new Edge(vertex2, weight);
    this.graph[vertex1.value].push(edge);
  }

  getNodes() {
    return Object.keys(this.graph);
  }

  getNeighbors(vertex) {
    let collection = [];
    let connections = this.graph[vertex.value];

    connections.forEach((neighbor) => {
      let holder = {};
      holder[neighbor] = neighbor.weight;
      collection.push(holder);
    });

    return collection;
  }

  size() {
    if (Object.keys(this.graph).length > 0) {
      return Object.keys(this.graph).length;
    } else {
      return null;
    }
  }

  breadthFirst(vertex) {
    let nodes = [];
    let holder = new Set();
    let breadth = new Queue();

    holder.add(vertex.value);
    breadth.enqueue(vertex);

    while (!breadth.isEmpty()) {
      let front = breadth.dequeue();
      nodes.push(front.value);

      this.graph[front.value].forEach((element) => {
        if (!holder.has(element.vertex.value)) {
          holder.add(element.vertex.value);
          breadth.enqueue(element.vertex);
        }
      });
    }

    return nodes;
  }
}

module.exports = Graph;
