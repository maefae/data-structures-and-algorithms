"use strict";

const LinkedList = require("./LinkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let characterSum = 0;
    for (let char in key) {
      characterSum += key.charCodeAt(char);
    }

    return (characterSum * 599) % this.size;
  }

  set(key, value) {
    let indexOfBucket = this.hash(key);

    let item = { [key]: value };

    if (this.table[indexOfBucket]) {
      this.table[indexOfBucket].add(item);
    } else {
      this.table[indexOfBucket] = new LinkedList();
      this.table[indexOfBucket].add(item);
    }
  }

  get(key) {
    let indexOfBucket = this.hash(key);
    let results = [];

    if (this.table[indexOfBucket]) {
      let pairs = this.table[indexOfBucket].values();

      pairs.forEach((pair) => {
        if (Object.keys(pair)[0] === key) {
          results.push(pair);
        }
      });
      return results;
    }
    return null;
  }

  /**
   * Returns a Boolean, indication if the key exists in the table.
   * @param (String) key
   * @return {Boolean}
   * does a key already exist in the hash table
   */
  has(key) {
    let indexOfBucket = this.hash(key);
    let isFound = false;

    if (this.table[indexOfBucket]) {
      // resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

      // put all of the keys from this bucket into an array and check if that array .includes() the key we're looking for
      isFound = Object.keys(
        Object.assign({}, ...this.table[indexOfBucket].values())
      ).includes(key);
      //console.log('was it found? ', isFound);
    }
    return isFound;
  }

  /**
   * Returns a collection of Keys
   * @return {Array}
   * What are all of the keys in the hash table?
   */
  keys() {
    // traverse the entire hashtable and return an array of all `keys` in the table
    // for buckets in this table
    // if bucket !null
    // return bucket.values()
    // by the end of it, we'll have an array with arrays of keys

    // traverse this.table array
    // if the current bucket isn't null, try to push any keys in the bucket into an array
    // return the array

    let keysArr = [];

    this.table.forEach((bucket) => {
      // if the linkedlist in the bucket has at least one node with a value
      if (bucket.head.value) {
        // get all of the keys in the bucket
        let currentBucketKeys = Object.keys(
          Object.assign({}, ...bucket.values())
        );
        // console.log('unique values in current bucket: ', currentBucketKeys);

        keysArr.push(...currentBucketKeys);
      }
    });

    // Set() returns an array with only unique values
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    return [...new Set(keysArr)];
  }
}

module.exports = HashTable;
