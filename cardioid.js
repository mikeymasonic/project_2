// let total = 10;


// function setup() {
// 	createCanvas(640, 640);
// }


// function PVector createVector(let index){
// 	let angle = map(index, 0, total, 0, TWO_PI);


// }

// function draw() {
// 	background(0);
// 	// float delta = TWO_PI / total;
// 	let r = width / 2;
// 	let factor = 2;
// 	translate(width/2, height/2);

// 	stroke(255);
// 	noFill();
// 	ellipse(0,0,r*2);
	
// 	for (var i = 0; i < total; i++) {

// 		let angle = map(i, 0, total, 0, TWO_PI);
// 		let x = r * cos(angle);
// 		let y = r * sin(angle);
// 		fill(255);
// 		ellipse(x, y, 16);
// 	}

// for (int i = 0; i < total; i++) {
// 	int a = i;
// 	int b = i * factor;
// }

// }

let r;
let factor = 0;
let mathArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 2 - 16;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(255);
  // mathArray[1];
  mathCircle(width/2, height/2);
  // mathCircle(-300, 400);
  // mathCircle(500+random(10), -250+random(10));
  // mathCircle(-250+random(10), -250+random(10));
  // mathCircle(500+random(10), 250+random(10));
  // mathCircle(100*-factor, 250*-factor);
}



function mathCircle(x, y) {
	this.x = 0;
	this.y = 0;
	this.col = color(255);

	this.changeColor = function() {
	this.col = color(random(255), random(255));
	}

  const total = 200; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;

  translate(x, y);
  stroke(this.col);
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