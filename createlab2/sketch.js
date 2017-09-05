var bgColor= 255;

function setup() {
 //canvas size: 600x600
  createCanvas (600,600);
  
}




function keyPressed(){
  if (keyCode===ENTER){
    bgColor=color(random(256),random(256),random(256) );
      }
  }
  





function draw() {
  
  background(bgColor);
  
  //make hills
  hill(-100,600,400,500);
  hill(100,600,700,600);
  hill (0,600,600,400);
  
  translate(mouseX-180,mouseY-250);
  
  
 
   //head
  fill('#E8E1D8');//light grey
  rect(100,120,120,60);
  
  //ears
  fill('#E8E1D8');//light grey
  rect(80,140,20,20);
  rect(220,140,20,20);
  
  //hair
  fill(176,255,246); //light blue
  triangle(100,120,120,100,140,120);
  triangle(140,120,160,100,180,120);
  triangle(180,120,200,100,220,120);
  
  //eyes
  fill(232,152,229); //light pink
  ellipse(120,140,10,10);
  ellipse(200,140,10,10);
  fill('white');
  ellipse(120,140,5,5);
  ellipse(200,140,5,5);
  
  //mouth
  line(140,160,180,160);
 
 //arms
  fill('#E8E1D8');//light grey
  rect(40,260,80,20);
  rect(200,260,80,20);
  
  //torso
  fill('#E8E1D8');//light grey
  triangle(80,350,160,180,240,350);

 //feet/shoes
  fill('red');
  rect(80,390,40,20);
  rect(200,390,40,20);  

  //legs
 fill('#E8E1D8');//light grey
  rect(100,350,20,60);
  rect(200,350,20,60);
  
  //buttons on torso
  fill('red');
  ellipse(160,250,10,10);
  ellipse(160,300,10,10);
 
//changes made to original drawing: 1) multiplied scale x2
}

function hill (x,y,w,h){
  fill (color(0,255,0));
  arc(x+(w/2),y,w,h,PI,0,PIE);
  
}