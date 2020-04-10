//ex1
/*
function digitOddOrNot(num) {
let digit=num%10;
  if (digit%2!==0) {
    return false;
  } 
   if(num==0){
      return true;
   }
    return  num=digitOddOrNot((num-digit)/10);
  
}

console.log(digitOddOrNot(42448426));
*/
 //ex2
/*
function minPos(arr){

  arr.sort(function(a,b){
      return a-b;
   })
  if(arr[0]<0){
       arr.shift()
       return minPos(arr)
   
  }
  if(arr.length==0){
     return -1
  } 
 return arr[0]
}
console.log(minPos([-2,-4]))
*/

//ex3
/*
function fib(num,arr,i){
 
if(i<num){

if(i<2){
arr.push(1)

}else {
   arr.push(arr[i-1]+arr[i-2]);
}
i++;
return fib(num,arr,i)

}

   return arr;

}
console.log(fib(18,[],0))
  */


//ex4

/*
function flattenArr(newarr,newarr1,i,a){

    a=newarr.join().split(",")
       if(newarr.length){
    
         
        newarr1.push(+a[i])
               a.shift()
           newarr=a;
         return  flattenArr(newarr,newarr1,i,a)
               
        
       }
    
return newarr1
}
console.log(flattenArr([5,[2],[[55,4,78]],4,5,[3],[3]],[],0,[]))
*/

//ex5
/*
function digitCount(num,sum,sum1,sum2){
  let digit=num%10;
   let digit1=0;
  if(sum<10&&num==0){
    return sum;
    
  }
   if(num!==0){
       sum=sum+digit;
       sum2=sum;
     return digitCount((num-digit)/10,sum,sum1,sum2)
   }

 if(sum2>0){
       
        digit1=sum2%10;
        sum1=sum1+digit1;
   
          
      return digitCount(num,sum,sum1,(sum2-digit1)/10)
                    
 }
  return sum1;
}


console.log(digitCount(222222,0,0,0))

*/
