//step 2 - 5
//array of functions
let arrayOfFunctions = [
    function() {console.log(1)},
    function() {console.log(2)},
    function() {console.log(3)}
];
//to call them
arrayOfFunctions.forEach(function (callback){
    callback();
}); 


// var array_of_functions = [
//     first_function,
//     second_function,
//     third_function,
//     forth_function
// ]
// array_of_functions[0]('something');


//creating function with const type
const showSomthing = () => {
    console.log("I am asimple message inside function with const declaration");
}

//creating normal function 
function doSomething () {
 showSomthing();
}
//to call them 
doSomething();

//creating object to have function as value of its key
functionObj = {
    numfunc : () => {
        console.log("a simple function inside object ")
    }
}
//to call a function that is inside obj
functionObj.numfunc();


//two setTimeOut to uses one function
const setTimeOutFunc = () => {
    setTimeout (function () {
        console.log("Be passion!")
    },1000);

    setTimeout (function(){
        console.log("Think positive! ");
    },2000);


}
setTimeOutFunc();



//outer funtions and inner functions
let outerFunction = (name) => {

    let innerFunction = () =>{
     return name;
    }
    return innerFunction;
}

let firstName = outerFunction("Sheila");
console.log(firstName);


