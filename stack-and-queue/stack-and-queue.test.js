'use strict';

const supertest = require('supertest');

describe('Stack Tests', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('should successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('should successfully pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  it('should successfully empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should raise exception when calling pop on an empty stack', () => {
    expect(() => {
      stack.pop();
    }).toThrow('Stack is empty');
  });
});

describe('Queue Tests', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  it('should successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('should raise exception when calling dequeue on an empty queue', () => {
    expect(() => {
      queue.dequeue();
    }).toThrow('Queue is empty');
  });

  it('should raise exception when calling peek on an empty queue', () => {
    expect(() => {
      queue.peek();
    }).toThrow('Queue is empty');
  });
});
