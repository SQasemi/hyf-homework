
// fetch(' https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=5aa91ff3e6e5909b14b21886896d552d')
// .then(response => response.json())
// .then((cities) => {
//     console.log(cities);
//     console.log(cities.weather);

   let buttonToShowWeather = document.getElementById('btn');
   let area = document.getElementById('area');
  
   buttonToShowWeather.addEventListener("click", () => {
    let city = document.getElementById('city').value;
    console.log(city);
    if(city != ''){
    //fetch(' https://api.openweathermap.org/data/2.5/weather?q=denmark&appid=5aa91ff3e6e5909b14b21886896d552d')
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric' + '&APPID=5aa91ff3e6e5909b14b21886896d552d')
      .then(response => response.json())
      .then((cities) => {
          //console.log(cities.weather[0]);
          
          area.innerHTML = ("<h3><strong>Main :</strong>" + cities.weather[0].main + "<br> <strong> Description </strong>" + cities.weather[0].description +"</h3>");
                      
         
     }
         

   

   )}});





//  let buttonToShowWeather = document.getElementById('btn');
//    buttonToShowWeather.addEventListener("click", () => {
//       let city = document.getElementById('city').value;

//       if(!city !== ''){
//          ajax({
//             url:'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric' + '&APPID=5aa91ff3e6e5909b14b21886896d552d',
//             type: "GET",
//             datatype: "jsonp",
//             success:function(data){
//                let area = show(data);
//                document.getElementById('area').innerHTML=  area; 
              
//             }

//          }) 
//       }
//    });
//    function show(data){
//       return "<h3>"+ data.weather[0].main +"</h3>";
  