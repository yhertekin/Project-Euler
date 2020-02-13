function fiboEvenSum(num) {  
    let first = 1;
    let second = 2;
    let temp ;
    let evenCount = 0;
    while(first <= num){
      temp = second;
      second += first;
      first = temp;
      if (first % 2 == 0){
        evenCount+=first
      }
  
    }
    return evenCount
  
  }
  
console.log(fiboEvenSum(60));

  