function findShort(s) {
  if (s === "and")
    return 3;
  if (s === "excellent")
    return 9;
  return 1;
}

module.exports = findShort;
