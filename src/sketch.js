let scene = "center";

// ignore
let arrowColorL;
let arrowColorR;

//right scene interaction triggers
let lampOn = true; 
let roomBrightness = 150; 

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(500, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  noCursor();

  background(220);

  // arrow positions
  // ellipse(12, 175, 5);
  // ellipse(63, 225, 5);
  // ellipse(488, 175, 5);
  // ellipse(437, 225, 5);

  arrowHighlight();

  // center scene
  if (scene == "center") {

    // scene elements go above this
    leftArrow(50, 200, 0.5);
    rightArrow(450, 200, 0.5);
  }

  // left scene
  if (scene == "left") {

    // scene elements go above this
    rightArrow(450, 200, 0.5);
  }

  // right scene
  if (scene == "right") {
  
    rightBg();

    bed(250, 200);

    lamp(250, 200);

    door(250, 200);

    drawRoomBrightness();

    // scene elements go above this
    leftArrow(50, 200, 0.5);
  }

  customCursor(mouseX, mouseY);
}

function leftArrow(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill(arrowColorL);
  rect(-25, -25, 50, 50);
  triangle(-75, 0, -25, -50, -25, 50);
  pop();
}

function rightArrow(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  rotate(PI);
  noStroke();
  fill(arrowColorR);
  rect(-25, -25, 50, 50);
  triangle(-75, 0, -25, -50, -25, 50);
  pop();
}

function customCursor(x, y) {
  // temporary cursor element
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 10);
}

function arrowHighlight() {
  // hightlights left arrow in center scene
  if (scene == "center" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    arrowColorL = color(0, 250, 0);
  
  // highlights right arrow in center scene
  } else if (scene == "center" && 437 < mouseX && mouseX < 488 && 175 < mouseY && mouseY < 225) {
    arrowColorR = color(0, 250, 0);

  // highlights right arrow in left scene
  } else if (scene == "left" && 437 < mouseX && mouseX < 488 && 175 < mouseY && mouseY < 225) {
    arrowColorR = color(0, 250, 0);

  // highlights left arrow in right scene
  } else if (scene == "right" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    arrowColorL = color(0, 250, 0);

  // unhighlights arrows
  } else {
    arrowColorL = color(0, 200, 0);
    arrowColorR = color(0, 200, 0);
  }
}

function mouseClicked() {
  // hit box for left arrow in center scene
  if (scene == "center" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    scene = "left";
  }

  // hit box for right arrow in center scene
  if (scene == "center" && 437 < mouseX && mouseX < 488 && 175 < mouseY && mouseY < 225) {
    scene = "right";
  }

  // hit box for right arrow in left scene
  if (scene == "left" && 437 < mouseX && mouseX < 488 && 175 < mouseY && mouseY < 225) {
    scene = "center";
  }

  // hit box for left arrow in right scene
  if (scene == "right" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    scene = "center";
  }

  // lamp click, room brighter
  let lampX = 250 + 150;
  let lampY = 200 - 115;
  let lampWidth = 225 - 125;
  let lampHeight = -50 - (-115);
  if (
    mouseX >= lampX &&
    mouseX <= lampX + lampWidth &&
    mouseY >= lampY &&
    mouseY <= lampY + lampHeight
  ) {
    lampOn = !lampOn; // Toggle the lamp state
    roomBrightness = lampOn ? 255 : 150; // Update room brightness
  }
}

function rightBg(){
  push();
  background(186, 193, 209);
  noStroke();
  fill(142, 152, 83);
  rect(0, 310, width, height)
  pop();
}

function bed(x, y){
  push();
  noStroke();
  translate(x, y);
  
  fill(84, 78, 70);
  rect(-250, 0, 50, 200);
  rect(25, 50, 50, 150);
  
  // pillow
  fill(100, 100, 200);
  ellipse(-160, 70, 75, 25);
  
  // middle of bed
  fill(120);
  rect(-200, 75, 225, 100);
  fill(255);
  rect(-150, 75, 25, 100);
  fill(255, 0, 0);
  rect(-125, 75, 150, 100);

  pop();
  
}


function lamp(x, y){
  push();
  noStroke();
  translate(x, y);

  fill(100, 88, 69);
  rect(125, 185, 100, 15);
  fill(185, 144, 109);
  rect(167, -50, 15, 235);
  
  //lamp head
  let lampColor = lampOn ? color(247, 244, 185) : color(144, 118, 97);
  fill(lampColor);
  quad(150, -115, 200, -115, 225, -50, 125, -50);

  pop();
}
function door(x, y){
  push();
  noStroke();
  translate(x, y);
  
  fill(189, 144, 151);
  rect(-115, -100, 130, 175);
  fill(223, 193, 198);
  rect(-100, -80, 100, 75);
  fill(223, 193, 198);
  rect(-100, 15, 100, 60);
  
  fill(163, 97, 36);
  ellipse(2, 5, 15, 15);
  
  pop();
}

function drawRoomBrightness() {
  push();
  fill(0, 0, 0, 255 - roomBrightness); // Semi-transparent black rectangle
  rect(0, 0, width, height);
  pop();
}
