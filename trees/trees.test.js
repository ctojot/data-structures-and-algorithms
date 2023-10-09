'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    function insert(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insert(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insert(node.right, newNode);
        }
      }
    }

    insert(this.root, newNode);
  }

  contains(value) {
    function search(node, value) {
      if (!node) return false;
      if (node.value === value) return true;

      if (value < node.value) {
        return search(node.left, value);
      } else {
        return search(node.right, value);
      }
    }

    return search(this.root, value);
  }
}
