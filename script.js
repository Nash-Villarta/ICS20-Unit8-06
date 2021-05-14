var nums = [125, 100, 75, 50];

var words = ["Hello!", "Goodmoring!", "Good day!"];
var index = 0;
let value = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (var i = 0; i < 4; i++) {
    stroke(0);
    fill(value);
    ellipse(i * 50 + 100, 200, nums[i], nums[i]);
  }
  fill(0);
  textSize(32);
  text(words[index], 150, 100);
}

function mousePressed() {
  index = index + 1;

  if (index == 3) {
    index = 0;
  }

  if (value == 255) {
    value = 209;
  } else if (value == 209) {
    value = 167;
  } else if (value == 167) {
    value = 255;
  }
}
