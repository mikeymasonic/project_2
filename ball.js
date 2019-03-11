
var x = 0;
var y = 0;
var xSpeed = 3; 
var ySpeed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 100, 100);
  
  if (x > width || x < 0) {
    xSpeed = xSpeed * -1;
  }

    if (y > height || y < 0) {
    ySpeed = ySpeed * -1;
  }
  
 x = x + xSpeed; 
 y = y + ySpeed;
}