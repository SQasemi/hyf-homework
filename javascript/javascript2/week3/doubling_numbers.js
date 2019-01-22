//array
let numbers = [1, 2, 3, 4];
let newNumbers = [];

//with for loop
// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] %2 !== 0){
//         newNumbers[i] = numbers[i] * 2;
//     }
// }
// console.log("The doubled numbers are", newNumbers);

//with filter 
// let doubleOddNumbers = numbers.filter((val) => {
//  if(val % 2 !== 0 ){
//    console.log(newNumbers = val *2) ;
//  }
// return newNumbers;
// });

//with filter
function doubleOddNumbers (val){
    if(val % 2 !== 0 ){
       newNumbers.push(val *2);
    }
} 
numbers.filter(doubleOddNumbers);
console.log(newNumbers);