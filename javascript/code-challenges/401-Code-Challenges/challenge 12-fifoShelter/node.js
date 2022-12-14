"use strict";

let AnimalShelter = require("./AnimalShelter");
let animalShelter = new AnimalShelter();

animalShelter.enqueue("cat");
animalShelter.enqueue("cat");
animalShelter.enqueue("cat");
animalShelter.enqueue("dog");

console.log(animalShelter.toString());

animalShelter.dequeue("dog");

console.log(animalShelter.toString());
