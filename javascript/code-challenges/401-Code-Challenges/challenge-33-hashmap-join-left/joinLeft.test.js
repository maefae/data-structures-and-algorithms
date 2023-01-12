"use strict";
const leftJoin = require("./joinLeft");
const map1 = new Map();
const map2 = new Map();

map1.set("diligent", "employed");
map1.set("fond", "enamored");
map1.set("guide", "usher");
map1.set("outfit", "garb");
map1.set("wrath", "anger");

map2.set("diligent", "idle");
map2.set("fond", "averse");
map2.set("guide", "follow");
map2.set("flow", "jam");
map2.set("wrath", "delight");

describe("Join left function", () => {
  it("return all values that match in both maps", () => {
    const joined = leftJoin(map1, map2);

    expect(joined[0]).toEqual(["diligent", "employed", "idle"]);
    expect(joined[1]).toEqual(["fond", "enamored", "averse"]);
    expect(joined[2]).toEqual(["guide", "usher", "follow"]);
    expect(joined[3]).toEqual(["outfit", "garb", null]);
    expect(joined[4]).toEqual(["wrath", "anger", "delight"]);
  });

  it("return null where no match is found", () => {
    const joined = leftJoin(map1, map2);

    expect(joined[3][2]).toBeNull();
  });
});
