//1: function to return an empty object 
function emptyObject(){
let obj = {
//3:add a key into object
 time: 12
};
return obj;
}
//2:call function
var timeObject = emptyObject();

//4: log out the timeObject
console.log(timeObject);









//1: function with an array with 3 empty objects
function color( color1, color2, color3 )// 5: adding parameters color1 , color2 and color3
{
    let arrObjColor = [
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
var colorObjects = color("yellow", "green" , "green");
// 4: log out the colorObjects
console.log(colorObjects);

