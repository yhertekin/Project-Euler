/*
Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/
function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    for(let c = 1; c < 1000; c++){
        for(let b = 1; b < c; b++){
            for(let a = 1; a < b; a++){
                if(a**2 + b**2 == c**2){
                    if(a+b+c==sumOfabc){
                        return a*b*c;
                    }
                }
            }
        }
    }
   }
   
   specialPythagoreanTriplet(1000);
   