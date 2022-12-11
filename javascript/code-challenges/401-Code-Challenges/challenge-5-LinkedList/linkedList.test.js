"use strict";

const LinkedList = require("./linkedList.js");

describe("Linked List", () => {
  let list = new LinkedList();
  it("Successfully instantiates an empty linked list", () => {
    expect(list.head).toBeNull();
  });
  it("Inserts into the linked list", () => {
    list.insert("c");
    expect(list.head.data).toEqual("c");
  });
  test("The head property points to the first node in the linked list", () => {
    list.insert("b");
    list.insert("a");
    expect(list.head.data).toEqual("a");
  });
  it("Inserts multiple nodes into the linked list", () => {
    expect(list.head.next.next.data).toEqual("c");
  });
  it("Returns true when finding a value within the linked list that exists", () => {
    expect(list.includes("a")).toBeTruthy();
  });
  it("Returns false when searching for a value in the linked list that does not exist", () => {
    expect(list.includes("z")).toBeFalsy();
  });
  it("Returns a collection of all the values that exist in the linked list", () => {
    expect(list.toString()).toEqual(
      `{ ${list.head.data} } -> { ${list.head.next.data} } -> { ${list.head.next.next.data} } -> NULL`
    );
  });
  test("The size of the list is incremented when a new node is added", () => {
    expect(list.size).toEqual(3);
  });
});
