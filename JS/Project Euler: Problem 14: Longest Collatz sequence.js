/*
Project Euler: Problem 14: Longest Collatz sequencePassed
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above one million.

longestCollatzSequence(14) should return a number.
longestCollatzSequence(14) should return 9.
longestCollatzSequence(5847) should return 3711.
longestCollatzSequence(46500) should return 35655.
longestCollatzSequence(54512) should return 52527.
longestCollatzSequence(100000) should return 77031.
*/


function longestCollatzSequence(limit) {
    let longest = 0;
    let myNum;
    for(let i = limit; i > 0; i--){
    let counter = 0;
      let j = i;
      while(j != 1){
        if(j % 2 == 0){
          j = j / 2;
        }
        else{
          j = 3*j + 1;
        }
        counter++;
      }
      if(counter > longest){
        longest = counter;
        myNum = i;
      }
    }
    return myNum;
  }
  
console.log(longestCollatzSequence(14));
  