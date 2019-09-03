//Two Sum
//Return every pair of numbers from 'Array' that add up to the 'sum'
//Results should be an array of arrays


function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
 
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    console.log("i",i);
    console.log("hashTable.indexOf(counterpart)",hashTable.indexOf(counterpart));
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  console.log("hashTable",hashTable)
  return pairs;
}
 
console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
