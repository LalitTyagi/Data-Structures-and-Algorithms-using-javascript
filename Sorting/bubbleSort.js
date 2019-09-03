//Bubble Sort
//Largest number essentially bubble up to the end of the array

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      var count = 0;
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          count++;
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      // console.log('i',i)
      if(count===0) break;
    }
    
    return array;
}
 
console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));
console.log(bubbleSort([20,20,31,56,1,12,12]));