x = 0;
y = 0;
hueSlider = 0;
 
function setup() {
    createCanvas(640, 480);
    colorMode(HSL);
    slider = createSlider(0, 360, 0);
}
 
function draw() {
    hueSlider = lerp(hueSlider, slider.value(), 0.01)
    background(hueSlider, 50, 70);
 
    fill(120, 50, 50);
    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);
 
    ellipse(x, y, 50, 50);
}