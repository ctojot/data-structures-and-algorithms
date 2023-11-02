'use strict';

describe('Testting Hashmap Left Join Function', () => {

  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(10);
  });

  test('Should return an array with key follwed by the value from hashmap 1 and then hashmap 2. Should also return null if there is no value.', () => {

    const hm1 = new Map();
    const hm2 = new Map();

    hm1.set('diligent','employed');
    hm1.set('fond','enamored');
    hm1.set('guide','usher');
    hm1.set('outfit','garb');
    hm1.set('wrath','anger');

    hm2.set('diligent','idle');
    hm2.set('fond','averse');
    hm2.set('guide','follow');
    hm2.set('flow','jam');
    hm2.set('wrath','delight');

    const result = leftJoin(hm1, hm2);

    expect(result.get('diligent')).toEqual(['employed','idle'])
    expect(result.get('fond')).toEqual(['enamored','averse'])
    expect(result.get('guide')).toEqual(['usher','follow'])
    expect(result.get('outfit')).toEqual(['garb', null])
    expect(result.get('wrath')).toEqual(['anger','delight'])
  })
})
