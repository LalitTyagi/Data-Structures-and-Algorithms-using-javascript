/*
Write a program that prints the numbers from 1 to the given number and for multiples of '3' print "Fizz" instead of the number 
and for the multiples of '5' print "Buzz" 
and for the multiples of '3'and '5' print "Fizz-Buzz" 
*/

function fizzBuzz(value){
  for(var i=1;i<=value;i++){
    if((i%3 === 0) && (i%5 === 0)){
      console.log("Fizz-Buzz")
    }else if(i%3 === 0){
      console.log("Fizz")
    }else if(i%5 === 0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }
}

fizzBuzz(20);