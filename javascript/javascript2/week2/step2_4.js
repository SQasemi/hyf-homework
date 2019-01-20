

let showLocationBtn = document.getElementById("show-location");
let area = document.getElementById("area");
showLocationBtn.addEventListener("click", () => {
 //window.location.assign(" https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API");
    if( navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
        
           let latitudes  = position.coords.latitude;
           let longitudes = position.coords.longitude;
           area.innerHTML = '<p>Latitude is ' + latitudes + '° <br>Longitude is ' + longitudes + '°</p>';
           showMap();
        });
         }

        });
    
     

function showMap(){
    let map = new google.maps.Map(document.getElementById("map"),{
        center :{lat: latitudes, lng: longitudes},
        zoom: 8
    });
}
    
   





