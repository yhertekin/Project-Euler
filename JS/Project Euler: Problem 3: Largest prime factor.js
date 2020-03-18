
function largestPrimeFactor(number) {
    // Good luck!

    while(number % 2 == 0){
        maxPrime = 2
        number = number / 2
    }

    for(let i = 3; i <= Math.sqrt(number); i+=2){
        while(number % i == 0){
            maxPrime = i;
            number = number / i
        }
    }

    if(number > 2){
        maxPrime = number
    }


    return maxPrime
  }
  
console.log(largestPrimeFactor(5));
  