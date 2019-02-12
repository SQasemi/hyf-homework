
//thumb up and down with use of promise
let listItems = document.querySelectorAll('li');
let indexCounnterOfLi = 0;
//when the accept button is clicked
let acceptBtn = document.querySelector('.accept');
acceptBtn.addEventListener('click', () =>{
    animateLiOut(indexCounnterOfLi, 'right')
    .then (() =>{
       animateNextLi(indexCounnterOfLi); 
    })
    indexCounnterOfLi++;
});

//when the reject button is clicked
let rejectBtn = document.querySelector('.reject');
rejectBtn.addEventListener('click', () =>{
    animateLiOut(indexCounnterOfLi, 'left')
    .then (() =>{
       animateNextLi(indexCounnterOfLi); 
    })
    indexCounnterOfLi++;
});
//function to define the direction 
function animateLiOut(index, changeDirection){
    if(changeDirection === 'left'){
        listItems[index].style.transform = 'translateX(-1000px)';
    }
    else{
        listItems[index].style.transform = 'translateX(1000px)'; 
    }
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        },700);
    });
}

function animateNextLi (index) {
    listItems[index].style.transform = 'scale(1)';
        listItems[index].style.opacity = 1;
}


//Personalise the application
//array of objects
let famousFootballPlayers = [
    {
       name: 'Cristiano Ronaldo',
       age: 34,
       country:'Portuguese',
       photo:'famousFootballPlayers/ch.jpg'
    },
    {
        name: 'Lionel Messi',
        age: 31,
        country:'Argentina',
        photo:'famousFootballPlayers/messi.JPG'
     },
     {
        name: 'Emiliano Sala',
        age: 28,
        country:'Argentina',
        photo:'famousFootballPlayers/a.jpg'
     },
     {
        name: 'Sergio Agüero',
        age: 28,
        country:'Argentina',
        photo:'./famousFootballPlayers/sa.jpg'
        
     },
     {
        name: 'Karim Benzema ',
        age: 30,
        country:'Argentina',
        photo:'./famousFootballPlayers/bnz.jpg'
        
     }
     
] 

//to create a list of Items
 for(let items = 0; items <= famousFootballPlayers.length; items++){
 // console.log(listItems);
  listItems[items].innerHTML = "";
  let addtitle = document.createElement('h6');
  listItems[items].appendChild(addtitle);
  addtitle.innerHTML = famousFootballPlayers[items].name;

  let addAge = document.createElement('h5');
  listItems[items].appendChild(addAge);
  addAge.innerHTML = famousFootballPlayers[items].age;

  let addPhoto = document.createElement('img');
  listItems[items].appendChild(addPhoto);
  addPhoto.src = famousFootballPlayers[items].photo;
  
}