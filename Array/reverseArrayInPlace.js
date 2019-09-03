//Reverse Array in Place
//We will be manipulating and reversing the array that is passed
//Do not push elements into a new array and return that array
//Do not use array.reverse() method

unction reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
 
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);