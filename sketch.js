
var r = 0;
var g = 50;
var b=255;



function setup(){

  createCanvas(1200,400);
}


function draw(){

r = map(mouseX,0,400,0,255) ;

g = map(mouseX,200,600,0,255) ;

b = map(mouseX,400,800,0,255) ;

background(r,g,b) ;

ellipse(mouseX,300,25,25) ;



}