'use strict';

describe('Graph Tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Vertex can be successfully added to the graph', () => {

    graph.addVertex('A');

    expect(graph.getVertices()).toContain('A');
  });

  test('An edge can be successfully added to the graph', () => {

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.getNeighbors('A')).toContain('B');
    expect(graph.getNeighbors('B')).toContain('A');
  });

  test('A collection of all vertices can be properly retrieved from the graph', () => {

    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.getVertices()).toEqual(expect.arrayContaining(['A', 'B']));
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.getNeighbors('A')).toContain('B');
  });

  test('Neighbors are returned with the weight between vertices included', () => {

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 3);

    const neighbors = graph.getNeighbors('A');

    expect(neighbors).toContainEqual({ vertex: 'B', weight: 3 });
  });

  test('The proper size is returned, representing the number of vertices in the graph', () => {

    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.size()).toBe(2);
  });

  test('A graph with only one vertex and edge can be properly returned', () => {

    graph.addVertex('A');
    graph.addEdge('A', 'A');

    const vertices = graph.getVertices();
    const neighbors = graph.getNeighbors('A');

    expect(vertices).toEqual(['A']);
    expect(neighbors).toContainEqual({ vertex: 'A', weight: null });
  });
});
