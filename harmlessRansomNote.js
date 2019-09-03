/*
Harmless Ransom Note:You have been given two strings. You have to find out whether you can make up the first string with the words present in the second string.
 */
function harmlessRansomNote (noteText, magazineText) {

  //split both string parameters into arrays
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');

  //create an object to use as a hash table it also avoids exponential time complexity of nested loops
  var magazineObj = {};
  
  //forEach to check if word is an word is an object on our property
  magazineArr.forEach(word => {
    //if not we add it to our object 
    //increment the value
    if(!magazineObj[word]) magazineObj[word] = 0;
    //we just increment the value
    magazineObj[word]++;
  })
  
  // console.log(magazineObj)
  //Boolean variable to be return from function
  var noteIsPossible = true;
  
  //use forEach to iterate through each word
  noteArr.forEach(word => {
    //if word is found on the object decrement it
    if(magazineObj[word]) {
      magazineObj[word]--;
      //if word value < 0 we can't make our word so note is NOT possible.
      if(magazineObj[word] < 0)
        noteIsPossible = false;
        return noteIsPossible;
        //if word is not found then the note is NOT possible.
    } else {
      noteIsPossible = false;
      return noteIsPossible;
    }
  })
  
  return noteIsPossible;
}

console.log(harmlessRansomNote('this in is', 'this is the magazine text in the magazine'));
console.log(harmlessRansomNote('this is my1 note', 'this is is my note'));
console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

//Time Complexity:  Since these loops are NOT nested we have a linear time complexity of O(n)
