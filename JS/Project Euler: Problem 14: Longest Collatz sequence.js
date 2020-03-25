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
  