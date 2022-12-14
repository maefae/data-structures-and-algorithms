"use strict";
const LinkedList = require("./linkedList");
class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head;
      while (current) {
        if (current.value.key === key) {
          return current.value.value;
        }
        current = current.next;
      }
    }
  }
  set(key, value) {
    let position = this.hash(key);
    let data = { key: key, value: value };
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  has(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head;
      while (current) {
        if (current.value.key === key) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((item) => {
      if (item) keys.push(...Object.keys(item));
    });
    return keys;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i) + (i % this.table.length);
    }
    return hash;

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }
}
module.exports = HashTable;
