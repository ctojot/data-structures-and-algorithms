# Challenge Title

Code Challenge 04

## Whiteboard Process
<!-- Embedded whiteboard image -->
[Insert](https://ctojot.github.io/data-structures-and-algorithms/linked-list/insert.png)
[Includes](https://ctojot.github.io/data-structures-and-algorithms/linked-list/includes.png)
[toString](https://ctojot.github.io/data-structures-and-algorithms/linked-list/toString.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- When inserting a new node, we always insert it at the beginning of the linked list. This approach ensures that the insertion operation has a constant time complexity of O(1). It is efficient because we only need to update the head pointer to the new node, regardless of the size of the linked list.
- When searching for a value in the linked list, we traverse the list from the head node to the end, one node at a time, until we find the target value or reach the end of the list. This approach has a time complexity of O(n), where n is the number of nodes in the linked list. In the worst case, we may need to examine every node in the list.
- When constructing the string representation of the linked list, we iterate through all the nodes in the list once, concatenating their values into a single string. This also has a time complexity of O(n), where n is the number of nodes in the linked list, as we need to visit each node once.

## Solution
<!-- Show how to run your code, and examples of it in action -->

npm test

## Reference

- ChatGPT
