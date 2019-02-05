// //alert("done");
// function setTimeWithPromis(millisecondsToResolve){
//   return new Promise((resovle) => {
//     setTimeout(() => {
//         setTimeout(() => {
//            console.log("after 6 seconds ")
//           },6000);
//       resovle();
//     },3000);
    
//   });
   
// }

// setTimeWithPromis()

// .then(() =>{
//     console.log("I am called asynchronously");
// })



function promiseWithSeconds (millisecondsToResolve){
 return new Promise((millisecondsToResolve) => {
  setTimeout(() => {
    
  },3000)
  setTimeout(() =>{
    millisecondsToResolve();
  },6000)
  
 });
}

promiseWithSeconds(3000)
.then((returnAfterThreeSeconds) => {
 return returnAfterThreeSeconds;
 
})
.then(() => {
 console.log("I am called asynchronously");
})