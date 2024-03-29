//Binary Search
//Search for a given value(key) inside of a list(array)
//Run in O(log n) run time - very performant

//important fact to remember about binary search that the given array must be sorted.

function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));