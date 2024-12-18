let scene = 0; // Tracks the current comic scene
let captions = [
  "Good morning! Time to start the day.",
  "The daily train commute begins...",
  "Time for class! MMP 100 on the whiteboard.",
  "Putting on my green apron - time to work!",
  "The day winds down. Goodnight!",
  "Relaxing with NBA highlights on TV."
];

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(240); // Neutral gray background

  if (scene === 0) {
    morningScene();
  } else if (scene === 1) {
    commuteScene();
  } else if (scene === 2) {
    schoolScene();
  } else if (scene === 3) {
    workScene();
  } else if (scene === 4) {
    eveningScene();
  } else if (scene === 5) {
    tvScene();
  }

  // Caption Box
  fill(0, 0, 0, 180); // Semi-transparent black for captions
  rect(0, height - 80, width, 80);
  fill(255); // White text
  textSize(24);
  text(captions[scene], width / 2, height - 40);

  // Instructions
  textSize(16);
  fill(200);
  text("Click to continue...", width / 2, height - 20);
}

// Add the character with chains to each scene
function drawCharacter(x, y, withApron = false) {
  const headSize = 50;
  const bodyWidth = 40;
  const bodyHeight = 90;
  const legHeight = 80;

  // Brown skin for the character
  fill(139, 69, 19); 
  ellipse(x, y - 100, headSize); // Head (closer to body)

  // Body and Legs connected properly
  fill(0);
  rect(x - bodyWidth / 2, y - 50, bodyWidth, bodyHeight); // Body

  // Chains - bright yellow (now on the body)
  fill(255, 223, 0); // Bright yellow color for chains
  strokeWeight(3);
  noFill();
  arc(x, y - 20, 60, 50, 0, PI); // Chain 1
  arc(x, y + 10, 70, 60, 0, PI); // Chain 2

  // Arms
  fill(139, 69, 19); // Arm color (brown)
  rect(x - 55, y - 50, 20, 60); // Left arm
  rect(x + 35, y - 50, 20, 60); // Right arm

  // Legs (together)
  fill(0); // Black for pants
  rect(x - 20, y + 40, 20, legHeight); // Left leg
  rect(x, y + 40, 20, legHeight); // Right leg
  
  // Apron (only in work scene)
  if (withApron) {
    fill(34, 139, 34); // Green apron
    rect(x - 40, y - 50, 80, 150, 10); // Apron
  }

  // Eyes and smile
  fill(0);
  ellipse(x - 10, y - 110, 5, 5); // Left eye
  ellipse(x + 10, y - 110, 5, 5); // Right eye
  noFill();
  arc(x, y - 100, 30, 20, 0, PI); // Smile
}

// Scene Functions
function morningScene() {
  background(255, 223, 186); // Soft sunrise color
  fill(255, 204, 0); // Sun color
  ellipse(width / 2, height / 2 - 150, 150, 150); // Sun placed higher

  drawCharacter(width / 2 - 200, height / 2 + 50); // Move the character away from the visual

  fill(0);
  textSize(28);
  text("Morning Scene", width / 2, 50);
}

function commuteScene() {
  background(135, 206, 235); // Sky blue
  fill(100);
  rect(width / 2 - 200, height - 180, 400, 100, 10); // Train body
  fill(255);
  rect(width / 2 - 150, height - 160, 70, 60); // First window
  rect(width / 2 - 50, height - 160, 70, 60); // Second window
  rect(width / 2 + 50, height - 160, 70, 60); // Third window

  fill(0);
  ellipse(width / 2 - 100, height - 80, 40); // Left wheel
  ellipse(width / 2 + 100, height - 80, 40); // Right wheel

  drawCharacter(width / 2 - 200, height - 250); // Move the character away from the visual

  fill(0);
  textSize(28);
  text("Train Commute", width / 2, 50);
}

// (other scenes similar to the above)

function mousePressed() {
  scene++;
  if (scene > 5) {
    scene = 0; // Reset to the first scene
  }
}
