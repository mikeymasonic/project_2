var p1;
var xspeed = 3;
var yspeed = 3;
 
function setup() {
    createCanvas(400, 400);
    p1 = new player1();
    b = new ball();
}
 
function draw() {
    background(51);
    p1.show();
    p1.move();
    b.show();
    b.move();
    b.edges();
    console.log(b.currentX, b.currentY);
    if (b.hit(p1)) {
        console.log("hit");
        // xspeed = xspeed * -1;
        // yspeed = yspeed * -1;
    }
}
 
function keyPressed() {
    if (keyCode === 87) {
        p1.setDir(-1);
    } else if (keyCode === 83) {
        p1.setDir(1);
    }
}
 
function keyReleased() {
    p1.setDir(0);
}
 
function player1() {
    this.x = 20;
    this.y = height / 2;
    this.w = 12;
    this.h = 64;
 
    this.ydir = 0;
 
    this.show = function () {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }
 
    this.setDir = function (dir) {
        this.ydir = dir;
    }
 
    this.move = function (dir) {
        this.y += this.ydir * 5;
    }
}
 
function ball() {
    this.x = 100; //Start location of ball
    this.y = 25;
    this.r = 5;
    this.currentX = p1.w / 2 + this.r; //Less than this x number = colliding
    this.currentY = p1.h / 2 + this.r; //Less than this y number = colliding
    this.distX = p1.w / 2 + this.x; //Current x dist of mid of ball and rect
    this.distY = p1.h / 2 + this.y; //Current y dist of mid of ball and rect
 
    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }
 
    this.move = function () {
        this.x = this.x + xspeed;
        this.y = this.y + yspeed;
    }
 
    this.edges = function () {
        if (this.y > height || this.y < 0) {
            yspeed = yspeed * -1;
        }
        if (this.x > height || this.x < 0) {
            xspeed = xspeed * -1;
        }
    }
    // this.hit = function () {
    //  var dx = dist(this.x.pos, p1.x.pos);
    //  var dy = dist(this.y.pos, p1.y.pos);
    //  if (dx < this.r + p1.x / 2 || dy < this.r + p1.y / 2) {
    //      return true;
    //  } else {
    //      return false;
    //  }
    // }
    this.hit = function (other) {
        if (this.distX > this.currentX || this.distY > this.currentY) {
            //distX, distY is current distance of middle of circle and rect
            //If dist x is more then rect.w/2 + r = true
            //If dist y is more then rect.h/2 + r = true
            return true;
        } else {
            return false;
        }
    }
}
