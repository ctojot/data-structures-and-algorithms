'use strict';

const tree = {
  value: 2,
  left: {
    value: 7,
    left: { value: 2 },
    right: {
      value: 6,
      left: { value: 5 },
      right: { value: 11 }
    },
  },
  right: {
    value: 5,
    right: {
      value: 9,
      left: { value: 4 }
    },
  },
};

describe('breadthFirst', () => {
  it('should return an array of values in breadth-first order', () => {
    const result = breadthFirst(tree);
    expect(result).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  it('should handle an empty tree', () => {
    const result = breadthFirst(null);
    expect(result).toEqual([]);
  });
});
