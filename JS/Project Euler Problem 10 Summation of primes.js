/*
Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

function prime(num){
    for(let i=3; i<=Math.sqrt(num); i+=2){
        if(num % i == 0){
            return false
        }
    }
    return true;
} 
function primeSummation(n) {
    let sum = 2;
    for(let i = 3; i < n; i+=2){
        if(prime(i)) sum+=i;
    }
    return sum;
}

primeSummation(2000000);
