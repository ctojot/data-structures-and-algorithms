# Challenge Title

Code Challenge 16: Tree Max

Challenge Type: Extending an Implementation

## Whiteboard Process
<!-- Embedded whiteboard image -->
[]()

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### findMaximumValue

- Started the code with an if statement where if the root was null, we wanted to throw an error that the tree is empty
- const nodes initializes an array called nodes to perform breadth-first traversal
- let maxValue is initialized to the store the largest value as we traverse through the tree
- Used a while loop that continues as long as nodes.length > 0 meaning as long as there are nodes
- With const currentNode, we shift() whatever node we are on to examine it
- Then with the following statments we traverse through the tree:
  - if currentNode.value > maxValue, maxValue becomes currentNode.value
  - if there is a left node, we push into the node array to examine
  - if there is a right node, vice versa
- While loop contines until all the nodes have been looked at

### Time Complexity

Time complexity is O(n) where n is the number of nodes in the binary tree. We visit each node once, and the number of nodes visited is proportional to the amount of nodes there are

### Space Complexity

Space complexity is O(m) where m is the maximum number of nodes at any level in the binary tree.

- Worst Case: where the tree is completely unbalanced, the maximum number of nodes at any level would be n (the total number of nodes)
- Best Case: where the tree is perfectly balanced, the maximum number of nodes at any level would be approximately N/2

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Pseudo Code](./tree-max.js)
[Test Code](./tree-max.test.js)

## Reference

- ChatGPT
