/*
Project Euler: Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
    let largest = 0;
    for(let i = (10**n)-1; i >= 10**(n-1); i--){
      for(let j = (10**n)-1; j >= 10**(n-1); j--){
        let num = i*j;
        if(num == num.toString().split("").reverse().join("")){
          if(num > largest){
            largest = num;
          }        
        }
      }
    }
    return largest
  }
  
  largestPalindromeProduct(3);
  