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
describe('US 2 - Want to find the shortest word of two words string ', () => {
  it('"one two" should return 3', () => {
    expect(findShort("one two")).toBe(3);
  });
  it('"go go" should return 2', () => {
    expect(findShort("go go")).toBe(2);
  });
  it('"nine monkeys" should return 4', () => {
    expect(findShort("nine monkeys")).toBe(4);
  });
});
describe('US 3 - Want to find the shortest word of three or more words string ', () => {
  it.skip('"Once caught I" should return 1', () => {
    expect(findShort("Once caught I")).toBe(1);
  });
  it.skip('"go go" should return 2', () => {
    expect(findShort("go go")).toBe(2);
  });
  it.skip('"nine monkeys" should return 4', () => {
    expect(findShort("nine monkeys")).toBe(4);
  });
});
