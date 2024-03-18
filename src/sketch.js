let scene = "center";

let arrowColorL;
let arrowColorR;

// center scene interaction triggers
let tvInter = false;
let traInter = false;

let appleX = 250;
let appleY = 240; // Moved the apple down a little bit
let appleRotation = 0; // Initial rotation angle

let cactusWidth = 30;
let cactusHeight = 50;
let trunkWidth = 10;
let trunkHeight = 20;

let potWidth = 60;
let potHeight = 500;

let maxCactusWidth = 150;
let maxCactusHeight = 200;

//right scene interaction triggers
let lampOn = false; 
let roomBrightness = 150; 
let pillowHeight = 25;
let doorOpen = false;

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
    background(135, 148, 115);
     // Draw desk surface
     fill(139, 69, 19); // Brown color for the desk surface
     rect(200, 250, 250, 25);
   
     // Draw desk legs
     fill(139, 69, 19); // Brown color for the legs 
     let legWidth = 20;
     let legHeight = 130;
     rect(240, 270, legWidth, legHeight); // Top-left leg
     rect(400, 270, legWidth, legHeight); // Top-right leg
   
     // Draw monitor stand
     let standWidth = 10; 
     let standHeight = 35; 
     fill(169); // Gray color for the stand
     rect(330, 180 + standHeight, standWidth, standHeight); // Monitor stand
   
     // Draw monitor
     fill(50); // Dark gray color for the monitor
     let monitorWidth = 120;
     let monitorHeight = 75;
     rect(275, 150, monitorWidth, monitorHeight); // Monitor screen
     
     // Draw screen inside the monitor
     let screenWidth = 110;
     let screenHeight = 60;
     fill(135, 206, 250); 
     rect(280, 158, screenWidth, screenHeight); // Screen inside the monitor
   
       // Draw apple
       push();
       translate(appleX, appleY); // Move the origin to the apple's position
       rotate(radians(appleRotation)); // Rotate the apple
       fill(255, 0, 0); // Red color for the apple
       ellipse(0, 0, 20, 30); // Apple body (size remains the same)
       fill(0, 128, 0); // Green color for the apple stem
       rect(-3, -15, 6, 8); // Stem
       pop(); // Restore the original transformation 
       
       // Draw clock
       drawClock();
       
       // Draw cactus and pot
       drawCactusAndPot();

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
  if (scene == "center" && traInter == true && 320 < mouseX && mouseX < 425 && 312.5 < mouseY && mouseY < 362.5) {
    traInter = false;
  }

    // Check if the apple is clicked
    if (dist(mouseX, mouseY, appleX, appleY) < 20) {
      // If the apple is clicked, simulate rolling to the edge of the desk
      if (appleX < 250) {
        // Move the apple to the right edge of the desk
        appleX = 450;
      } else {
        // Move the apple to the left edge of the desk
        appleX = 250;
      }
      // Rotate the apple
      appleRotation += 45; // Increment the rotation angle by 45 degrees
    }
  
    // Check if the cactus or trunk is clicked
    if ((mouseX > 95 - cactusWidth / 2 && mouseX < 95 + cactusWidth / 2 && mouseY > 295 - cactusHeight / 2 && mouseY < 295 + cactusHeight / 2) ||
       (mouseX > 90 - trunkWidth / 2 && mouseX < 90 + trunkWidth / 2 && mouseY > 320 && mouseY < 320 + trunkHeight)) {
      // Increase cactus size when clicked
      if (cactusHeight < maxCactusHeight && mouseY > 295) { // Limit cactus size and ensure it doesn't go below desk level
        cactusWidth += 10;
        cactusHeight += 10;
      } else if (cactusHeight == maxCactusHeight) {
        // Shrink cactus when at max size
        cactusWidth -= 10;
        cactusHeight -= 10;
      }
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
  
    let pillowX = 250 - 160;
    let pillowY = 200 + 70;
    let pillowWidth = 75;
  
    if (
      mouseX >= pillowX &&
      mouseX <= pillowX + pillowWidth &&
      mouseY >= pillowY - pillowHeight / 2 &&
      mouseY <= pillowY + pillowHeight / 2
    ) {
      pillowHeight = pillowHeight === 25 ? 37.5 : 25; // Toggles pillow height
    }
    let doorKnobX = 250 + 2;
    let doorKnobY = 200 + 5;
    let doorKnobRadius = 15 / 2;
  
    if (dist(mouseX, mouseY, doorKnobX, doorKnobY) <= doorKnobRadius) {
      doorOpen = !doorOpen; // Toggle the door state
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
  let garbaColor1 = color(181, 75, 40);
  let garbaColor2 = color(40, 181, 120);
  if (scene == "center" && traInter == false && 375 < mouseX && mouseX < 425 && 287.5 < mouseY && mouseY < 362.5) {
    traColor = (230);
  }
  if (scene == "center" && traInter == true && 320 < mouseX && mouseX < 425 && 312.5 < mouseY && mouseY < 362.5) {
    traColor = (230);
    garbaColor1 = color(222, 95, 53);
    garbaColor2 = color(58, 240, 161);
  }


  if (traInter == true) {
    fill(traColor);
    rect(-50, -12.5, 75, 50);
    fill(garbaColor1)
    rect(-75, 0, 10, 5);
    fill(garbaColor2)
    rect(-80, 10, 20, 15);
  } else {
    fill(traColor);
    rect(-25, -37.5, 50, 75);
  }

  pop();
}

function centerBg() {
  push();
  background(170, 255, 168);
  noStroke();
  fill(131, 105, 83);
  rect(0, 310, width, height);
  pop();
}

// Draw clock on the wall
function drawClock() {
  let clockX = 120; // Move clock to the right
  let clockY = 100; // Moved the clock up
  let clockSize = 100;
  
  // Clock face
  fill(255);
  ellipse(clockX, clockY, clockSize, clockSize);
  
  // Hour markers
  stroke(0);
  strokeWeight(4);
  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, TWO_PI);
    let x1 = clockX + cos(angle) * (clockSize / 2 - 10);
    let y1 = clockY + sin(angle) * (clockSize / 2 - 10);
    let x2 = clockX + cos(angle) * (clockSize / 2 - 20);
    let y2 = clockY + sin(angle) * (clockSize / 2 - 20);
    line(x1, y1, x2, y2);
  }
  
  // Hands of the clock
  let h = hour();
  let m = minute();
  let s = second();
  
  // Hour hand
  strokeWeight(6);
  line(clockX, clockY, clockX + cos(map(h % 12 + m / 60, 0, 12, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 4), clockY + sin(map(h % 12 + m / 60, 0, 12, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 4));
  
    // Minute hand
    strokeWeight(4);
    line(clockX, clockY, clockX + cos(map(m + s / 60, 0, 60, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 2.5), clockY + sin(map(m + s / 60, 0, 60, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 2.5));
  
    // Second hand (black)
    stroke(0); // Black color for the seconds hand
    strokeWeight(2);
    line(clockX, clockY, clockX + cos(map(s, 0, 60, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 2.2), clockY + sin(map(s, 0, 60, -HALF_PI, TWO_PI - HALF_PI)) * (clockSize / 2.2));
  }
  
  // Draw cactus and pot
  function drawCactusAndPot() {
    // Draw cactus
    fill(50); // Dark green color for the cactus
    ellipse(95, 295, cactusWidth, cactusHeight); // Cactus body
    ellipse(95, 300, cactusWidth, cactusHeight / 2); // Cactus arm 1
  
    // Draw trunk connecting cactus to the pot
    fill(139, 69, 19); // Brown color for the trunk
    rect(90, 320, trunkWidth, trunkHeight); 
    // Draw pot
    fill(139, 69, 19); // Brown color for the pot
    rect(60, 330, potWidth, potHeight); // Pot
  }

  function rightBg(){
    push();
    background(186, 193, 209);
    noStroke();
    
    // pattern on the background
    fill(151, 168, 181); 
    let xPos = 0;
    let yPos = 0;
    while (xPos < width) {
      while (yPos < height) {
        ellipse(xPos, yPos, 15, 15);
        yPos += 30;
      }
      xPos += 30;
      yPos = 0;
    }
    
    fill(142, 152, 83);
    rect(0, 310, width, height);
    
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
    ellipse(-160, 70, 75, pillowHeight);
    
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
    
    if (doorOpen) {
      // open door with bear
      fill(150); // Gray color for the door
      rect(-115, -100, 130, 175);
      fill(150); // Gray color for the door panels
      rect(-100, -80, 100, 75);
      rect(-100, 15, 100, 60);
  
      // bear
      fill(148, 118, 97); 
      ellipse(-50, 5+35, 50, 65); // Body
      ellipse(-75, -60+35, 25, 25); // left ear
      ellipse(-25, -60+35, 25, 25); // right ear
      ellipse(-50, -40+35, 50, 50); // Head
      ellipse(-65, 65, 40, 20);// left leg
      ellipse(-35, 65, 40, 20);// right leg
      
      
      //door knob
      fill(160); // Gray color for the door knob
      ellipse(2, 5, 15, 15);
    } else {
      // Draw the closed door
      fill(189, 144, 151);
      rect(-115, -100, 130, 175);
      fill(223, 193, 198);
      rect(-100, -80, 100, 75);
      fill(223, 193, 198);
      rect(-100, 15, 100, 60);
  
      //door knob
      fill(163, 97, 36);
      ellipse(2, 5, 15, 15);
    }
  
    pop();
  }
  
  function drawRoomBrightness() {
    push();
    fill(0, 0, 0, 255 - roomBrightness); // Semi-transparent black rectangle
    rect(0, 0, width, height);
    pop();
  }