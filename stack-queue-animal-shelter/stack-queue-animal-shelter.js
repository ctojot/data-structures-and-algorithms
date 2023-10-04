'use strict';

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.push({ animal, order: this.order });
    } else if (animal.species === 'cat') {
      this.catQueue.push({ animal, order: this.order });
    }
    this.order++;
  }

  dequeue(pref) {
    if (pref === 'dog') {
      if (this.dogQueue.length > 0) {
        const { animal } = this.dogQueue.shift();
        return animal;
      }
    } else if (pref === 'cat') {
      if (this.catQueue.length > 0) {
        const { animal } = this.catQueue.shift();
        return animal;
      }
    }
    return null;
  }
}
