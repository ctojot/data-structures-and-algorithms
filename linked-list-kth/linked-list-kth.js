'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  kthFromEnd(k) {
    if (k < 0 || k >= this.size || this.head === null) {
      // Invalid input or empty list
      return null;
    }

    let fastPtr = this.head;
    let slowPtr = this.head;

    // Move the fast pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      fastPtr = fastPtr.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fastPtr.next !== null) {
      fastPtr = fastPtr.next;
      slowPtr = slowPtr.next;
    }

    // At this point, the slow pointer is at the kth node from the end
    return slowPtr.value;
  }
}

