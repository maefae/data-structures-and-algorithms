"use strict";

class LinkedList {
  // specify the default `head` of the linked list class will be `null` one isn't provided
  constructor(head = null) {
    // `head' property points to a `Node` object that serves as the start of this linked list
    this.head = head;
  }

  // this method adds a new node at the `head` of the linked list with O(1) Time performance
  // pass in a value to make a new `Node` we want to serve as the `head`
  // make the new node point to the current `head`
  // then make this linked list object point to the new `head`
  insert(newHeadData) {
    // set newHead.next as the value of this linked list's `head` node
    let newHead = new Node(newHeadData, this.head);
    this.head = newHead;
    // set the `head` of this linked list as  newHead
    // this.head = newHead;
    // returns nothing
  }

  // traverse the linked list to look if this linked list includes the specified `searchKey`
  // if the list does, return `true`
  // else, return `false`
  includes(searchKey) {
    // if there is no `head` on this linked list
    if (this.head === null) {
      // return false, because there's nothing to search through
      return false;
    } else {
      // designate current as the linked list's head
      let current = this.head;

      // flag to designate if the searchKey has been found
      let found = false;
      while (current !== null && !found) {
        console.log("in loop");
        console.log("current.data: ", current.data);
        console.log("searchKey: ", searchKey);
        console.log("found: ", found);
        // if the data of the current node matches the searchKey
        // set `found` to true
        // otherwise, go to the next node
        /*
        if (current.data === searchKey)
        {
          found = true;
        }
        else
        {
          current = current.next;
        }
        */
        current.data === searchKey ? (found = true) : (current = current.next);
      }
      // returns boolean
      // will return
      return found;
    }
  }

  // this method returns a string to represent all values in a linked list
  // ex: "{ a } -> { b } -> { c } -> NULL"
  // build a string
  // steps:
  // - check if the LinkedList has any nodes
  // if so, start with `{ ` and go from there
  // next would be the `<value-of-the-'head'> } -> ``
  // then check if the head's `next` property isn't null
  // if so, rinse and repeat
  // until we point to 'NULL'
  // then return the final string
  toString() {
    // if there is no head `Node` to point to
    if (this.head === null) {
      return "{}";
    }
    // if there is a head `Node` to point to
    else {
      // start building first node from `head`
      let output = "{ ";

      // fill output with data in `head`
      output += `${this.head.data} } -> `;

      // specify the next node
      let current = this.head.next;

      // whilst `current` isn't null
      while (current !== null) {
        // add the brackets, `current` data, and arrow to the  `output` string
        output += `{ ${current.data} } -> `;
        current = current.next;
      }

      // when we get here, current isn't a `Node`, it's `null, so we concatenate `NULL` to the end of `output`
      output += "NULL";

      // returns `output`
      return output;
    }
  }

  // append
  // accepts 1 parameter: new value
  // this method creates a new `Node` at the end of the LinkedList with the passed in value as the `data` field
  /* Append examples:
    Initial List	                Method Args	Resulting List
    head -> {1} -> {3} -> {2} -> X	5	head -> {1} -> {3} -> {2} -> {5} -> X
    head -> X	1	head -> {1} -> X
  */

  append(newData) {
    // traverse a list
    // make the new Node point to `null`
    let newNode = new Node(newData);
    // on traverse a list if the linked list has a Node attached to it
    if (this.head !== null) {
      // set current as the linkedlist's head
      let current = this.head;

      // keep looping until we hit a null value
      while (current.next !== null) {
        current = current.next;
      }

      // when `current.next` is pointing to `null`
      // create a new Node with `newData`

      // make `current` point to the new Node
      current.next = newNode;
    }
    // if this linked list has no head node
    else {
      this.head = newNode;
    }
    // returns nothing
  }

  // insert before
  // accepts 2 parameters: search value, new value
  // this method adds a new `Node` immediately BEFORE the first node that has the specified `search value`

  /*  Insert Before
    Initial List	               Method Args	Resulting List
    head -> {1} -> {3} -> {2} -> X	3, 5	head -> {1} -> {5} -> {3} -> {2} -> X
    head -> {1} -> {3} -> {2} -> X	1, 5	head -> {5} -> {1} -> {3} -> {2} -> X
    head -> {1} -> {2} -> {2} -> X	2, 5	head -> {1} -> {5} -> {2} -> {2} -> X
    head -> {1} -> {3} -> {2} -> X	4, 5	No change, method exception
  */

  insertBefore(searchData, newData) {
    // traverse a linked list
    // when `current.next.data` === the `searchData`
    // make a new Node with newData
    // make the new Node point to `current.next`
    // make `current` point to the newNode
    // at this point, we found the value, created a new node, and inserted the new node before the searchData
    // returns nothing
  }

  // insert after
  // accepts 2 parameters: search value, value
  // this method adds a new `Node` immediately AFTER the first node that has the value specified
  /* Insert After examples:
    Initial List	                Method Args	Resulting List
    head -> {1} -> {3} -> {2} -> X	3, 5	head -> {1} -> {3} -> {5} -> {2} -> X
    head -> {1} -> {3} -> {2} -> X	2, 5	head -> {1} -> {3} -> {2} -> {5} -> X
    head -> {1} -> {2} -> {2} -> X	2, 5	head -> {1} -> {2} -> {5} -> {2} -> X
    head -> {1} -> {3} -> {2} -> X	4, 5	No change, method exception
  */
  insertAfter(searchData, newData) {
    // traverse a list
    // when current.data === the `searchKey`
    // create a new Node with newData
    // make the new Node point to current.next
    // make current.next point to the new node
    // break
    // returns nothing
  }
}

// Node class for use with singly linked lists
class Node {
  // value is the data of the Node and 'next' points at the next Node object in this linked list
  // `next` is null if not provided
  constructor(data, next = null) {
    // data of this Node
    this.data = data;

    // pointer to the next `Node` object in the linked list
    this.next = next;
  }
  /*
  toString()
  {
    // wrote this to test for reference errors
    return `[${ this.data }]`;
  }
  */
}

// export the LinkedList class and the
module.exports = {
  LinkedList,
  Node,
  zipLists,
};

// accepts two parameters: 1 linked lists
// this method takes two linked lists, and returns a new linked list with interleaves nodes interleaves their nodes
function zipLists(list1, list2) {
  // strategy:
  // make a condition where list1.head and list2.head are not null
  if (list1.head !== null && list2.head !== null) {
    // make a new linked list
    // set the head of the new linkedList to point nothing, at first
    let zippedList = new LinkedList();
    //console.log('zippedList upon instantiation', zippedList.toString());

    // initial value of current1 is list1's head
    let thing1 = list1.head;
    // initial value of current2 is list2's head
    let thing2 = list2.head;

    // use the `.append()` method to add thing1 and then thing2 to the end of the new linked list
    zippedList.append(thing1.data);
    zippedList.append(thing2.data);

    //console.log('list1 toString before loop:', list1.toString());
    //console.log('list2 toString before loop:', list2.toString());
    //console.log('zippedList before loop: ', zippedList.toString());
    // make a while loop: while current1 or current2 isn't null
    // so if one list is null, but the other isn't, it'll keep on looping
    while (thing1.next || thing2.next) {
      if (thing1.next) {
        // go to the next Node of list1
        thing1 = thing1.next;
        // append thing1 to the zippedList
        zippedList.append(thing1.data);

        // log state of zippedList in thing1
        //console.log('zippedList in thing1: ', zippedList.toString());
      }

      if (thing2.next) {
        // go to the next Node of list1
        thing2 = thing2.next;
        // append thing1 to the zippedList
        zippedList.append(thing2.data);

        // log state of zippedList in thing2
        //console.log('zippedList in thing2: ', zippedList.toString());
      }
    }
    // after the loopage, return the zippedList
    return zippedList;
  }
}

/*
// random tests
let testNode = new Node('poop');
console.log('testNode toString: ', testNode.toString());
let testNode2 = new Node('peep');
testNode.next = testNode2;
let testList2 = new LinkedList(new Node('meep', new Node('MEEP')));
let testList = new LinkedList(testNode);
console.log(testNode);
console.log(testList.toString());
// `includes()` test
console.log(testList.includes('poop'));
console.log(testList2.toString());
testList.insert('new head');
console.log('testList toString: ', testList.toString());
testList.append(99);
console.log(testList.toString());
let zippedList = zipLists(testList, testList2);
console.log('zippedList toString: ', zippedList.toString());
*/
