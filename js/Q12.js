function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  const inputString = 'Web Development Tutorial';
  const longestWord = findLongestWord(inputString);
  document.write(longestWord);
  