'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  getVertices() {
    for(let vertex in this.adjacencyList) {
      return [...this.adjacencyList[vertex]];
    }
  }

  getNeighbors(vertex) {
    for(this.adjacencyList[vertex]) {
      return vertex + [...this.adjacencyList[vertex]];
    }
  }

  size() {
    return this.adjacencyList.legnth;
  }
}

module.exports = Graph;
