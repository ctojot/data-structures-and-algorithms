# Challenge Title

Code Challenge 33: Implement a simplified LEFT JOIN for 2 Hashmaps.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### leftJoin()

leftJoin() takes in the 2 parameters, hm1 and hm2. With in, we create a variable called result to initialize a new Map. This is where we are going to place the values. We the create a for loop that adds the values from the first hashmap. It then goes through the 2nd hashmap, looking for a matching key from hashmap 1. When it finds the key, it add the value of that key to result. When there is a key and it doesn't find a value from hashmap 2, it will return null for that keys corresponding value.

Time Complexity: O(n) n being the number of keys in hm1

Space Complexity: O(n) n being the number of keys in hm1

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Pseudo Code](./hashmap-left-join.js)
[Testing](.//hashmap-left-join.test.js)

## Reference

- ChatGPT
