/*
Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function fact(n){

    let mul = 1;
    while(n > 1){
        mul *= n;
        n--;
    }
    return mul;
}
  
function smallestMult(n) {
    
    let max = fact(n);
    let counter = 0;
    for(let i = n; i <= max; i+=n){
        for(let j = 1; j <= n; j++){
            if(i % j == 0){
                counter++;
            }
            if(counter == n){
                return i;
            }          
        }
      counter = 0;
    }
}
  
smallestMult(5);
