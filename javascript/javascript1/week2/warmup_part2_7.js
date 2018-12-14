

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
