let r;
let circlething = [];
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
  for (let i = 0; i <200; i++) {
    circlething[i] = new Circlething();
  }

  noCursor();
  background(127);

}

function getVector(index, total) {
      const angle = map(index % total, 0, total, 0, TWO_PI);
      const v = p5.Vector.fromAngle(angle + PI);
      v.mult(r);
      return v;
}

function mouseDragged(){

  background(100);
}

function draw() {
  angle += 0.02; 
  for (let i = 0; i <200; i++) {
  circlething[i].move();  
  circlething[i].show();
  }

}




class Circlething {
  constructor() {

    r = 300;
    this.size = r*2;
    this.x = 0;
    this.y = 0;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
 }

  show() {
    point(mouseX,mouseY);

    hit = collidePointEllipse(mouseX,mouseY,xLoc, yLoc, this.size, this.size)

    print("colliding? " + hit);
    factor += 0.015;
    stroke(127+127*sin(angle), 127+127*sin(angle));
    strokeWeight(random(5));
    noFill();
    ellipse(0, 0, r * 2);
    strokeWeight(random(3));
    for (let i = 0; i < total; i++) {
      const a = getVector(i, total);
      const b = getVector(i * factor, total);
      line(a.x, a.y, b.x, b.y);
    }

}

move(){
    translate(this.x, this.y)/4;

    if (this.x > width || this.x < 0) {
    this.xSpeed = this.xSpeed * -1;
  }

    if (this.y > height || this.y < 0) {
    this.ySpeed = this.ySpeed * -1;
  }
  
 this.x = this.x + this.xSpeed; 
 this.y = this.y + this.ySpeed;

  }
}



    
  
