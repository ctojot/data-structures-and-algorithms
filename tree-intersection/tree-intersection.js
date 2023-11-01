'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  _hash(key) {
    return key.toString().length % this.size;
  }

  put(key, value) {
    const index = this._hash(key);
    if (!this.map[index]) {
      this.map[index] = [];
    }
    this.map[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.map[index]) {
      for (const [k, v] of this.map[index]) {
        if (k === key) {
          return v;
        }
      }
    }
    return undefined;
  }
}

function tree_intersection(tree1, tree2) {
  const hashtable = new HashTable(1024); // Choose an appropriate size for your hashmap
  const result = new Array();

  function traverseTreeAndStoreValues(node) {
    if (node) {
      hashtable.put(node.value, true);
      traverseTreeAndStoreValues(node.left);
      traverseTreeAndStoreValues(node.right);
    }
  }

  traverseTreeAndStoreValues(tree1);

  function checkIntersection(node) {
    if (node) {
      if (hashtable.get(node.value) !== undefined) {
        result.add(node.value);
      }
      checkIntersection(node.left);
      checkIntersection(node.right);
    }
  }

  checkIntersection(tree2);
  return result;
}

module.export = {
  tree_intersection
};
