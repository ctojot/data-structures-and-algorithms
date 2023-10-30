'use strict';

const tableSize = 127

class HashTable {
  constructor() {
    this.size = 0;
    this.table = new Array(tableSize);
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

  get(key) {
    const target = this.hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const uniqueKeys = new Set();
    for (const bucket of this.table) {
      if (bucket) {
        for (const [key] of bucket) {
          uniqueKeys.add(key);
        }
      }
    }
    return Array.from(uniqueKeys);
  }

  has(key) {
    const index = this.hash(key);
    return !!this.table[index];
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}


