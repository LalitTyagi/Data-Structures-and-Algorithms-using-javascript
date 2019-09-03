//index: index of number in fibonacci sequence
//cache: an array used as memory

//Memoization
//Check to see if number alredy exist in cache
//if number is in cache,use that number//if number is not in cache, calculate it and put it in cache so it can be used multiple time in future

//time complexity O(n)


function fibonacciMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibonacciMemo(index - 1, cache) + fibonacciMemo(index - 2, cache);
    }
  }
  return cache[index];
}
 
console.log(fibonacciMemo(20));