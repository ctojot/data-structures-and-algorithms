# Challenge Title

Code Challenge 17: Tree Breadth First
Challenge Type: Code Challenge / Algorithm

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Started with an if statement to check if the tree is truthy. If tree is falsy it returns an empty array with no values to process
- const result = [] is created to have a place to store the values as we go through the tree
- const queue = [tree] is made to initialize a queue at the root node
- We then use a while loop to go through the tree as long as queue.length > 0
- We then say const currentNode = queue.shift() on the node we are at
- From there we're pushing the value of the current node into the result array
- Then we have if statements to go through the tree and as we're go through it, we push the values into the queue and start the process all over again.

### Time Complexity

Time complexity of the code is O(n) where n is the number of nodes in the tree. This is because the function visits each node on the tree exactly once and the while loop traverses through tree proportional to the amount of nodes there are.

### Space Complexity

Space complexity is also O(n) because it uses a queue to keep the track of the nodes to be processed.

- Worst Case: If the tree is perfectly balanced, the queue will hold all the leaf nodes at the same time

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Psuedo Code](./tree-breadth-first.js)
[Test Case](./tree-breadth-first.test.js)

## Reference

- ChatGPT
