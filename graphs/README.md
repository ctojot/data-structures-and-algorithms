# Challenge Title

Code Challenge 35: Graphs

Challenge Type: Implementation

## Whiteboard Process
<!-- Embedded whiteboard image -->
[]()

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### class Graph

Here, we are creating the class Graph. Inside we initialize an constructor and within it, we initalize this.adjacencyList and create an empty object where we can place the nodes.

### addVertex

addVertex takes in a vertex as a parameter. It first checks to see if the vertex exists in the grpah. If it does it will do nothing, but if it doesn't exist it will

### addEdge

addEdge takes in 2 verteices as its parameters (v1, v2). It first checks to see if the vertcies exist in the graph. If they do not, they will be added to the graph. It then takes the 2 verticies and adds them as each others neighbors creating the edge between the 2.

### getVerticies



### getNeighbors

### size


## Solution
<!-- Show how to run your code, and examples of it in action -->
[Pseudo Code](./graphs.js)
[Test Code](./graphs.test.js)

## Reference

- ChatGPT
- [JavaScript Data Structures - 43 - Graph Add Vertex and Edge](https://www.youtube.com/watch?v=Yy7T4bLhqUg&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=42)
- [JavaScript Data Structure - 44 - Graph Display and HasEdge](https://www.youtube.com/watch?v=TQ1LlaRHaow&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=43)
- [JavaScript Data Structures - 45 - Graph Remove Edge and Vertex](https://www.youtube.com/watch?v=75JAn8ejI_I&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=44)
