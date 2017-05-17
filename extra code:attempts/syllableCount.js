function groupBySyllableCount(wordList) {
  var wordsBySyllableCount = {};
  for (var i = 0, len = wordList.length; i < len; i++) {
    var slblCount = new_count(wordList[i]);
    if (wordsBySyllableCount[slblCount] === undefined) {
      wordsBySyllableCount[slblCount] = [wordList[i]];
    } else {
      wordsBySyllableCount[slblCount].push(wordList[i]);
    }
  }
  return wordsBySyllableCount;
}

var nouns = ['air', 'old', 'winter', 'cold', 'people', 'mountain', 'tree', 'howl'];
var nounsBySyllableCount = groupBySyllableCount(nouns);
console.log(nounsBySyllableCount);

function new_count(word) {
  word = word.toLowerCase();
  if(word.length <= 3) { return 1; }
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  return word.match(/[aeiouy]{1,2}/g).length;
}
