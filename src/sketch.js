let scene = "center";

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  //arrow positions
  // ellipse(12, 175, 5);
  // ellipse(63, 225, 5);
  // ellipse(388, 175, 5);
  // ellipse(337, 225, 5);

  if (scene == "center") {
    leftArrow(50, 200, 0.5);
    rightArrow(350, 200, 0.5);
  }

  if (scene == "left") {
    rightArrow(350, 200, 0.5);
  }

  if (scene == "right") {
    leftArrow(50, 200, 0.5);
  }
}

function leftArrow(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill(0, 255, 0);
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
  fill(0, 255, 0);
  rect(-25, -25, 50, 50);
  triangle(-75, 0, -25, -50, -25, 50);
  pop();
}

function mouseClicked() {
  if (scene == "center" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    scene = "left";
  }
  if (scene == "center" && 337 < mouseX && mouseX < 388 && 175 < mouseY && mouseY < 225) {
    scene = "right";
  }

  if (scene == "left" && 337 < mouseX && mouseX < 388 && 175 < mouseY && mouseY < 225) {
    scene = "center";
  }

  if (scene == "right" && 12 < mouseX && mouseX < 63 && 175 < mouseY && mouseY < 225) {
    scene = "center";
  }
}


