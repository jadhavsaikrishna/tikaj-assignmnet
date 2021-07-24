function squareRoot(number){
    if (number == 0 || number == 1)
      return number;
  
  
    /*doing binary search */ 
    let start = 0, end = number;
    while (start <= end)
    {
      let sumStartEnd=start+end;
      let mid = sumStartEnd%2==0 ? sumStartEnd/2 : (sumStartEnd-1)/2 ; 
      /*if start+end is even then devide by 2 else subtract 1 
      and then divide it so to avoid decimal situations like 2.5, 1.25 etc*/
      if (mid*mid == number)
        return mid;   /*if mid is square root return it*/
  
      if (mid*mid > number)  
      {
        end = mid-1;
        /*if mid squares is greater than number that root is lesser than mid */
      }
      else 
        start = mid + 1;
        /*if mid squares is less than number that root is greater that mid */
        
    }
    return start;
  }
  
  console.log(squareRoot(1));
  console.log(squareRoot(4));
  console.log(squareRoot(16));
  console.log(squareRoot(9));
  console.log(squareRoot(25));
  console.log(squareRoot(121));
  console.log(squareRoot(144));
  console.log(squareRoot(169));
  console.log(squareRoot(196));