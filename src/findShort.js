function findShort(s) {
  if (s.indexOf(' ') ==  -1) {
    return s.length;
  } 
  else {
    if (s.split(' ')[0].length >= s.split(' ')[1].length) {
      return s.split(' ')[1].length;
    }
    else {
      return s.split(' ')[0].length;
    }
  }
}

module.exports = findShort;
