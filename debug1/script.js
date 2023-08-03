let xPos = 250; // Center of the canvas
let yPos = 250; // Center of the canvas
let xSpeed = 1;
let ySpeed = 4.5;
let ellipseSize = 30;


function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();
}

function draw() {
  background(0, 0, 0, 5);

  fill(255, 0, 255);
  ellipse(xPos, yPos, ellipseSize, ellipseSize);

  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos < ellipseSize/2 || xPos > width - ellipseSize/2) {
    xSpeed *= -1;
  }
  if (yPos < ellipseSize/2 || yPos > height - ellipseSize/2) {
    ySpeed *= -1;
  }
}