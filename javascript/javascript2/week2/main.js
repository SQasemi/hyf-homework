

let numArray = [];
let divisibleByThree = [];
let divisibleByFive = [];
let i;
//function to check if numbers divide by 3
function sayThree( dividByThree ){
 {  
   divisibleByThree.push(dividByThree)
   console.log(divisibleByThree); 
 }
  
}
//function to check if numbers divide by 5
function sayFive( dividByFive ){ 
   {
     divisibleByFive.push(dividByFive)
     console.log(divisibleByFive); 
   }  
  }

  //callback function 
function threeFive(startIndex, stopIndex, threeCallback, fiveCallBack){
for( i = startIndex; i<= stopIndex; i++){
   const currentNumber = numArray.push(i);  
   //to check divide by 3
   if(currentNumber %3 === 0 ){
   console.log(threeCallback) ;
    
   }
  //to check divid by 5
   else 
   if(currentNumber %5 === 0){
       console.log(fiveCallBack);
   }
//    else
//    {
//        console.log("not divisible by three or five")
//    }
}
console.log(numArray);
}

//to call callback function
threeFive(10, 15, sayThree,sayFive);




// let numArray = [];
// let divisibleByThree = [];
// let divisibleByFive = [];
// let i;
// //function to check if numbers divide by 3
// function sayThree( currentNumber){
// {
//    if(currentNumber %3 === 0 ){

//        console.log(currentNumber);
//        divisibleByThree.push(currentNumber);
//       }


// // console.log(divisibleByThree.length);

// }

// }
// //function to check if numbers divide by 5
// function sayFive(currentNumber){
//  {
//    if(currentNumber %5 === 0){

//        console.log(currentNumber);
//        divisibleByFive.push(currentNumber)
//     //   console.log(divisibleByFive.length);
//      }

//    }

//  }

// function threeFive(startIndex, stopIndex, threeCallback, fiveCallBack){
// for( i = startIndex; i<= stopIndex; i++){
//  const currentNumber = numArray.push(i);
//  threeCallback(currentNumber);
//  fiveCallBack(currentNumber);

// console.log(numArray);
// console.log(divisibleByFive);
// console.log(divisibleByThree);
// }};


// threeFive(10, 15, sayThree,sayFive);
