'use strict';

const Graph = require('./graph.js');


describe('Testing Challenge 35: Graph: ', () => {

  describe('Testing addNode() method: ', () => {

    it('Should add one to the graph', () => {

      let g = new Graph();
      g.addNode('Test Node');

      let actual = g.getNodes().length;
      let expected = 1;

      expect(actual).toEqual(expected);

    });


    it('Should add two to the graph', () => {

      let g = new Graph();
      g.addNode('Test Node');
      g.addNode('random')

      let actual = g.getNodes().length;
      let expected = 2;

      expect(actual).toEqual(expected);

    });


  });


  describe('Testing addEdge() method: ', () => {


    it('Should handle exception if vertex 2 is not in the graph', () => {

      let g1 = new Graph();
      let g2 = new Graph();

      let node1 = g1.addNode(1);
      let node2 = g2.addNode(2);

      let actual = () => {
        g1.addEdge(node1, node2)
      };

      let expected = 'Error Vertex 2 is not within the Graph'

      expect(actual).toThrow(expected);

    });


    it('Should handle exception if vertex 1 is not in the graph', () => {

      let g1 = new Graph();
      let g2 = new Graph();

      let node1 = g1.addNode(1);
      let node2 = g2.addNode(2);

      let actual = () => {
        g2.addEdge(node1, node2)
      };

      let expected = 'Error Vertex 1 is not within the Graph'

      expect(actual).toThrow(expected);

    });


    it('Should add an edge between nodes', () => {

      let g = new Graph();
      let node1 = g.addNode('a');
      let node2 = g.addNode('b');

      g.addEdge(node1, node2)

      let actual = g.getNeighbors(node1).length
      let expected = 1

      expect(actual).toEqual(expected);

    });


  });


  describe('Testing getNodes() method: ', () => {

    let g = new Graph();
    g.addNode('a');
    g.addNode('b');
    g.addNode('c');

    let actual = g.getNodes().length;
    let expected = 3;

    expect(actual).toEqual(expected);

  });


  describe('Testing getNeighbors() method: ', () => {

    it('Should handle no neighbors', () => {

      let g = new Graph();
      let nodeA = g.addNode('a');
      let nodeB = g.addNode('b');
      let nodeC = g.addNode('c');
      let nodeD = g.addNode('d');

      g.addEdge(nodeA, nodeB);
      let actual = g.getNeighbors(nodeA).length;
      let expected = 1;

      expect(actual).toEqual(expected);

    });


    it('Should handle no neighbors', () => {

      let g = new Graph();
      let nodeA = g.addNode('a');
      let nodeB = g.addNode('b');
      let nodeC = g.addNode('c');
      let nodeD = g.addNode('d');

      let actual = g.getNeighbors(nodeA);
      let expected = [];

      expect(actual).toEqual(expected);

    });

  });


  describe('Testing size() method: ', () => {

    it('Should show a size of 1', () => {

      let g = new Graph()
      g.addNode('banana');
      g.addNode(1);
      let actual = g.size();
      let expected = 2;

      expect(actual).toEqual(expected);

    });


    it('Should show a size of greater than 1', () => {

      let g = new Graph()
      g.addNode('banana');
      g.addNode(1);
      g.addNode(2039123);


      let actual = g.size();
      let expected = 3;

      expect(actual).toEqual(expected);

    });

  });


});
