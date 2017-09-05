var ball_img;
var ball_x;
var ball_y;
var paddle_y;
var paddle_yb;
var paddle_x1;
var paddle_x2;
var missed;
var points;
var ballMove;
var ballMove2;


function setup() {
  //canvas size 1000x700
  createCanvas(1000,700);
  paddle_y = 350;
  points = 0;
  ball_x=500;
  ball_y=350;
  missed = false;
  ballMove = -8;
  ballMove2 = -6
  
}

function draw() {
 back();
 ball();
 paddles();
 displayPoints();
 checkForMiss();
 movePaddles();
 moveBall();
 hitWalls();
// checkForHit();
 checkForHit1();
 checkForHit2();
 endGame();
 
}

function back(){ //makes background
  background('black');
  fill('white');
  rect(490,10,10,40);
  rect(490,80,10,40);
  rect(490,150,10,40);
  rect(490,220,10,40);
  rect(490,300,10,40);
  rect(490,370,10,40);
  rect(490,440,10,40);
  rect(490,510,10,40);
  rect(490,580,10,40);
  rect(490,650,10,40);
}

function ball(){
  fill('white');
  ellipse(ball_x,ball_y,30,30);
}

function moveBall(){
  ball_x -=ballMove;
  ball_y -=ballMove2+1;
}

function paddles(){
  fill ('#BDEDF5');
  rect (0,paddle_y,20,90);
  rect (980,paddle_y,20,90);
}

function movePaddles(){
  if(keyIsDown(UP_ARROW) && paddle_y > 0)
      paddle_y -= 10;
  if(keyIsDown(DOWN_ARROW) && paddle_y < height-90)
      paddle_y += 10;
}

function checkForMiss(){
  if (ball_x <0 || ball_x >1000){
    missed = true;
}
  
}

/*function checkForHit(){
  
  if (ball_y >= paddle_y && ball_y<= paddle_yb)
  {
    if (ball_x ==20){
      if (ball_x>0){
        points +=1;
        ballMove=-10;
      }
      
    }
    
    if (ball_x == 980){
      if (ball_x<1000){
    points +=1;
    ballMove = 10;
    }
  
  }}
}*/

function checkForHit1(){
  if (ball_x ==20 && ball_x>0 &&(ball_y >= paddle_y && ball_y<= paddle_y+90))
  {
    
    points +=1;
    ballMove=-10;
   
  }
}

function checkForHit2(){
  if (ball_x ==980 && ball_x<1000 && (ball_y >= paddle_y&& ball_y <= paddle_y+90))
  {
   
    points +=1;
    ballMove = 10;

   
  }
}

function hitWalls(){
  if (ball_y <= 0|| ball_y>=700)
  {
    ballMove2=-ballMove2;
  }
}

function displayPoints(){
  fill(160);
  textSize(150);
  text(points,10,650);
  
}

function endGame()
{
  if (missed === true)
  {
    fill('red');
    textSize(100);
    text('GAME OVER',30, 220); 
  }
}
