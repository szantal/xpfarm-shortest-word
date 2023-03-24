const findShort = require('./findShort');

describe('US 1 - Want to find the shortest word of one word string ', () => {
  it('"a" should return 1', () => {
    expect(findShort("a")).toBe(1);
  });
  it('"and" should return 3', () => {
    expect(findShort("and")).toBe(3);
  });
  it('"excellent" should return 9', () => {
    expect(findShort("excellent")).toBe(9);
  });
});
