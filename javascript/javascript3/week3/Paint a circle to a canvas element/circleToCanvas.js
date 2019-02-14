 //to draw a circle inside canvas
//  function draw(){
//     let canvas = document.getElementById('add_canvas');
//     if(canvas.getContext){
//         let ctx = canvas.getContext('2d');
       
//         let x = canvas.width /2 ;
//         let y = canvas.height /2;
//         let r = 45;
//         ctx.beginPath();
//         ctx.arc(x, y, r, 0, 2* Math.PI, false);
//         ctx.lineWidth = 3;
//         ctx.strokeStyle = 'green';
//         ctx.stroke();
//         //to give color for circle inside canvas
//         ctx.fillStyle = "red";
//         ctx.fill();
//     }
// }







//to create a class
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor ){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;

     

    }
    draw(canvas){
         
          canvas = document.querySelector('.add_canvas');
         if(canvas.getContext){
        let ctx = canvas.getContext('2d');
       // for(let i=0; i<1000; i++){
       // ctx.strokeStyle = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);
        ctx.beginPath();
       //ctx.arc(Math.floor(Math.random()*(100)+1),Math.floor(Math.random()*(80)+1),Math.floor(Math.random()*(20)+1),0,2*Math.PI );
        ctx.arc(this.x, this.y, this.r,0, this.fillColor);
        ctx.stroke();
        //to give color for circle inside canvas
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
        

    //}
    }
    
    }

}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, 'red');
console.log(c1)
c1.draw();
 const c3 = new Circle(45, 45, 15, 0, 2 * Math.PI, 'blue');
c3.draw();
const c2 = new Circle(50, 50, 20, 0, 4 * Math.PI, 'green');
console.log(c2)
c2.draw();





