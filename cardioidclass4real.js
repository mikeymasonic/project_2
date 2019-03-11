let r;
let circlething = [];
let numberOfCircles = 14;
// let circlething2;
// let circlething3;
let factor = 0;
let total = 100;
let hit = false;

let xLoc = 200;
let yLoc = 200;
let speed = 200;

let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // r = height / 2 - 16;
  for (let i = 0; i < numberOfCircles; i++){
  circlething[i] = new Circlething();
  }

  // circlething2 = new Circlething();
  // circlething3 = new Circlething();


}

function getVector(index, total) {
      const angle = map(index % total, 0, total, 0, TWO_PI);
      const v = p5.Vector.fromAngle(angle + PI);
      v.mult(r);
      return v;
}



function draw() {
  background(15);
    ellipse(200,200,150,150);
  

 push();
  translate(width/4-215, height/4);
  circlething[2].show();
  pop();

  push();

  translate(width / 4, height / 4);
  circlething[1].show();
  pop();

 

  push();
  translate(width/4+215, height/4);
  circlething[3].show();
  pop();
 
  push();
  translate(width/4+430, height/4);
  circlething[4].show();
  pop();

  push();
  translate(width/4+645, height/4);
  circlething[5].show();
  pop();

  push();
  translate(width/4+860, height/4);
  circlething[6].show();
  pop();

   push();
  translate(width/4-215, height/4 +300);
  circlething[7].show();
  pop();

  push();

  translate(width / 4, height / 4 +300);
  circlething[8].show();
  pop();

 

  push();
  translate(width/4+215, height/4 +300);
  circlething[9].show();
  pop();
 
  push();
  translate(width/4+430, height/4+300);
  circlething[10].show();
  pop();

  push();
  translate(width/4+645, height/4+300);
  circlething[11].show();
  pop();

  push();
  translate(width/4+860, height/4+300);
  circlething[12].show();
  pop();


  // circlething[3].show();
  // circlething[4].show();

  // circlething[5].show();

  // circlething4.show();
  // circlething5.show();
  }




class Circlething {
  constructor() {

    r = 100;
    this.size = r*2;
    this.x = 100;
    this.y = 500;
    this.dim = 80.0;
 

 }

  show() {
    point(mouseX,mouseY);

    hit = collidePointEllipse(mouseX,mouseY,xLoc, yLoc, this.size, this.size)

    print("colliding? " + hit);
    // translate(mouseX*PI/2, mouseY*PI/2);
    

    factor += 0.015;

    // if (xLoc > width == x < 0 
    //   speed = speed * -1;
    
    // translate(200, 200);

    


    // stroke(255, 150);
    // stroke(91, 218, 216);
    stroke(random(255), random(255), random(255));
    strokeWeight(random(10));
    noFill();

    if (second() % 2 === 0) {
    jitter = random(-0.1, 0.1);
  }
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering
  let c = cos(angle);
  //move the shape to the center of the canvas

  //apply the final rotation
  rotate(c);
  push();
  stroke(255, 255, 255);
  strokeWeight(1);
  rect(100, -200, 100, 100);
  rect(100, 100, 100, 100);
  rect(0, 0, 50, 100);
  rect(-100, -100, 100, 100);
  rect(-200, -200, 100, 100);
  rect(-300, -300, 100, 100);
  pop();
  ellipse(0, 0, r * 2);


    strokeWeight(random(3));
    for (let i = 0; i < total; i++) {
      const a = getVector(i, total);
      const b = getVector(i * factor, total);
      line(a.x, a.y, b.x, b.y);

    }

}
}