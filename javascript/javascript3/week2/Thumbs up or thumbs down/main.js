//when the buttons clicked
let rejectBtn = document.querySelector('.reject');
rejectBtn.addEventListener('click', () =>{
    let firstLi = document.querySelector('li');
    firstLi.style.transform ="translateX(-1000px)";
    // let nextLi = document.getElementById('l2');
    // nextLi.style.opacity = "1";
    // nextLi.style.transform = "scale(1)"; 
  
});

// let acceptBtn = document.querySelector('.accept');
// acceptBtn.addEventListener('click', () =>{
// //  let firstLi = document.getElementsByTagName('ul')[0];
// let firstLi = document.getElementById('l1');
//  firstLi.style.transform ="translateX(1000px)";

//  let nextLi = document.getElementById('l2');
//   nextLi.style.opacity = "1";
//   nextLi.style.transform = "scale(1)"; 

// });



let acceptBtn = document.querySelector('.accept');
acceptBtn.addEventListener('click', () =>{
//  let firstLi = document.getElementsByTagName('ul')[0];
 let firstLi = document.getElementById('l1');
 firstLi.style.transform ="translateX(1000px)";

 let nextLi = document.getElementById('l2');
   nextLi.style.opacity = "1";
  nextLi.style.transform = "scale(1)"; 

});
