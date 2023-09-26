# Challenge Title

Code Challenge 06: Extending an Implementation

## Whiteboard Process
<!-- Embedded whiteboard image -->
[Append](https://ctojot.github.io/data-structures-and-algorithms/linked-list-insertions/append.png)
[Insert Before](https://ctojot.github.io/data-structures-and-algorithms/linked-list-insertions/insertBefore.png)
[Insert After](https://ctojot.github.io/data-structures-and-algorithms/linked-list-insertions/insertAfter.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### append(newValue):

- Approach: This method appends a new node with the given value to the end of the linked list. It iterates through the list until it reaches the last node and attaches the new node to it.
- Time Complexity: O(n) in the worst case, where n is the number of nodes in the linked list. This is because we must traverse the entire list to find the last node.
- Space Complexity: O(1) since we only create a single new node, regardless of the size of the linked list.

### insertBefore(value, newValue):

- Approach: This method inserts a new node with the given new value immediately before the first node that has the specified value. It iterates through the list and searches for the specified value, then inserts the new node before it if found.
- Time Complexity: O(n) in the worst case because it may need to traverse the entire list to find the node with the specified value.
Space Complexity: O(1) since we only create a single new node, and the space used remains constant.

### insertAfter(value, newValue):

- Approach: This method inserts a new node with the given new value immediately after the first node that has the specified value. It iterates through the list and searches for the specified value, then inserts the new node after it if found.
- Time Complexity: O(n) in the worst case because it may need to traverse the entire list to find the node with the specified value.
- Space Complexity: O(1) since we only create a single new node, and the space used remains constant.

## Solution
<!-- Show how to run your code, and examples of it in action -->
npm test

## Reference

- ChatGPT
