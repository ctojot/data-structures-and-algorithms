'use strict';

describe('findMaximumValue', () => {

  test('should find the maximum value in a binary tree with positive values', () => {

    const tree = new BinaryTree();

    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);

    expect(tree.findMaximumValue()).toBe(11);
  });

  test('should handle a tree with a single node', () => {

    const tree = new BinaryTree();
    tree.root = new Node(42);

    expect(tree.findMaximumValue()).toBe(42);
  });

  test('should throw an error for an empty tree', () => {

    const tree = new BinaryTree();

    expect(() => {
      tree.findMaximumValue();
    }).toThrow('Tree is empty');
  });
});
