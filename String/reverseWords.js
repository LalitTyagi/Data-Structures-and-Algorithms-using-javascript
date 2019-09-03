//Reverse Words
/*
i/p : My name is Lalit Tyagi
o/p : yM eman si tilaL igayT
*/

function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  
  return reversedWordsArr.join(' ');
}
 
console.log(reverseWords('My name is Lalit Tyagi'));