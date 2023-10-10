'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue() {
    if (this.root === null) {
      throw new Error('Tree is empty');
    }

    const nodes = [this.root];
    let maxValue = Number.MIN_VALUE;

    while (nodes.length > 0) {
      const currentNode = nodes.shift();

      if (currentNode.value > maxValue) {
        maxValue = currentNode.value;
      }

      if (currentNode.left) {
        nodes.push(currentNode.left);
      }

      if (currentNode.right) {
        nodes.push(currentNode.right);
      }
    }

    return maxValue;
  }
}
