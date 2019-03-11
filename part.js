let particles = [];

function setup() {
	createCanvas(600, 400);
	
}


function draw() {
	background(0);
	for (let i = 0; i < 5; i++) {
		let p = new Particle0();
		let p1 = new Particle1();
		let p2 = new Particle2();
		let p3 = new Particle3();
		particles.push(p, p1, p2, p3);
		// particles.push(p1);
		// particles.push(p2);
		// particles.push(p3);
	}
	// for (let i = 0; i < particles.length; i++) {
	for (let i = particles.length-1; i >= 0; i--) { 
	//above makes it so a frame doesn't drop from the array
		particles[i].update();
		particles[i].show();
		if (particles[i].finished()) {
			//remove this particle
			particles.splice(i, 1);
	}

}


}

class Particle0 {
	constructor() {
		this.x = 400;
		this.y = 480;
		this.vx = random(-1, 1);
		this.vy = random(-5, -1);
		this.alpha = 255;
	}

	finished() {
		return this.alpha < 0;
	}

	update() {
		this.x += this.vx;
		this.y+= this.vy;
		this.alpha -= 3;

	}


	show() {
		noStroke();
		// stroke(255);
		fill(244, this.alpha);
		ellipse (this.x, this.y, 75);
	}
}

class Particle1 {
	constructor() {
		this.x = 100;
		this.y = 480;
		this.vx = random(-1, 1);
		this.vy = random(-5, -1);
		this.alpha = 255;
	}

	finished() {
		return this.alpha < 0;
	}

	update() {
		this.x += this.vx;
		this.y+= this.vy;
		this.alpha -= 5;

	}


	show() {
		noStroke();
		// stroke(255);
		fill(234, this.alpha);
		ellipse (this.x, this.y, 75);
	}
}

class Particle2 {
	constructor() {
		this.x = 200;
		this.y = 480;
		this.vx = random(-1, 1);
		this.vy = random(-5, -1);
		this.alpha = 255;
	}

	finished() {
		return this.alpha < 0;
	}

	update() {
		this.x += this.vx;
		this.y+= this.vy;
		this.alpha -= 5;

	}


	show() {
		noStroke();
		// stroke(255);
		fill(234, this.alpha);
		ellipse (this.x, this.y, 75);
	}
}

class Particle3 {
	constructor() {
		this.x = 300;
		this.y = 480;
		this.vx = random(-1, 1);
		this.vy = random(-5, -1);
		this.alpha = 255;
	}

	finished() {
		return this.alpha < 0;
	}

	update() {
		this.x += this.vx;
		this.y+= this.vy;
		this.alpha -= 5;

	}


	show() {
		noStroke();
		// stroke(255);
		fill(234, this.alpha);
		ellipse (this.x, this.y, 75);
	}
}