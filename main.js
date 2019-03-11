// Write a sketch that includes your own custom class. Your sketch should utilize an array of class instances
// to build a moving system of objects that each have their own collision logic.

// Your class must be written from scratch. *Unlike other projects, 
// you're not allowed to copy or modify code you find on the web for this!*. 

// The objects can draw whatever you want them to draw (an image, a shape, a video, anything)- 
// and the content and behavior are entirely up to you, but they must include the following things:

// 1) A descriptive class name (it should have a name that indicates what it draws or does).

// 2) A  .move() method that includes collision logic. (Meaning something should happen when your objects 
// reach the edge of the screen.. for an extra challenge, you could make something special happen when they collide with each other.

// Beyond that, they could do or be anything.. they could include some flocking behavior if you're 
// interested in that, or they could simply randomly bounce around. They could be abstract shapes, or 
// literal somethings. There can be any other stuff that you may want in your sketch in addition to an 
// array of class instances.

// Try to keep your draw() loop as minimal as possible. You'll want to loop through your array and call 
// methods from your classes in the draw loop, use properties of your instances to keep track of 
// position, speed, etc. If you find yourself writing a lot of code in your draw loop, ask yourself if it 
// can be abstracted into a function or method. (Either a global function, or a class method).

// Turn in a link to your project running on github pages OR heroku.




let hackerPic;
let hackers = []; 
let numberOfHackers = 1000;
let whichHacker = 0;
let r;
let factor = 0;
// let mathArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  hackerPic = loadImage('assets/hacker.png'); // Load the image
  for (let i = 0; i < numberOfHackers; i++){
  	hackers[i] = new Hacker();
  }

}

function draw() {
	// background(0);

	for (let i = 0; i < numberOfHackers; i++){
		{
  		// hackers[i].display();
  		hackers[i].mathCircle(500, 500);
  		hackers[i].move();

  	}
	}
}

// function keyPressed(){

// 	hackers[whichHacker].visible = true;
// 	whichHacker++;
// }

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}


class Hacker {
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.smallness = random(200)+50;
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
		// this.visible = false;
	}	

	// display(){
	// 	image(hackerPic, this.x, this.y, this.smallness, this.smallness);
	// }
	move(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
	mathCircle() {
	// this.x = 0;
	// this.y = 0;
  	const total = 500; //int(map(mouseX, 0, width, 0, 200));
  	factor += 0.015;

	  // translate(x, y);
	  stroke(0);
	  strokeWeight(5);
	  // noStroke();
	  noFill();
	  ellipse(0, 0, r * 2);

	  strokeWeight(2);
	  for (let i = 0; i < total; i++) {
	    const a = getVector(i, total);
	    const b = getVector(i * factor, total);
	    line(a.x, a.y, b.x, b.y);
	  }

}
}