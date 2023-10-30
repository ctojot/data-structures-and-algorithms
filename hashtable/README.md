# Challenge Title

Code Challenge 30: Hash Table Implementation

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### Set

Set take in the two arguements, key and value. It takes the key parameter and retrieves an index and assigns a value to that index within the table. If a collision occurs in the table, we replace the value at index[1] and stop further execution.

Time Complexity: O(1) with no collisions, and O(n) with collisions

Space Complexity: O(1)

### Get

Get accepts the key value and finds where in the table to look for specific information. It uses the hash to turn the key into a number. If a collision occurs, it returns the value at index[1].

Time Complexity: O(1)

Space Complexity: O(1)

### Has

Has takes in the key parameter and finds where in the table to look for specific information. It uses the hash to turn the key into a number.

Time Complexity: O(1)

Space Complexity: O(1)

### Keys

Keys finds all the keys within the table a returns a list of them. It uses a for loop to iterate through the table and every time it finds a uniqe key it gets added to an array until all keys within the table are found.

Time Complexity: O(n)

Space Complexity: O(n)

### Hash

Hash takes in the key parameter. We initiate a variable called hash and set it to 0. Using a for loop, we then look at each character of the key and turn it into a number with key.charCodeAt(i). It then gets added to hash variable. Once we iterated through the whole key, it returns the index which will a number between 0 and 127.

Time Complexity: O(n)

Space Complexity: O(1)

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Pseudo Code](./hashtable.js)
[Testing](./hashtable.test.js)

## Reference

- ChatGPT
