

let numArray = [];
let divisibleByThree = [];
let divisibleByFive = [];
let i;
//function to check if numbers divide by 3
function sayThree( dividByThree ){
  
  if(dividByThree % 3 == 0)
 {  
   divisibleByThree.push(dividByThree)
   console.log(divisibleByThree); 
 }
 else
 {
     console.log("nothing divisible by three");
 }
  
}
//function to check if numbers divide by 5
function sayFive( dividByFive ){
    if(dividByFive % 5 == 0)
   {
     divisibleByFive.push(dividByFive)
     console.log(divisibleByFive); 
   }
   else
   {
       console.log("nothing divisible by Five");
   }
    
  }

  //callback function 
function threeFive(startIndex, stopIndex, threeCallback, fiveCallBack){
for( i = startIndex; i<= stopIndex; i++){
    numArray.push(i);    
}
threeCallback();
fiveCallBack();
return numArray;
}

//to call callback function
console.log(threeFive(10, 15, sayThree,sayFive));