/*
Project Euler: Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function prime(num){
    if(num < 2) {return false;}
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
      if(num % i == 0){
        return false
      }
    }
    return true;
  } 
  
  function nthPrime(n) {
    let counter = 0
    let num = 1
    while(true){
      num++;
      if(prime(num)){
        counter++;
      }
      if(counter == n){
        console.log(num)
        return num;
      }
    }
  }
  
  nthPrime(10001);
  