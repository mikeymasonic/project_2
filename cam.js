let r;
let factor = 0;
let campos;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  r = height/2 - 16;  
  
   	camera(width/2.0, height/2.0, (height/2.0) / tan(PI*30.0 / 180.0),
         0, 0, 0, 0, 1, 0)
 		
 //	perspective(45, width/height, 1, 10000)
  
  //rotateX(-PI/6);
	//rotateY(PI/3);
}

function fromangle(angle, _angle){
	let R = createVector();
  R.x = sin(angle) * cos(_angle);
	R.y = sin(angle) * sin(_angle);
	R.z = cos(angle);
  return R
}

function getVector(index, _index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const _angle = map(_index % total, 0, total, 0, TWO_PI);
  const v = fromangle(angle + PI, _angle);
  v.mult(r);
  return v;
}
let ang = 0;

function draw() {
  background(0);
  rotateZ(ang * PI/180)
  ang += 0.1
  const total = 200; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;
  
  stroke(255, 150);
	
  strokeWeight(2);
  for (let i = 0; i < total; i++) {
		for (let j = 0; j < total/100; j++) {
    	const a = getVector(i, j , total);
    	const b = getVector(i * factor, factor * factor, total);
    	line(a.x, a.y, a.z, b.x, b.y, b.z);
  	}
  }
}