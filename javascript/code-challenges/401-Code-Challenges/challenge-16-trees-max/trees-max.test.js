"use strict";

const BinarySearchTree = require("./trees-max");

describe("Testing Binary Tree Challenges", () => {
  describe("Testing Challenge 15: Trees: ", () => {
    it("Should create an instance of a BST", () => {
      let actual = new BinarySearchTree();

      expect(actual).toBeDefined();
    });

    describe("Testing BST Functionality: ", () => {
      describe("Testing the BST add() method: ", () => {
        it("Should add a single root", () => {
          let bst = new BinarySearchTree();
          bst.add(1337);

          let actual = bst.root.value;
          let expected = 1337;

          expect(actual).toEqual(expected);
        });

        it("Should have a left and right when adding 3 nodes", () => {
          let bst = new BinarySearchTree();
          bst.add(2);
          bst.add(1);
          bst.add(3);

          let right = bst.root.right.value;
          let left = bst.root.left.value;
          let root = bst.root.value;

          expect(right).toEqual(3);
          expect(left).toEqual(1);
          expect(root).toEqual(2);
        });
      });

      describe("Testing the BST contains() method: ", () => {
        it("Should return true when a value is within the BST", () => {
          let bst = new BinarySearchTree();
          bst.add(85);
          bst.add(70);
          bst.add(75);
          bst.add(45);
          bst.add(100);
          bst.add(90);
          bst.add(110);

          let actual = bst.contains(45);
          let expected = true;

          expect(actual).toEqual(expected);
        });

        it("Should return false when a value is not in the BST", () => {
          let bst = new BinarySearchTree();
          bst.add(85);
          bst.add(70);
          bst.add(75);
          bst.add(45);
          bst.add(100);
          bst.add(90);
          bst.add(110);

          let actual = bst.contains(200);
          let expected = false;

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("Testing BT Functionality: ", () => {
      describe("Testing the preOrder() method: ", () => {
        it("Should return the preorder collection of the tree #1", () => {
          let bst = new BinarySearchTree();
          bst.add(1);
          bst.add(3);
          bst.add(20);
          bst.add(7);
          bst.add(8);
          let actual = bst.preOrder();
          let expected = [1, 3, 20, 7, 8];

          expect(actual).toEqual(expected);
        });

        it("Should return the preorder collection of the tree #2", () => {
          let bst = new BinarySearchTree();
          bst.add(5);
          bst.add(7);
          bst.add(8);
          bst.add(6);
          bst.add(3);
          bst.add(2);
          bst.add(4);
          let actual = bst.preOrder();
          let expected = [5, 3, 2, 4, 7, 6, 8];

          expect(actual).toEqual(expected);
        });
      });

      describe("Testing the inOrder() method: ", () => {
        it("Should return the inOrder collection of the tree #1", () => {
          let bst = new BinarySearchTree();
          bst.add(85);
          bst.add(70);
          bst.add(75);
          bst.add(45);
          bst.add(100);
          bst.add(90);
          bst.add(110);
          let actual = bst.inOrder();
          let expected = [45, 70, 75, 85, 90, 100, 110];

          expect(actual).toEqual(expected);
        });

        it("Should return the inOrder collection of the tree #2", () => {
          let bst = new BinarySearchTree();
          bst.add(50);
          bst.add(60);
          bst.add(55);
          bst.add(40);
          bst.add(45);
          let actual = bst.inOrder();
          let expected = [40, 45, 50, 55, 60];

          expect(actual).toEqual(expected);
        });
      });

      describe("Testing the postOrder() method: ", () => {
        it("Should return postOrder collection of the tree #1", () => {
          let bst = new BinarySearchTree();
          bst.add(85);
          bst.add(70);
          bst.add(75);
          bst.add(45);
          bst.add(100);
          bst.add(90);
          bst.add(110);
          let actual = bst.postOrder();
          let expected = [45, 75, 70, 90, 110, 100, 85];

          expect(actual).toEqual(expected);
        });

        it("Should return postOrder collection of the tree #2", () => {
          let bst = new BinarySearchTree();
          bst.add(50);
          bst.add(60);
          bst.add(55);
          bst.add(40);
          bst.add(45);
          let actual = bst.postOrder();
          let expected = [45, 40, 55, 60, 50];

          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe("Testing Challenge 16: Get Maxiumum: ", () => {
    it("Should raise an error if the tree is empty", () => {
      let bst = new BinarySearchTree();

      let actual = () => {
        bst.getMaximum();
      };
      let expected = "Error! Empty Tree!";

      expect(actual).toThrow(expected);
    });

    it("Should find the maximum value #1", () => {
      let bst = new BinarySearchTree();
      bst.add(10);
      bst.add(7);
      bst.add(37);
      bst.add(34);

      let actual = bst.getMaximum();
      let expected = 37;

      expect(actual).toEqual(expected);
    });

    it("Should get the maximum value #2", () => {
      let bst = new BinarySearchTree();
      bst.add(22);
      bst.add(55);
      bst.add(14);
      bst.add(76);

      let actual = bst.getMaximum();
      let expected = 76;

      expect(actual).toEqual(expected);
    });
  });
});
