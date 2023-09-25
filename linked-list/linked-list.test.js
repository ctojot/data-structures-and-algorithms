'use strict';

const LinkedList = require('./LinkedList.js');

describe('Testing the Linked List class', () => {

  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();

    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');

    expect(linkedList.head.value).toBe('a');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');

    expect(linkedList.head.value).toBe('b');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');

    expect(linkedList.head.value).toBe('a');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');

    expect(linkedList.includes('b')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {


    expect(true).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {


    expect(true).toBe(false);
  });

});
