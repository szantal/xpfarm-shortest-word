const findShort = require('./findShort');

describe('US 1 - Want to find the shortest word of one word string ', () => {
  it('"a" should return 1', () => {
    expect(findShort()).toBe(1);
  });
});
