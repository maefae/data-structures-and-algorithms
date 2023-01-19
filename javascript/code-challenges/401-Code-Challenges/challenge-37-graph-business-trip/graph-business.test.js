"use strict";

const Graph = require("../challenge-36-graph-breadth-first/breadth-first-graph");
const getEdges = require("./graph-business-trip");

describe("Testing Challenge 35: Graph: ", () => {
  describe("Testing addNode() method: ", () => {
    it("Should add one to the graph", () => {
      let g = new Graph();
      g.addNode("Test Node");

      let actual = g.getNodes().length;
      let expected = 1;

      expect(actual).toEqual(expected);
    });

    it("Should add two to the graph", () => {
      let g = new Graph();
      g.addNode("Test Node");
      g.addNode("random");

      let actual = g.getNodes().length;
      let expected = 2;

      expect(actual).toEqual(expected);
    });
  });

  describe("Testing addEdge() method: ", () => {
    it("Should handle exception if vertex 2 is not in the graph", () => {
      let g1 = new Graph();
      let g2 = new Graph();

      let node1 = g1.addNode(1);
      let node2 = g2.addNode(2);

      let actual = () => {
        g1.addEdge(node1, node2);
      };

      let expected = "Error Vertex 2 is not within the Graph";

      expect(actual).toThrow(expected);
    });

    it("Should handle exception if vertex 1 is not in the graph", () => {
      let g1 = new Graph();
      let g2 = new Graph();

      let node1 = g1.addNode(1);
      let node2 = g2.addNode(2);

      let actual = () => {
        g2.addEdge(node1, node2);
      };

      let expected = "Error Vertex 1 is not within the Graph";

      expect(actual).toThrow(expected);
    });

    it("Should add an edge between nodes", () => {
      let g = new Graph();
      let node1 = g.addNode("a");
      let node2 = g.addNode("b");

      g.addEdge(node1, node2);

      let actual = g.getNeighbors(node1).length;
      let expected = 1;

      expect(actual).toEqual(expected);
    });
  });

  describe("Testing getNodes() method: ", () => {
    let g = new Graph();
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");

    let actual = g.getNodes().length;
    let expected = 3;

    expect(actual).toEqual(expected);
  });

  describe("Testing getNeighbors() method: ", () => {
    it("Should handle no neighbors", () => {
      let g = new Graph();
      let nodeA = g.addNode("a");
      let nodeB = g.addNode("b");
      let nodeC = g.addNode("c");
      let nodeD = g.addNode("d");

      g.addEdge(nodeA, nodeB);
      let actual = g.getNeighbors(nodeA).length;
      let expected = 1;

      expect(actual).toEqual(expected);
    });

    it("Should handle no neighbors", () => {
      let g = new Graph();
      let nodeA = g.addNode("a");
      let nodeB = g.addNode("b");
      let nodeC = g.addNode("c");
      let nodeD = g.addNode("d");

      let actual = g.getNeighbors(nodeA);
      let expected = [];

      expect(actual).toEqual(expected);
    });
  });

  describe("Testing size() method: ", () => {
    it("Should show a size of 1", () => {
      let g = new Graph();
      g.addNode("banana");
      g.addNode(1);
      let actual = g.size();
      let expected = 2;

      expect(actual).toEqual(expected);
    });

    it("Should show a size of greater than 1", () => {
      let g = new Graph();
      g.addNode("banana");
      g.addNode(1);
      g.addNode(2039123);

      let actual = g.size();
      let expected = 3;

      expect(actual).toEqual(expected);
    });
  });
});

describe("Testing Challenge 36: Breath First Graph: ", () => {
  describe("Testing breathFirst() method: ", () => {
    it("Should handle breathFirst example #1", () => {
      let g = new Graph();
      let pandora = g.addNode("Pandora");
      let adrendelle = g.addNode("Arendelle");
      let metroville = g.addNode("Metroville");
      let monstroplolis = g.addNode("Monstroplolis");
      let naboo = g.addNode("Naboo");
      let narnia = g.addNode("Narnia");

      g.addEdge(pandora, adrendelle);
      g.addEdge(adrendelle, metroville);
      g.addEdge(adrendelle, monstroplolis);
      g.addEdge(adrendelle, pandora);
      g.addEdge(metroville, adrendelle);
      g.addEdge(metroville, monstroplolis);
      g.addEdge(metroville, narnia);
      g.addEdge(metroville, naboo);
      g.addEdge(monstroplolis, adrendelle);
      g.addEdge(monstroplolis, metroville);
      g.addEdge(monstroplolis, naboo);
      g.addEdge(naboo, narnia);
      g.addEdge(naboo, metroville);
      g.addEdge(naboo, monstroplolis);

      let actual = g.breadthFirst(pandora);
      let expected = [
        "Pandora",
        "Arendelle",
        "Metroville",
        "Monstroplolis",
        "Narnia",
        "Naboo",
      ];

      expect(actual).toEqual(expected);
    });

    it("Should handle breathFirst example #2", () => {
      let g = new Graph();
      let bob = g.addNode("Bob");
      let tom = g.addNode("Tom");
      let sam = g.addNode("Sam");
      let joe = g.addNode("Joe");
      let jon = g.addNode("Jon");

      g.addEdge(bob, tom);
      g.addEdge(tom, bob);
      g.addEdge(tom, jon);
      g.addEdge(tom, sam);
      g.addEdge(tom, joe);
      g.addEdge(jon, tom);
      g.addEdge(jon, sam);
      g.addEdge(sam, jon);
      g.addEdge(sam, tom);
      g.addEdge(sam, joe);
      g.addEdge(joe, sam);
      g.addEdge(joe, tom);

      let actual = g.breadthFirst(bob);
      let expected = ["Bob", "Tom", "Jon", "Sam", "Joe"];

      expect(actual).toEqual(expected);
    });

    it("Should handle breadthFirst example #3", () => {
      let g = new Graph();
      let bob = g.addNode("Bob");
      let tom = g.addNode("Tom");
      let sam = g.addNode("Sam");
      let joe = g.addNode("Joe");
      let jon = g.addNode("Jon");

      g.addEdge(bob, tom);
      g.addEdge(tom, bob);
      g.addEdge(tom, jon);
      g.addEdge(tom, sam);
      g.addEdge(tom, joe);
      g.addEdge(jon, tom);
      g.addEdge(jon, sam);
      g.addEdge(sam, jon);
      g.addEdge(sam, tom);
      g.addEdge(sam, joe);
      g.addEdge(joe, sam);
      g.addEdge(joe, tom);

      let actual = g.breadthFirst(tom);
      let expected = ["Tom", "Bob", "Jon", "Sam", "Joe"];

      expect(actual).toEqual(expected);
    });
  });
});

describe("Testing Challenge 37: getEdges: ", () => {
  it("Should handle example #1", () => {
    let g = new Graph();
    let pandora = g.addNode("Pandora");
    let adrendelle = g.addNode("Arendelle");
    let metroville = g.addNode("Metroville");
    let monstroplolis = g.addNode("Monstroplolis");
    let naboo = g.addNode("Naboo");
    let narnia = g.addNode("Narnia");

    g.addEdge(pandora, adrendelle, 150);
    g.addEdge(pandora, metroville, 82);
    g.addEdge(adrendelle, pandora, 150);
    g.addEdge(adrendelle, metroville, 99);
    g.addEdge(adrendelle, monstroplolis, 42);
    g.addEdge(metroville, pandora, 82);
    g.addEdge(metroville, adrendelle, 99);
    g.addEdge(metroville, monstroplolis, 105);
    g.addEdge(metroville, naboo, 26);
    g.addEdge(metroville, narnia, 37);
    g.addEdge(monstroplolis, metroville, 73);
    g.addEdge(monstroplolis, adrendelle, 42);
    g.addEdge(monstroplolis, naboo, 73);
    g.addEdge(naboo, monstroplolis, 73);
    g.addEdge(naboo, metroville, 26);
    g.addEdge(naboo, narnia, 250);
    g.addEdge(narnia, naboo, 250);
    g.addEdge(narnia, metroville, 37);

    let actual = getEdges(g, [metroville, pandora]);
    let expected = [true, "$82"];

    expect(actual).toEqual(expected);
  });

  it("Should handle example #2", () => {
    let g = new Graph();
    let pandora = g.addNode("Pandora");
    let adrendelle = g.addNode("Arendelle");
    let metroville = g.addNode("Metroville");
    let monstroplolis = g.addNode("Monstroplolis");
    let naboo = g.addNode("Naboo");
    let narnia = g.addNode("Narnia");

    g.addEdge(pandora, adrendelle, 150);
    g.addEdge(pandora, metroville, 82);
    g.addEdge(adrendelle, pandora, 150);
    g.addEdge(adrendelle, metroville, 99);
    g.addEdge(adrendelle, monstroplolis, 42);
    g.addEdge(metroville, pandora, 82);
    g.addEdge(metroville, adrendelle, 99);
    g.addEdge(metroville, monstroplolis, 105);
    g.addEdge(metroville, naboo, 26);
    g.addEdge(metroville, narnia, 37);
    g.addEdge(monstroplolis, metroville, 73);
    g.addEdge(monstroplolis, adrendelle, 42);
    g.addEdge(monstroplolis, naboo, 73);
    g.addEdge(naboo, monstroplolis, 73);
    g.addEdge(naboo, metroville, 26);
    g.addEdge(naboo, narnia, 250);
    g.addEdge(narnia, naboo, 250);
    g.addEdge(narnia, metroville, 37);

    let actual = getEdges(g, [adrendelle, monstroplolis, naboo]);
    let expected = [true, "$115"];

    expect(actual).toEqual(expected);
  });

  it("Should handle example #3", () => {
    let g = new Graph();
    let pandora = g.addNode("Pandora");
    let adrendelle = g.addNode("Arendelle");
    let metroville = g.addNode("Metroville");
    let monstroplolis = g.addNode("Monstroplolis");
    let naboo = g.addNode("Naboo");
    let narnia = g.addNode("Narnia");

    g.addEdge(pandora, adrendelle, 150);
    g.addEdge(pandora, metroville, 82);
    g.addEdge(adrendelle, pandora, 150);
    g.addEdge(adrendelle, metroville, 99);
    g.addEdge(adrendelle, monstroplolis, 42);
    g.addEdge(metroville, pandora, 82);
    g.addEdge(metroville, adrendelle, 99);
    g.addEdge(metroville, monstroplolis, 105);
    g.addEdge(metroville, naboo, 26);
    g.addEdge(metroville, narnia, 37);
    g.addEdge(monstroplolis, metroville, 73);
    g.addEdge(monstroplolis, adrendelle, 42);
    g.addEdge(monstroplolis, naboo, 73);
    g.addEdge(naboo, monstroplolis, 73);
    g.addEdge(naboo, metroville, 26);
    g.addEdge(naboo, narnia, 250);
    g.addEdge(narnia, naboo, 250);
    g.addEdge(narnia, metroville, 37);

    let actual = getEdges(g, [narnia, adrendelle, naboo]);
    let expected = [false, "$0"];

    expect(actual).toEqual(expected);
  });

  it("Should handle example #4", () => {
    let g = new Graph();
    let pandora = g.addNode("Pandora");
    let adrendelle = g.addNode("Arendelle");
    let metroville = g.addNode("Metroville");
    let monstroplolis = g.addNode("Monstroplolis");
    let naboo = g.addNode("Naboo");
    let narnia = g.addNode("Narnia");

    g.addEdge(pandora, adrendelle, 150);
    g.addEdge(pandora, metroville, 82);
    g.addEdge(adrendelle, pandora, 150);
    g.addEdge(adrendelle, metroville, 99);
    g.addEdge(adrendelle, monstroplolis, 42);
    g.addEdge(metroville, pandora, 82);
    g.addEdge(metroville, adrendelle, 99);
    g.addEdge(metroville, monstroplolis, 105);
    g.addEdge(metroville, naboo, 26);
    g.addEdge(metroville, narnia, 37);
    g.addEdge(monstroplolis, metroville, 73);
    g.addEdge(monstroplolis, adrendelle, 42);
    g.addEdge(monstroplolis, naboo, 73);
    g.addEdge(naboo, monstroplolis, 73);
    g.addEdge(naboo, metroville, 26);
    g.addEdge(naboo, narnia, 250);
    g.addEdge(narnia, naboo, 250);
    g.addEdge(narnia, metroville, 37);

    let actual = getEdges(g, [naboo, pandora]);
    let expected = [false, "$0"];

    expect(actual).toEqual(expected);
  });

  it("Should handle example around the world", () => {
    let g = new Graph();
    let pandora = g.addNode("Pandora");
    let adrendelle = g.addNode("Arendelle");
    let metroville = g.addNode("Metroville");
    let monstroplolis = g.addNode("Monstroplolis");
    let naboo = g.addNode("Naboo");
    let narnia = g.addNode("Narnia");

    g.addEdge(pandora, adrendelle, 150);
    g.addEdge(pandora, metroville, 82);
    g.addEdge(adrendelle, pandora, 150);
    g.addEdge(adrendelle, metroville, 99);
    g.addEdge(adrendelle, monstroplolis, 42);
    g.addEdge(metroville, pandora, 82);
    g.addEdge(metroville, adrendelle, 99);
    g.addEdge(metroville, monstroplolis, 105);
    g.addEdge(metroville, naboo, 26);
    g.addEdge(metroville, narnia, 37);
    g.addEdge(monstroplolis, metroville, 73);
    g.addEdge(monstroplolis, adrendelle, 42);
    g.addEdge(monstroplolis, naboo, 73);
    g.addEdge(naboo, monstroplolis, 73);
    g.addEdge(naboo, metroville, 26);
    g.addEdge(naboo, narnia, 250);
    g.addEdge(narnia, naboo, 250);
    g.addEdge(narnia, metroville, 37);

    let actual = getEdges(g, [
      pandora,
      metroville,
      narnia,
      naboo,
      monstroplolis,
      adrendelle,
      pandora,
    ]);
    let expected = [true, "$634"];

    expect(actual).toEqual(expected);
  });
});
