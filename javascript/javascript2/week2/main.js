function threeFive(startIndex, stopIndex){
    //declare an array
    numArray = [];
    //iterate by using for loop
    for(let i = startIndex ;i <= stopIndex; i++ ){
        numArray.push(i);
    }
    return numArray;
};
console.log(threeFive(10,15));