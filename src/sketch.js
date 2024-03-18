let scene = "center";

// ignore
let arrowColorL;
let arrowColorR;

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

    lamp(0,0);

    door(0,0);


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
  
  // middle of bed
  fill(120);
  rect(-200, 75, 225, 100); 
  fill(255);
  rect(-150, 75, 25, 100);
  fill(255, 0, 0);
  rect(-125, 75, 150, 100);
  
  // pillow
  fill(50);
  ellipse(-160, 60, 75, 25);
  
  pop();
  
}


function lamp(x, y){
  push();

  noStroke();
  translate(x, y);

  fill(100, 88, 69);
  rect(125, 185, 100, 15);
  fill(130, 111, 81);
  rect(167,-50, 15, 235);
  fill(247, 244, 185);
  quad(150, -115, 200, -115, 225, -50, 125, -50);
  
  pop();
}
function door(x, y){
  push();

  noStroke();
  translate(x, y);
  
  pop();
}

