'use strict';

class PseudoQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  enqueue(value) { // constant time
    this.pushStack.push(value);
  }

  dequeue() {
    if(!this.popStack.length) { // falsy
      while(this.pushStack.legnth) {
        this.pushStack.push(this.popStack.pop());
      }
    }
    return this.popStack.pop();
  }

}

module.exports = PseudoQueue;
