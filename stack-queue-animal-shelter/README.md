# Challenge Title

Code Challenge 12: Stack Queue Animal Shelter

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### Animal Class

Animal Class creates animal objects with species and name properties.

### Animal Shelter

 In the constructor I created dogQueue and catQueue to each species in its own place. Order is to maintain the order in which each animal is added to their respective queue.

### Enqueue

Enqueue takes a parameter animal. It uses if and elseif statements because of the 2 different species. Once the animal is added to their queue, the count for that queue will go up an 1.

## Dequeue

Dequeue takes in a parameter pref. For the if and elseif statements, it looks to see if pref is either cat or dog. Then from there it checks to see if the each of the queue.lengths are greater than 0. If they are, it will shift() and take out the oldest entry. After that, it returns that animal.


## Solution
<!-- Show how to run your code, and examples of it in action -->
[Pseudo Code](./stack-queue-animal-shelter.js)

## Reference

- ChatGPT
