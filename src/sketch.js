let scene = "center";

// ignore
let arrowColorL = 0;
let arrowColorR = 0;

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


