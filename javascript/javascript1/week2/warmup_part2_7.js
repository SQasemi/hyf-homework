

//1: function with an array with 3 empty objects
let col1 = "red";
let col2 = "green";
let col3 = "blue";
function color( color1, color2, color3 )// 5: adding parameters color1 , color2 and color3
{
    arrObjColor = [
     {
     //3: adding keys into obj
      color : color1
     },
     {
     color : color2
     },
     {
     color : color3
     }
    ];
    
    return arrObjColor;
}
// 2: call to function and store in a variable
var colorObjects = color(col1, col2 , col3);
// 4: log out the colorObjects
console.log(colorObjects);

//7: to show in a loop
for(var i=0; i<arrObjColor.lenght; i++){
    console.log(arrObjColor[i]);
}


//8: how to determin exact name of day from number of days

function findDay(n ){
    let date = new Date();
    let day = new Array(7);
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednsday"
    day[4] = "Thursday";
    day[5] = "friday";
    day[6] = "saturday";
 let numbersOfDay = day[date.getDay()];
 let exactDay = n % 7 ;
console.log(exactDay);
console.log("today is sunday");
console.log("How many days to meet " +n);
console.log("the meeting day is " +day[exactDay]);

}

//To call function
findDay(9);















