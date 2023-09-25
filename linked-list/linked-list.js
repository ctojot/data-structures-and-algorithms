'use strict';

// Storage container
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Things that are attached to Nodes
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    if (!this.head) {
      return 'NULL';
    }

    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }

}

// start at the head and move until now more nodes.
// Big 0 -> time: O(n), Space: O(1)
function traversal(list) {

  let current = list.head; // this must of Type Node OR Null.

  while (current) {
    console.log('CURRENT NODE VALUE:', current.value);
    current = current.next;
  }
}

traversal(survivalRope);

module.exports = LinkedList;

