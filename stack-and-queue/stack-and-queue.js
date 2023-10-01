'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const temp = this.top.value;
    this.top = this.top.next;
    return temp;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.rear = newNode;
    } else {
      let current = this.rear;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const temp = this.front.value;
    this.front = this.front.next;
    return temp;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Stack,
  Queue,
};

