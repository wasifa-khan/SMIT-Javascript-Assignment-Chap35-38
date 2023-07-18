function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  const inputString = 'the quick brown fox';
  const outputString = capitalizeWords(inputString);
  document.write(outputString);
  