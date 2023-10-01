# Challenge Title

Code Challenge 11: Stacks and Queues

## Whiteboard Process
<!-- Embedded whiteboard image -->
[Stack push()](./stackPush.png)
[Stack pop()](./stackPop.png)
[Stack peek()](./stackPeek.png)
[Queue enqueue](./enqueue.png)
[Queue dequeue](./dequeue.png)
[Queue peek()](./queuePeek.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### Push:

Adding a new element to the top of the stack (push method) has a time complexity of O(1) because it involves creating a new node and updating the next reference of the new node to point to the previous top node. The space complexity is O(1) because it doesn't depend on the size of the stack.

### Pop:

Removing the top element of the stack has a time complexity of O(1) because it involves updating the top reference to the next node. The space complexity is O(1).

### Stack Peek:

Peeking at the top element of the stack has a time complexity of O(1) because it directly accesses the top node. The space complexity is O(1).

### Stack isEmpty:

Checking if the stack is empty involves a simple comparison of the top reference to null, which has a time complexity of O(1). The space complexity is O(1).

### Enqueue:

Adding an element to the back of the queue has a time complexity of O(1) because it involves creating a new node and updating the next reference of the last node in the queue. The space complexity is O(1) because it doesn't depend on the size of the queue.

### Dequeue:

Removing the front element of the queue also has a time complexity of O(1) for the same reason as enqueue. The space complexity is O(1).

### Queue Peek:

Peeking at the front element of the queue has a time complexity of O(1) because it directly accesses the front node. The space complexity is O(1).

### Queue isEmpty:

Checking if the queue is empty involves a simple comparison of the front reference to null, which has a time complexity of O(1). The space complexity is O(1).


## Solution
<!-- Show how to run your code, and examples of it in action -->
[Stack and Queue Code](./stack-and-queue.js)
[Test](./stack-and-queue.test.js)

## Reference

- ChatGPT
