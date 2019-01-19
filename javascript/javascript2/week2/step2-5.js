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

doSomething(showSomthing);

//