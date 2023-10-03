# Challenge Title

Code Challenge 11: Stacks and Queues

Challenge Type: Code Challenge / Algorithm

## Whiteboard Process
<!-- Embedded whiteboard image -->
[Stack Queue Pseudo](./stackqueuepseudo.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- I wanted to make sure that i was implementing the queue instances while still maintaing FIFO approaches so having a stack to push new methods and stack that pops methods made the most snese

- Enqueue's space and time complexity is O(1) because the operation involves simply pushing an element onto pushStack, which is an O(1) operation both in terms of time and space

- Dequeue's time complexity is O(1) because each element is only transferred once during the entire process. The space complexity is O(n) because in the worst case, all the contents in pushStack may need to be stored in the popStack

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Psuedo Code](./stack-queue-pseudo.js)

## Reference

- [LEETCODE 232 (JAVASCRIPT) by Andy Gala](https://www.youtube.com/watch?v=d0h0E8CuibU)
- ChatGPT
