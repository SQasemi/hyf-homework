
//step 2 - 3 
//to add event on button
let btn = document.getElementById("btn-click");
btn.addEventListener("click", function ( ) {
 console.log("you clicked me");

 //to get value from input
let input_number = document.getElementById("input-number").value;
if(input_number % 3 === 0 )
{
    document.body.style.backgroundColor = "blue";
}
else
if(input_number % 5 === 0){
    document.body.style.backgroundColor = "yellow";
}

});



