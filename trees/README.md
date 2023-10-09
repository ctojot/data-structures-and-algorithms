# Challenge Title

Code Challenge 15: Trees
Challenge Type: New Implementation

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### Class Node

Class Nodes is basically the nodes the binary tree. I instatiated this.left and this.right to represent the child nodes.

### Class BinaryTree

The class BinaryTree just represts the basic binary tree. A binary always has a root so I instatiated that in the constructor.

### preorder, inOrder, postOrder

These are the three different methods used to traverse through the binary tree which goes as follows:

 -preOrder: node, left, right
 -inOrder: left, node, right
 -postOrder: left, right, node

### class BinarySearchTree extends BinaryTree

Class BinarySeachTree inherits the class BinaryTree meaning that it is a special type of binary tree. We call super in the constructor to invoke the constructor of BinaryTree, initializing the root.

### add(value)

add(value) allows adding a node with a given value to the binary tree, creating new Node. If the tree is empty, that new node becomes the root.

### contains(value)

This method uses a recursive search function to traverse the tree, comparing the value at each node. If the value is found it return true, if not returns false.

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Psuedo Code](./stack-queue-pseudo.js)

## Reference

- [LEETCODE 232 (JAVASCRIPT) by Andy Gala](https://www.youtube.com/watch?v=d0h0E8CuibU)
- ChatGPT
