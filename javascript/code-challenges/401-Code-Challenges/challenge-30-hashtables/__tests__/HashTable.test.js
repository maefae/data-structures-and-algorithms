"use strict";

const HashTable = require("../HashTable");

describe("Testing the Hash Table class", () => {
  test("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    let testHashTable = new HashTable(1024);

    let testData = ["Pizza", "Pepperoni"];

    testHashTable.set(testData[0], testData[1]);

    expect(testHashTable.has("Pizza")).toEqual(true);
  });
  test("Retrieving based on a key returns the value stored", () => {
    let testHashTable = new HashTable(1024);

    let testData = ["Pizza", "Pepperoni"];

    let expectedResult = { [testData[0]]: testData[1] };

    testHashTable.set(testData[0], testData[1]);

    let result = testHashTable.get("Pizza");

    expect(result[0]).toEqual(expectedResult);
  });
  test("Successfully returns null for a key that does not exist in the hashtable", () => {
    let testHashTable = new HashTable(1024);

    let testData = ["Pizza", "Pepperoni"];

    testHashTable.set(testData[0], testData[1]);

    let result = testHashTable.has("Pizza");

    expect(result).toEqual(true);
  });
  test("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    let testHashTable = new HashTable(1024);

    const testPizza1 = { Pizza: "Pepperoni" };

    const testPizza2 = { Pizza: "Pepperoni" };

    const testLizard = { Pie: "Mushrooms" };

    testHashTable.set(
      Object.keys(testPizza1)[0],
      testPizza1[Object.keys(testPizza1)[0]]
    );

    testHashTable.set(
      Object.keys(testPizza2)[0],
      testPizza2[Object.keys(testPizza2)[0]]
    );

    // {Pie: 'Mushrooms'}
    testHashTable.set(
      Object.keys(testLizard)[0],
      testLizard[Object.keys(testLizard)[0]]
    );

    // console.log('testLizard: ', Object.keys(testLizard)[ 0 ], testLizard[ Object.keys(testLizard)[ 0 ] ]);

    // [ 'Pie', 'Pizza']
    let results = testHashTable.keys();
    // console.log('.keys() results: ', results);

    expect(results).toEqual(["Pie", "Pizza"]);
  });
  test("Successfully handle a collision within the hashtable", () => {
    let testHashTable = new HashTable(1024);

    const testPizza1 = { Pizza: "Pepperoni" };

    const testPizza2 = { Pizza: "Pepperoni" };

    // { Pizza: 'Pepperoni' }
    testHashTable.set(
      Object.keys(testPizza1)[0],
      testPizza1[Object.keys(testPizza1)[0]]
    );

    // { Pizza: 'Pepperoni' }
    testHashTable.set(
      Object.keys(testPizza2)[0],
      testPizza2[Object.keys(testPizza2)[0]]
    );

    // console.log('testPizza1 and value: ', Object.keys(testPizza1)[ 0 ], testPizza1[ Object.keys(testPizza1)[ 0 ] ]);

    // [ { Pizza: 'Pepperoni' }, { Pizza: 'Pepperoni' } ]
    let result = testHashTable.get("Pizza");
    //console.log('has("Pizza") results: ', result);

    // { Pizza: 'Pepperoni' } === { 'Pizza': 'Pepperoni' }
    expect(result[1]).toBeTruthy();
  });

  test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    let testHashTable = new HashTable(1024);

    const testPizza1 = { Pizza: "Pepperoni" };

    const testPizza2 = { Pizza: "Pepperoni" };

    // { Pizza: 'Pepperoni' }
    testHashTable.set(
      Object.keys(testPizza1)[0],
      testPizza1[Object.keys(testPizza1)[0]]
    );

    // { Pizza: 'Pepperoni' }
    testHashTable.set(
      Object.keys(testPizza2)[0],
      testPizza2[Object.keys(testPizza2)[0]]
    );

    // console.log('testPizza1 and value: ', Object.keys(testPizza1)[ 0 ], testPizza1[ Object.keys(testPizza1)[ 0 ] ]);

    // [ { Pizza: 'Pepperoni' }, { Pizza: 'Pepperoni' } ]
    let result = testHashTable.get("Pizza");
    //console.log('has("Pizza") results: ', result);

    // { Pizza: 'Pepperoni' } === { 'Pizza': 'Pepperoni' }
    expect(result[1]).toEqual(testPizza2);
  });
  test("Successfully hash a key to an in-range value", () => {
    const size = 1024;
    let testHashTable = new HashTable(size);

    const testKey = testHashTable.hash("Carpe omnia, I say. Not carpe diem.");

    expect(testKey).toBeGreaterThanOrEqual(0);
    expect(testKey).toBeLessThan(size);
  });
});
