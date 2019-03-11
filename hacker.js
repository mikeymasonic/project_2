let hackerPic;
let hackers = []; 
let numberOfHackers = 1000;
let whichHacker = 0;


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
		if (hackers[i].visible){
  		hackers[i].display();
  		hackers[i].move();
  	}
	}
}

function keyPressed(){

	hackers[whichHacker].visible = true;
	whichHacker++;
}


class Hacker {
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.smallness = random(200)+50;
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
		this.visible = false;
	}	

	display(){
		image(hackerPic, this.x, this.y, this.smallness, this.smallness);
	}
	move(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}
}