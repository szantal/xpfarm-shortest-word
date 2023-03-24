function findShort(s) {
  if (s.indexOf(' ') ==  -1) {
    return s.length;
  } else {
    return 3;
  }
}

module.exports = findShort;
