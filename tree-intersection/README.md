# Challenge Title

Code Challenge 32: Tree Intersection

```text
- Write a function called tree_intersection that takes two binary trees as parameters.
- Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.
```

## Whiteboard Process
<!-- Embedded whiteboard image -->
[]()

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### tree_intersection()

The function takes in two parameters, tree1 and tree2. It starts by creating a new hashtable with a size of 1024 and initalizing an empty array called result to store the data.

Time Complexity: O(n) n being the the number of nodes in tree1.

Space Complexity: O(h) h being the height on the tree.

### traverseTreeAndStoreValues()

Nested within the tree_intersecton(). This function takes in a node as a parameter and traverses through tree1. As it traverses the tree it stores the values from each node until its iterated through the tree once.

Time Complexity: O(m) m being the number of nodes within tree2.

Space Complexity: O(h) h being the height on the tree.

### checkIntersection()

checkIntersection() takes a node as a parameter. This one will iterate through the tree2 and compare its values with the values stored from tree1. If it finds similar values between the 2 tree, said value will be pushed into the results array

Time Complexity: O(n+m)

Space Complexity: O(h)

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Tree Intersection](./tree-intersection.js)
[Test](./tree-intersection.test.js)

## Reference

- ChatGPT
