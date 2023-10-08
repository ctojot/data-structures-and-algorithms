const PseudoQueue = require('./PseudoQueue');


describe('PseudoQueue', () => {

  it('should enqueue values and dequeue them in the correct order', () => {

    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('should handle interleaved enqueue and dequeue operations', () => {

    const queue = new PseudoQueue();

    queue.enqueue(1);

    expect(queue.dequeue()).toBe(1);

    queue.enqueue(2);

    expect(queue.dequeue()).toBe(2);

    queue.enqueue(3);

    expect(queue.dequeue()).toBe(3);
  });

  it('should handle multiple dequeues with intermediate enqueues', () => {

    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);

    queue.enqueue(3);

    expect(queue.dequeue()).toBe(2);

    queue.enqueue(4);

    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
  });

  it('should handle dequeuing from an empty queue', () => {

    const queue = new PseudoQueue();

    expect(queue.dequeue()).toBeUndefined();
  });
});
