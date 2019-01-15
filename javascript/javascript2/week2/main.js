
let numArray = [];
let i;
let threeFive = function (startIndex, stopIndex, threeCallback, fiveCallback){
   
    //iterate by using for loop
    for( i = startIndex; i <= stopIndex; i++ ){
        if(threeCallback && fiveCallback){
            sayThree();
            sayFive();
        }
        numArray.push(i);    
       
    }
    return numArray;
};

//to calculate the divisible by three
function sayThree(){
 return (numArray[i] % 3 === 0);
}

//to calculate divisible by five
function sayFive(){
    return (numArray[i] % 5 ===0)
}
//example
console.log(threeFive(10,15,sayThree,sayFive));
