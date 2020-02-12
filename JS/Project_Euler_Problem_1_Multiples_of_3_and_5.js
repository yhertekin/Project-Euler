/*
Project Euler: Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

*/



function cal(number, d){
    let sum = 0;
    for(let i = 0; i < number; i+= d){
      sum += i;
    }
    return sum;
}
  
function multiplesOf3and5(number) {
    return cal(number, 3) + cal(number, 5) - cal(number, 15);
}

multiplesOf3and5(1000);
