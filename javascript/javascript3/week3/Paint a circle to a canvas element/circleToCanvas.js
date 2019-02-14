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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r,this.startAngle, this.endAngle);
        ctx.stroke();
        //to give color for circle inside canvas
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
        

    //}
    }
    
    }

}

 let c1 = new Circle(100, 100, 20, 0, 2 * Math.PI, 'red');
console.log(c1)
c1.draw();
let c3 = new Circle(45, 45, 15, 0, 2 * Math.PI, 'blue');
c3.draw();
let c2 = new Circle(50, 50, 20, 0, 4 * Math.PI, 'green');
console.log(c2)
c2.draw();

//random
function randomCircle(){
    setTimeout(()=>{

    let x = Math.random() * 200;
    let y = Math.random() * 100;
    let r = Math.random() * 20;
    //random color
   
    function randColor2() {
        let r = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
            g = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
            b = ('0'+(Math.random()*256|0).toString(16)).slice(-2);
        return '#' +r+g+b;
    }
   
   
        c1 = new Circle(x, y, r, 0, 2 * Math.PI, randColor2());
        c1.draw(); 
    
    },1000)
}
    //to loop function
    for(let c=0 ; c<= 1000 ; c++){
        randomCircle(c);
    }

