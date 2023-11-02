'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  get(key) {
    const target = this.hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table[target].length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }
}

function leftJoin(hm1, hm2) {
  const result = new Map();

  for (const [key, value] of hm1.entries()) {
    result.set(key, [value, hm2.get(key) || null]);
  }

  return result;
}
