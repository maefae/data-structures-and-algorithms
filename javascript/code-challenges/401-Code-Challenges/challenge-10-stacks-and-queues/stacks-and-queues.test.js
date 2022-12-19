"use strict";

const { LinkedList, Stack, Queue } = require("./stacks-and-queues.js");

describe("Test groups for LinkedLists", () => {
  describe("Testing Challenge 06 Singly LinkedLists", () => {
    it("Should instantiate a linked list with no items", () => {
      let l1 = new LinkedList();
      let actual = l1.head;

      expect(actual).toBeNull();
    });

    describe("Testing toString method", () => {
      it("Should return a string representation of itself", () => {
        let ll = new LinkedList();
        ll.insert(1);

        let actual = ll.toString();
        let expected = "{1} -> NULL";

        expect(actual).toEqual(expected);
      });
    });

    describe("Testing insert method", () => {
      it("Should add a value into the LinkedList", () => {
        let ll = new LinkedList();
        ll.insert("pizza");

        let actual = ll.head.value;
        let expected = "pizza";

        expect(actual).toEqual(expected);
      });

      it("Should add multiple nodes to the end of a linked list", () => {
        let ll = new LinkedList();
        ll.insert("pizza");
        ll.insert("ice cream");
        ll.insert(5);

        let actual = ll.toString();
        let expected = "{5} -> {ice cream} -> {pizza} -> NULL";

        expect(actual).toEqual(expected);
      });
    });

    describe("Testing include method", () => {
      it("Should return true if a LinkedList includes a value", () => {
        let ll = new LinkedList();
        ll.insert("a");
        ll.insert("b");
        ll.insert("c");

        let actual = ll.includes("c");

        expect(actual).toBeTruthy();
      });

      it("Should return false if a LinkedList includes a value", () => {
        let ll = new LinkedList();
        ll.insert("a");
        ll.insert("b");
        ll.insert("c");

        let actual = ll.includes("d");

        expect(actual).toBeFalsy();
      });
    });

    describe("Testing insertBefore method", () => {
      it("Should insert a node before the head of a linked list", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);
        ll.insertBefore(1, 5);

        let actual = ll.toString();
        let expected = "{5} -> {1} -> {3} -> {2} -> NULL";

        expect(actual).toEqual(expected);
      });

      it("Should insert a node before a node located in the middle of a linked list", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);
        ll.insertBefore(3, 5);

        let actual = ll.toString();
        let expected = "{1} -> {5} -> {3} -> {2} -> NULL";

        expect(actual).toEqual(expected);
      });

      it("Should raise an error when attempting to insert before a value not found", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);

        let actual = () => {
          ll.insertBefore(4, 5);
        };
        let expected =
          "Value Error! Can't add a value before a value that does not exist.";

        expect(actual).toThrow(expected);
      });

      it("Should raise an error when attempting to insert before an empty linked list", () => {
        let ll = new LinkedList();
        let actual = () => {
          ll.insertBefore(4, 5);
        };
        let expected =
          "Value Error! Can't add a value before a value that does not exist.";

        expect(actual).toThrow(expected);
      });
    });

    describe("Testing append method", () => {
      it("Should append to an empty linked list", () => {
        let ll = new LinkedList();
        ll.append(1);

        let actual = ll.toString();
        let expected = "{1} -> NULL";

        expect(actual).toEqual(expected);
      });

      it("Should append to the end of linked list", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);
        ll.append(5);

        let actual = ll.toString();
        let expected = "{1} -> {3} -> {2} -> {5} -> NULL";

        expect(actual).toEqual(expected);
      });
    });

    describe("Testing insertAfter method", () => {
      it("Should raise an error when attempting to insert after an empty linked list", () => {
        let ll = new LinkedList();

        let actual = () => {
          ll.insertAfter(3, 5);
        };
        let expected =
          "Value Error! Can't add a value after a value that does not exist.";

        expect(actual).toThrow(expected);
      });

      it("Should insert after given value within the linked list Test 1", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);
        ll.insertAfter(3, 5);

        let actual = ll.toString();
        let expected = "{1} -> {3} -> {5} -> {2} -> NULL";

        expect(actual).toEqual(expected);
      });

      it("Should insert after given value within the linked list Test 2", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(2);
        ll.insert(1);
        ll.insertAfter(2, 5);

        let actual = ll.toString();
        let expected = "{1} -> {2} -> {5} -> {2} -> NULL";

        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Testing Challenge 07 Singly LinkedLists: Insertions", () => {
    describe("Testing kthFromEnd method", () => {
      it('Should find follow the "Happy Path" where k is in the middle', () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(8);
        ll.insert(3);
        ll.insert(1);

        let actual = ll.kthFromEnd(2);
        let expected = 3;

        expect(actual).toEqual(expected);
      });

      it("Should handle a k value of zero", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(8);
        ll.insert(3);
        ll.insert(1);

        let actual = ll.kthFromEnd(0);
        let expected = 2;

        expect(actual).toEqual(expected);
      });

      it("Should handle when k is not a positive integer", () => {
        let ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.insert(1);

        let actual = () => {
          ll.kthFromEnd(-1);
        };

        let expected =
          "Value Error! Can't find a value from end of a linked list with a negative number.";

        expect(actual).toThrow(expected);
      });

      it("Should handle when a linked list is the size of 1", () => {
        let ll = new LinkedList();
        ll.insert(5);

        let actual = ll.kthFromEnd(1);
        let expected = 5;

        expect(actual).toEqual(expected);
      });

      it("Should handle when k is greater than the length of the linked list", () => {
        let ll = new LinkedList();
        ll.insert(5);
        ll.insert(10);
        ll.insert(15);

        let actual = () => {
          ll.kthFromEnd(5);
        };

        let expected = "Value Error! Input K is longer than the linked list.";

        expect(actual).toThrow(expected);
      });
    });
  });
});

describe("Testing Challenge 10: Stacks and Queues", () => {
  describe("Testing Stack Functionality: ", () => {
    describe("Testing the push method: ", () => {
      it("Should push one item onto the stack", () => {
        let s = new Stack();
        s.push(1);

        let actual = s.peek();
        let expected = 1;

        expect(actual).toEqual(expected);
      });

      it("Should push multiple items onto the stack", () => {
        let s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);

        let actual = s.peek();
        let expected = 3;

        expect(actual).toEqual(expected);
      });
    });

    describe("Testing the pop method: ", () => {
      it("Should pop one item off the stack", () => {
        let s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);

        let actual = s.pop();
        let expected = 3;

        expect(actual).toEqual(expected);
        expect(s.peek()).toEqual(2);
      });

      it("Should pop multiple items off the stack", () => {
        let s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        let actual = s.peek();
        let expected = 3;
        expect(actual).toEqual(expected);

        s.pop();
        s.pop();

        actual = s.peek();
        expected = 1;

        expect(actual).toEqual(expected);
      });

      it("Should throw an error when attempting to pop from an empty stack", () => {
        let s = new Stack();

        let actual = () => {
          s.pop();
        };

        expect(actual).toThrow("Can't pop from an empty stack!");
      });
    });

    describe("Testing the peek method: ", () => {
      it("Should peek the top item of a stack", () => {
        let s = new Stack();
        s.push(321);

        let actual = s.peek();
        let expected = 321;

        expect(actual).toEqual(expected);
      });

      it("Should throw an error when attempting to peek the top of an empty stack", () => {
        let s = new Stack();

        let actual = () => {
          s.peek();
        };

        expect(actual).toThrow("Can't peek an empty stack!");
      });
    });

    describe("Testing the isEmpty method: ", () => {
      it("Should return true when the stack is empty", () => {
        let s = new Stack();

        let actual = s.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
      });

      it("Should return false when the stack has items", () => {
        let s = new Stack();
        s.push(123);

        let actual = s.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
      });
    });
  });

  describe("Testing Queue Functionality: ", () => {
    describe("Testing the enqueue method: ", () => {
      it("Should enqueue one item", () => {
        let q = new Queue();
        q.enqueue(99);

        let actual = q.peek();
        let expected = 99;

        expect(actual).toEqual(expected);
      });

      it("Should enqueue multiple items", () => {
        let q = new Queue();
        q.enqueue(99);
        q.enqueue(55);
        q.enqueue(13);

        let actual = q.peek();
        let expected = 99;
        expect(actual).toEqual(expected);

        q.dequeue();

        actual = q.peek();
        expected = 55;
        expect(actual).toEqual(expected);
      });
    });

    describe("Testing the dequeue method: ", () => {
      it("Should dequeue one time", () => {
        let q = new Queue();
        q.enqueue(99);
        q.enqueue(55);
        q.enqueue(59);

        let actual = q.dequeue();
        let expected = 99;
        expect(actual).toEqual(expected);

        actual = q.peek();
        expected = 55;
        expect(actual).toEqual(expected);
      });

      it("Should dequeu multiple items", () => {
        let q = new Queue();
        q.enqueue(99);
        q.enqueue(55);
        q.enqueue(59);

        q.dequeue();
        q.dequeue();

        let actual = q.peek();
        let expected = 59;
        expect(actual).toEqual(expected);
      });

      it("Should throw an error when attempting to dequeue from an empty queue", () => {
        let q = new Queue();

        let actual = () => {
          q.dequeue();
        };
        let expected = "Can't dequeue from an empty queue";
        expect(actual).toThrow(expected);
      });
    });

    describe("Testing the peek method: ", () => {
      it("Should peek the front item in the queue", () => {
        let q = new Queue();
        q.enqueue(99);
        q.enqueue(55);
        q.enqueue(59);

        let actual = q.peek();
        let expected = 99;
        expect(actual).toEqual(expected);
      });

      it("Should throw an error when attempting to peek the front of an empty queue", () => {
        let q = new Queue();

        let actual = () => {
          q.peek();
        };

        let expected = "Can't peek an empty queue";
        expect(actual).toThrow(expected);
      });
    });

    describe("Testing the isEmpty method: ", () => {
      it("Should return true when the queue is empty", () => {
        let q = new Queue();

        let actual = q.isEmpty();
        let expected = true;
        expect(actual).toEqual(expected);
      });

      it("Should return false when the queue has items", () => {
        let q = new Queue();
        q.enqueue(1);

        let actual = q.isEmpty();
        let expected = false;
        expect(actual).toEqual(expected);
      });
    });
  });
});
