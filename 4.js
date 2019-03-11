let r;
let circlething = [];
// let numberOfCircles = 14;
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

let gravX = 0;
let gravY = 0;
var gravity = 0.1;

// let angle = 0;




function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <200; i++) {
    circlething[i] = new Circlething();
  }

  noCursor();
  background(127);
  // r = height / 2 - 16;
  // for (let i = 0; i < numberOfCircles; i++){
  // circlething[i] = new Circlething();
  // }

  // cirlething[i] = new Circlething();

  // circlething2 = new Circlething();
  // circlething3 = new Circlething();


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

// function doubleClicked(){


// }



function draw() {
  // background(100);
  angle += 0.02; 
  // background(127+127*sin(angle)); 
    // ellipse(200,200,150,150);
  

 // push();
  // translate(width/2, height/2);

  // translate(random(100, 200), random(100, 300));

  for (let i = 0; i <200; i++) {
  circlething[i].move();  
  circlething[i].show();
  // circlething[i].move();

  }






  // circlething[2].show();
  // circlething[2].move();

  // circlething[3].show();
  // circlething[3].move();

  // circlething[4].show();
  // circlething[4].move();

  // circlething[5].show();
  // circlething[5].move();

  // circlething[6].show();
  // circlething[6].move();

  // circlething[7].show();
  // circlething[7].move();


  // pop();

  // push();

  // translate(width / 4, height / 4);
  // circlething[1].show();
  // pop();

 

  // push();
  // translate(width/4+215, height/4);
  // circlething[3].show();
  // pop();
 
  // push();
  // translate(width/4+430, height/4);
  // circlething[4].show();
  // pop();

  // push();
  // translate(width/4+645, height/4);
  // circlething[5].show();
  // pop();

  // push();
  // translate(width/4+860, height/4);
  // circlething[6].show();
  // pop();

  //  push();
  // translate(width/4-215, height/4 +300);
  // circlething[7].show();
  // pop();

  // push();

  // translate(width / 4, height / 4 +300);
  // circlething[8].show();
  // pop();

 

  // push();
  // translate(width/4+215, height/4 +300);
  // circlething[9].show();
  // pop();
 
  // push();
  // translate(width/4+430, height/4+300);
  // circlething[10].show();
  // pop();

  // push();
  // translate(width/4+645, height/4+300);
  // circlething[11].show();
  // pop();

  // push();
  // translate(width/4+860, height/4+300);
  // circlething[12].show();
  // pop();



  }




class Circlething {
  constructor() {

    r = 300;
    this.size = r*2;
    this.x = 0;
    this.y = 0;
    // this.dim = 80.0;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
 

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
    // stroke(random(255), random(255), random(255));
    // // stroke(127+127*sin(angle));
    stroke(127+127*sin(angle), 127+127*sin(angle));
    // if (hit=true) {stroke(random(255), random(255), random(255))} 
    //     else {
    //       stroke(127+127*sin(angle), 127+127*sin(angle));
    //     }


    // if (function doubleClicked) {
    //   stroke(random(255), random(255), random(255)); 
    // } else {
    //   stroke(127+127*sin(angle), 127+127*sin(angle));}
    
    
    strokeWeight(random(5));
    noFill();

  //   if (second() % 2 === 0) {
  //   jitter = random(-0.1, 0.1);
  // }
  // //increase the angle value using the most recent jitter value
  // angle = angle + jitter;
  // //use cosine to get a smooth CW and CCW motion when not jittering
  // let c = cos(angle);
  // //move the shape to the center of the canvas

  // //apply the final rotation
  // rotate(c);
  // push();
  // stroke(255, 255, 255);
  // strokeWeight(1);
  // rect(100, -200, 100, 100);
  // rect(100, 100, 100, 100);
  // rect(0, 0, 50, 100);
  // rect(-100, -100, 100, 100);
  // rect(-200, -200, 100, 100);
  // rect(-300, -300, 100, 100);
  // pop();
  // translate(this.x, this.y);
  ellipse(0, 0, r * 2);
  // ellipse(this.x,this.y,this.w,this.w);


    strokeWeight(random(3));
    for (let i = 0; i < total; i++) {
      const a = getVector(i, total);
      const b = getVector(i * factor, total);
      line(a.x, a.y, b.x, b.y);

    }

}
move(){

// for (let i = 0; i <10; i++) {
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


//   move(tempX, tempY, tempW) {
//   // translate(this.x, this.y,this.w,thi
//   this.x = tempX;  // x location of square 
//   this.y = tempY;  // y location of square 
//   this.w = tempW;  // speed of square 
//   this.speed = 0;  // size

// }

//   update() {
//     // Add speed to location
//     this.y = this.y + this.speed; 

//     // Add gravity to speed
//     this.speed = this.speed + gravity; 

//     // If square reaches the bottom 
//     // Reverse speed 
//     if (this.y > height) { 
//       this.speed = this.speed * -0.95;  
//     } 
//   }
}



    
  
