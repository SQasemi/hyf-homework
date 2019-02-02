
let subBtn = document.getElementById('sub-btn');
subBtn.addEventListener('click', function() {
   // alert ("done");
   let word = document.getElementById('word').value;
   //alert (word);
   if(word != ''){
    //alert (word);
       fetch("https://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=N3VTxEoQzTYE1T3YMmI07df1WgqYjzcM&limit=5")
       .then(response => response.json())
       .then((wordd) => {
       // console.log (wordd); 
       
       // console.log (wordd.data[0].url);
      // console.log(wordd.data[0].images.fixed_height_still.url);
     // console.log(wordd.data[1].images.preview_webp.url);
     let img = document.getElementById('image'); 
     img.src = wordd.data[1].images.preview_webp.url;
    
     
     console.log (document.getElementById('image').src = wordd.data[1].images.preview_webp.url);
       });
   }
   else{
      alert ("please write something to search box!!!");
   }
});