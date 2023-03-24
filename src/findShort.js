function findShort(s) {
  if (s.indexOf(' ') ==  -1) {
    return s.length;
  } 
  else {
    return Math.min(s.split(' ')[0].length, s.split(' ')[1].length);
  }
}

module.exports = findShort;
