# Singly Linked List
A singly linked list is a type of linked list that is undirectional (can travel in only one direction from head to the last node).
Whereas a linked list in general is a linear data structure where elements are not stored at adjacent memory locations. Elements in a linked list are joined together using pointers.

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Initially, I re-watched the lecture to have a better understanding of what direction I wanted to take. Chose the TDD approach.
Like in lecture, I wrote the tests in linkedList.test.js, and then moved on to writing the code so that the tests could pass.
As a result, the Big O for the TDD approach is O(n) for time and O(n) for space.

## API

**add()**
- Arguments: value
- Returns: nothing
- Adds a new node with that value to the end of the list.

**insert()**
- Arguments: value
- Returns: nothing
- Adds a new node with that value to the head of the list with an O(1) Time performance.

**includes()**
- Arguments: value
- Returns: Boolean
- Indicates whether that value exists as a Node’s value somewhere within the list.

**toString()**
- Arguments: none
- Returns: a string representing all the values in the Linked List, formatted as:

`"{ a } -> { b } -> { c } -> NULL"`
