function findShort(s) {
  let shortest = s.split(' ')[0].length;
  for(let word of s.split(' ')) {
    if (word.length < shortest)
      shortest = word.length;
  }
  return shortest;
}

module.exports = findShort;