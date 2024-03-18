let scene = "center"; 

let arrowColorL;
let arrowColorR;

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

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(500, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  noCursor();

  background(135, 148, 115);

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
} 
