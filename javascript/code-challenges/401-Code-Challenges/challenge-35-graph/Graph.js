'use strict';

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

      throw Error('Error Vertex 1 is not within the Graph');

    }

    if (!this.graph[vertex2.value]) {

      throw Error('Error Vertex 2 is not within the Graph');

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

    connections.forEach(neighbor => {

      let holder = {};
      holder[neighbor] = neighbor.weight;
      collection.push(holder);

    });

    return collection
  }

  size() {

    if (Object.keys(this.graph).length > 0) {

      return Object.keys(this.graph).length;

    } else {

      return null;
    }

  }


}

module.exports = Graph;
