let scene = "center";

let arrowColorL;
let arrowColorR;

// center scene interaction triggers
let tvInter = false;
let traInter = false;

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
    centerBg();

    tv(200, 200, 0);

    trash(400, 325);

    // ellipse(375, 287.5, 10);

    // ellipse(425, 362.5, 10);

    // ellipse(350, 312.5, 10);

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
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 10);
  pop();
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

  // hit box for tv
  if (scene == "center" && 125 < mouseX && mouseX < 275 && 125 < mouseY && mouseY < 275) {
    tvInter = !tvInter;
  }

  // hit box for trash can
  if (scene == "center" && traInter == false && 375 < mouseX && mouseX < 425 && 287.5 < mouseY && mouseY < 362.5) {
    traInter = true;
  }
  if (scene == "center" && traInter == true && 350 < mouseX && mouseX < 425 && 312.5 < mouseY && mouseY < 362.5) {
    traInter = false;
  }
}

function tv(x, y, screenColor) {
  push();
  noStroke();
  translate(x, y)

  // tv screen color
  if (tvInter) {
    screenColor = color(20, random(100, 150), 200);
  } else {
    screenColor = color(0);
  }
  fill(screenColor)
  rect(-75, -75, 150);

  // tv frame
  if (scene == "center" && 125 < mouseX && mouseX < 275 && 125 < mouseY && mouseY < 275) {
    frameColor = 75;
  } else {
    frameColor = 50;
  }
  fill(frameColor);
  rect(-75, -75, 25, 150);
  rect(50, -75, 25, 150);
  rect(-50, -75, 100, 25);
  rect(-50, 50, 100, 25);

  // table
  fill(115, 65, 5);
  rect(-100, 75, 200, 50);

  pop();
}

function trash(x, y) {
  push();
  translate(x, y);
  noStroke();

  let traColor = 200;
  if (scene == "center" && traInter == false && 375 < mouseX && mouseX < 425 && 287.5 < mouseY && mouseY < 362.5) {
    traColor = (230);
  }
  if (scene == "center" && traInter == true && 350 < mouseX && mouseX < 425 && 312.5 < mouseY && mouseY < 362.5) {
    traColor = (230);
  }

  fill(traColor);
  if (traInter == true) {
    rect(-50, -12.5, 75, 50);
  } else {
    rect(-25, -37.5, 50, 75);
  }

  pop();
}

function centerBg() {
  push();
  background(140, 234, 237);
  noStroke();
  fill(255, 245, 166);
  rect(0, 310, width, height);
  pop();
}
