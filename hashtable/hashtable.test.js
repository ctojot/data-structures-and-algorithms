'use strict';

const { beforeEach, afterEach } = require("node:test");



describe('Testing HashTable Class', () => {

  let ht;

  beforeEach(() => {
    ht = new HashTable();
  })

  afterEach(() => {
    ht = null;
  })

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {

    ht.set('name', 'Christian');
    ht.set('age', 28);
    ht.set('city', 'New Jersey');

    expect(ht.get("name")).toBe('Christian');
    expect(ht.get("age")).toBe(28);
    expect(ht.get("city")).toBe('New Jersey')
  })

  test('Retrieving based on a key returns the value stored', () => {

    ht.set('name', 'Christian');
    ht.set('age', 28);
    ht.set('city', 'New Jersey');

    expect(ht.get('name')).toBe('Christian');
  })
  test('Successfully returns null for a key that does not exist in the hashtable', () => {

    expect(ht.get("country")).toBeUndefined()
  })
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {

    ht.set("name", "Christian");
    ht.set("age", 28);
    ht.set("city", "New Jersey");

    expect(ht.keys()).toEqual(expect.arrayContaining(["name", "age", "city"]));
  })
  test('Successfully handle a collision within the hashtable', () => {

    ht.set("dog", "Buddy");
    ht.set("god", "Lucky");

    expect(ht.has("dog")).toBe(true);
    expect(ht.has("god")).toBe(true);
    expect(ht.get("dog")).toEqual(["dog", "Buddy"]);
    expect(ht.get("god")).toEqual(["god", "Lucky"]);
  })
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

    ht.set("dog", "Buddy");
    ht.set("god", "Lucky");

    expect(ht.get("dog")).toEqual(["dog", "Buddy"]);
    expect(ht.get("god")).toEqual(["god", "Lucky"]);
  })
  test('Successfully hash a key to an in-range value', () => {

    const index = ht.hash("name");
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(ht.table.length);
  })
})
