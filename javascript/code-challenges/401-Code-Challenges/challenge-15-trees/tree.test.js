"use strict";

const { Node, BinaryTree, BinarySearchTree } = require("./tree");

describe("Tree", () => {
  it("can be created as expected", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });
  // I am not going to completely build this, it should fail
  it("returns a preOrder traversal array as expected", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.preOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });
});

describe("testing binary search tree", () => {
  it("should successfully instantiate an empty tree", () => {
    let actual = new BinarySearchTree();

    expect(actual).toBeDefined();
  });

  it("should successfully instantiate a tree with a single root node", () => {
    const tree = new BinarySearchTree();
    tree.add(10);

    let actual = tree.root.value;
    let expected = 10;

    expect(actual).toEqual(expected);
  });

  test("should have a left and right node", () => {
    const tree = new BinarySearchTree();
    tree.add(25);
    tree.add(20);
    tree.add(30);

    let right = tree.root.right.value;
    let left = tree.root.left.value;
    let root = tree.root.value;

    expect(right).toEqual(30);
    expect(left).toEqual(20);
    expect(root).toEqual(25);
  });

  test("should successfully return a collection from a preOrder traversal", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(13);
    tree.add(5);
    tree.add(7);

    let actual = tree.preOrder();
    let expected = [10, 5, 7, 20, 13];
    expect(actual).toEqual(expected);
  });

  test("should successfully return a collection from a inOrder traversal", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(13);
    tree.add(5);
    tree.add(7);

    let actual = tree.inOrder();
    let expected = [5, 7, 10, 13, 20];
    expect(actual).toEqual(expected);
  });

  test("should successfully return a collection from a PostOrder traversal", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(13);
    tree.add(5);
    tree.add(7);

    let actual = tree.postOrder();
    let expected = [7, 5, 13, 20, 10];
    expect(actual).toEqual(expected);
  });

  test("should return true when the value is in the tree", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(13);
    tree.add(5);
    tree.add(7);

    let actual = tree.contains(10);
    let expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return false when the value is not in the tree", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(20);
    tree.add(13);
    tree.add(5);
    tree.add(7);

    let actual = tree.contains(599);
    let expected = false;
    expect(actual).toEqual(expected);
  });
});
