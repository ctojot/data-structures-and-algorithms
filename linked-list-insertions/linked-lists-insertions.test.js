'use strict';

const LinkedList = require('./linkedlist');

describe('LinkedList', () => {
  it('should add a node to the end of the linked list', () => {
    const myList = new LinkedList();
    myList.append(1);

    expect(myList.head.data).toBe(1);
    expect(myList.head.next).toBe(null);
  });

  it('should add multiple nodes to the end of a linked list', () => {
    const myList = new LinkedList();
    myList.append(1);
    myList.append(2);
    myList.append(3);

    let current = myList.head;
    expect(current.data).toBe(1);

    current = current.next;
    expect(current.data).toBe(2);

    current = current.next;
    expect(current.data).toBe(3);
  });

  it('should insert a node before a node located in the middle of a linked list', () => {
    const myList = new LinkedList();
    myList.append(1);
    myList.append(2);
    myList.append(3);

    myList.insertBefore(2, 5);

    let current = myList.head;
    expect(current.data).toBe(1);

    current = current.next;
    expect(current.data).toBe(5);

    current = current.next;
    expect(current.data).toBe(2);

    current = current.next;
    expect(current.data).toBe(3);
  });

  it('should insert a node before the first node of a linked list', () => {
    const myList = new LinkedList();
    myList.append(1);

    myList.insertBefore(1, 5);

    let current = myList.head;
    expect(current.data).toBe(5);

    current = current.next;
    expect(current.data).toBe(1);
  });

  it('should insert a node after a node in the middle of the linked list', () => {
    const myList = new LinkedList();
    myList.append(1);
    myList.append(2);
    myList.append(3);

    myList.insertAfter(2, 5);

    let current = myList.head;
    expect(current.data).toBe(1);

    current = current.next;
    expect(current.data).toBe(2);

    current = current.next;
    expect(current.data).toBe(5);

    current = current.next;
    expect(current.data).toBe(3);
  });

  it('should insert a node after the last node of the linked list', () => {
    const myList = new LinkedList();
    myList.append(1);
    myList.append(2);
    myList.append(3);

    myList.insertAfter(3, 5);

    let current = myList.head;
    expect(current.data).toBe(1);

    current = current.next;
    expect(current.data).toBe(2);

    current = current.next;
    expect(current.data).toBe(3);

    current = current.next;
    expect(current.data).toBe(5);
    expect(current.next).toBe(null);
  });
});
