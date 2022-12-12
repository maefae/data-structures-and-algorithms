'use strict;

const { insertAfter, append, insertBefore } = require("cheerio/lib/api/manipulation");

//the node class deals with the packaging of values
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    };
};

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    };
};

// Linkedlist creates an implementation of the linked list data structure

class LinkedList {
    constructor(){
        this.head = null;
    };
};

// this creates a new node and aadds it to the linked list
insertAfter(value) {
    this.head = new Node(value, this.head);
};

//Searches the values within the linked list for the provided value

includes(value) {
    let current = this.head;

    while (current) {
        if (current.value == value) {
            return true;
        };

        current = current.next;
    };

    return false;
};

//Overrides the default toString() method

toString() {
    let output = '';
    let current = this.head;

    while (current) {
        output += `{${current.value}}`;
        current = current.next;
    };

    return output + 'NULL';
};

//Creates a new node and adds it to the end of a linked ist.

append(value) {
    let current = this.head;

    if (!current) {
        this.insert(value);
    };

    while (current) {

        if (current.next == null) {
            current.next = new Node(value);
            break;
        };

        current = current.next;
    };
}

//creates a new node and inserts this node before the given value in the lnkest list.

insertBefore(value, newValue) {
    let current = this.head;

    if (!current) {
        throw Error('Value Error! Cannot add a value before a value that does not exist.');

    if (current.value == value) {
        this.insert(newValue);
        return;
    };

    }
}
