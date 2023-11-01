'use strict';

const { tree_intersection } =  require('./tree-intersection');

describe('Testing Tree-Intersection function', () => {

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  test('Function should return an array of duplicate values within both the tress', () => {

    const tree1 = new Node(150);
    tree1.left = new Node(100);
    tree1.right = new Node(250);
    tree1.left.left = new Node(75);
    tree1.left.right = new Node(160);
    tree1.left.right.left = new Node(125);
    tree1.left.right.right = new Node(175);
    tree1.right.left = new Node(200);
    tree1.right.right = new Node(350);
    tree1.right.right.left = new Node(300);
    tree1.right.right.right = new Node(500);

    const tree2 = new Node(42);
    tree2.left = new Node(100);
    tree2.right = new Node(600);
    tree2.left.left = new Node(15);
    tree2.left.right = new Node(160);
    tree2.left.right.left = new Node(125);
    tree2.left.right.right = new Node(175);
    tree2.right.left = new Node(200);
    tree2.right.right = new Node(350);
    tree2.right.right.left = new Node(4);
    tree2.right.right.right = new Node(500);

    const intersection = tree_intersection(tree1, tree2);

    expect(intersection).toBe();
  });
});
