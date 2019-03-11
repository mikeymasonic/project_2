// var b1;
// var b2;
var bubbles = [];


function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 5; i++) {
		bubbles[i] = new Bubble(random(width), random(height));
	}
}

function draw() {
	background(0);
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].update();
		bubbles[i].display();
		for (var j = 0; j < bubbles.length; j++){

			if (i != j && bubbles[i].intersects(bubbles[j])) {
				bubbles[i].changeColor();
				bubbles[j].changeColor();
	}

		}
	}

}


	// var d = dist(b1.x, b1.y, b2.x, b2.y);

	// if (d < b1.r + b2.r) {
	// 	b1.changeColor();
	// 	b2.changeColor();
	// }
	//No longer needed

function Bubble(x, y) {
	this.x = x;
	this.y = y;
	this.r = 48;
	this.col = color(random(255), random(255), random(255));

	this.intersects = function(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r) {
			return true;
		} else {
			return false;
		}
		
	}
	this.display = function() {
		stroke(255);
		fill(this.col);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

this.update = function() {
	this.x = this.x + random(-1, 1);
	this.y = this.y + random(-1, 1);
}
}