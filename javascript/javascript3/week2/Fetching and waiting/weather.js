//use data from weather API
fetch('https://api.openweathermap.org/data/2.5/weather?q=denmark&appid=5aa91ff3e6e5909b14b21886896d552d')
.then(Response => Response.json())
.then((weather) => {
    setTimeout(() =>{
      console.log(weather)
    },3000)
})
