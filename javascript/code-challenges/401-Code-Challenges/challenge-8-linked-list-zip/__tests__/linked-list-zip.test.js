"use strict";

const { LinkedList, Node, zipLists } = require("../linked-list.js");

describe("LinkedList Zip function", () => {
  describe("things", () => {
    // test to see if zip works when first linked list is longer than the second
    it("should return a linked list with nodes interleaved", () => {
      // make a linked list with nodes
      let shortList = new LinkedList(new Node("salmon", new Node("pizza")));

      // make a longer linked list with more nodes
      let longList = new LinkedList(
        new Node("chip", new Node("turkey", new Node("pasta")))
      );

      // run zipLists()
      let zippedList = zipLists(shortList, longList);

      // expect them to be interleaved
      expect(zippedList.toString()).toEqual(
        "{ salmon } -> { chip } -> { pizza } -> { turkey } -> { pasta } -> NULL"
      );
    });

    // test to see if zip works when second linked list is longer than the first
    it("should return a linked list with nodes interleaved", () => {
      // make a linked list with nodes
      let longList = new LinkedList(
        new Node(
          "coffee",
          new Node("lemonade", new Node("coconut-water", new Node("coke")))
        )
      );

      // make a longer linked list with more nodes
      let soupList = new LinkedList(
        new Node("potatoes", new Node("tomatoes", new Node("chicken")))
      );

      // run zipLists()
      let zippedList = zipLists(longList, soupList);

      // expect them to be interleaved
      expect(zippedList.toString()).toEqual(
        "{ coffee } -> { lemonade } -> { coconut-water } -> { potatoes } -> { coke } -> { chicken } -> { tomatoes } -> NULL"
      );
    });

    // test for when one linked list is null
    it("should return undefined", () => {
      // make a linked list with nodes
      let emptyList = new LinkedList();

      // make a longer linked list with more nodes
      let notEmptyList = new LinkedList(
        new Node("potatoes", new Node("tomatoes", new Node("chicken")))
      );

      // run zipLists()
      let zippedList = zipLists(emptyList, notEmptyList);

      // expect them to be interleaved
      expect(zippedList).toEqual(undefined);
    });

    // test to see if zip stops when linked list's head is null or undefined
    it("should return null", () => {
      // make a linked list with nodes
      let emptyList = new LinkedList();

      // make a longer linked list with more nodes
      let emptierList = new LinkedList();

      // run zipLists()
      let zippedList = zipLists(emptyList, emptierList);

      // expect them to be interleaved
      expect(zippedList).toEqual(undefined);
    });
  });
});
