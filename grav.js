// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

  // Ball constuctor



// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from 
// Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

// Two ball objects
var ball1;
var ball2;

// Global gravity variable
var gravity = 0.1;

function setup() {
  createCanvas(480, 270);

  // Create ball objects
  ball1 = new Ball(150, 0, 16);
  ball2 = new Ball(350, 50, 32);
}

function draw() {
  background(51);

  // Display ball objects
  ball1.display();
  ball2.display();

  // Move ball objects
  ball1.update();
  ball2.update();

}




  
function Ball(tempX, tempY, tempW) {
  this.x = tempX;  // x location of square 
  this.y = tempY;  // y location of square 
  this.w = tempW;  // speed of square 
  this.speed = 0;  // size

  this.display = function() {
    // Display the square 
    fill(175); 
    stroke(0); 
    ellipse(this.x,this.y,this.w,this.w);
  };

  this.update = function() {
    // Add speed to location
    this.y = this.y + this.speed; 

    // Add gravity to speed
    this.speed = this.speed + gravity; 

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height) { 
      this.speed = this.speed * -0.95;  
    } 
  };
}