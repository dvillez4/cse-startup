var rbColor = "grey";
var eyeColor = "white";
var isOpen = true;
var colorZ = "black";

function setup() {
  //canvas size 600x600
  createCanvas(600,600);
}

function draw() {
  
  makeSky();
  makeCloud();
  
  stroke('black');
  makeHead();
  makeEars();
  makeHair();
  makeEyes();
  makeMouth();
  makeArms();
  makeTorso();
  makeFeet();
  makeLegs();
  makeButtons();
  
  
}

function mousePressed(){
 if(isOpen == true){
 eyeColor = color(232,152,229);
 Sleep(eyeColor);
 isOpen= false;
 }
 
 else {
   eyeColor='white';
   colorZ2= 'white';
   Sleep(colorZ2);
   isOpen= true;
 }

 
  
}

function keyPressed(){
   //if key is presed, robot turns a different color
   if (keyCode===ENTER){
     rbColor = color(random(256),random(256),random(256));
   }
}

function makeHead(){
  fill(rbColor);
  rect(100,120,120,60);
  
}

function makeEars(){
  fill(rbColor);
  rect(80,140,20,20);
  rect(220,140,20,20);
}

function makeHair(){
  fill(176,255,246); //light blue
  triangle(100,120,120,100,140,120);
  triangle(140,120,160,100,180,120);
  triangle(180,120,200,100,220,120);
}

function makeEyes(){
  fill(232,152,229); //light pink
  ellipse(120,140,10,10);
  ellipse(200,140,10,10);
  fill(eyeColor);
  ellipse(120,140,5,5);
  ellipse(200,140,5,5);
}

function makeMouth(){
  line(140,160,180,160);
 
}

function makeArms(){
  fill(rbColor);//light grey
  rect(40,260,80,20);
  rect(200,260,80,20);
}

function makeTorso(){
   fill(rbColor);//light grey
  triangle(80,350,160,180,240,350);

}

function makeFeet(){
  fill('red');
  rect(80,390,40,20);
  rect(200,390,40,20);  

}

function makeLegs(){
  fill(rbColor);
  rect(100,350,20,60);
  rect(200,350,20,60);
  
}

function makeButtons(){
  fill('red');
  ellipse(160,250,10,10);
  ellipse(160,300,10,10);
}

function Sleep(colorZ){
  fill(colorZ);
  text("Z",310,50,30,40);
  text("Z", 235,90,40,50);
  text("Z", 245,80,40,50);
}

function makeSky(){
  background(color(228,216,245));
}
 

function makeCloud(){
  fill('white');
  noStroke();
  ellipse(300,50,100,50);
  ellipse(400,30,200,150);
  ellipse(300,200,100,50);
  ellipse(400,240,200,150);
}
