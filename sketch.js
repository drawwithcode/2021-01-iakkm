var detailX;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  frameRate(30);
  detailX = createSlider(3, 24, 24);
  detailX.position(windowWidth / 2.33, height - 40);
  detailX.addClass("mySlider");
  colorMode(HSB, 100);
}

let i = 0.0;
let a = 1.0;
let b = 0;

function draw() {
  background(0);

  stroke("white");
  strokeWeight(1);
  line(random(frameCount), -windowHeight, random(frameCount), windowHeight);
  line(random(-frameCount), -windowHeight, random(-frameCount), windowHeight);
  line(random(frameCount), -windowHeight, random(frameCount), windowHeight);
  line(random(-frameCount), -windowHeight, random(-frameCount), windowHeight);
  line(random(frameCount), -windowHeight, random(frameCount), windowHeight);
  line(random(-frameCount), -windowHeight, random(-frameCount), windowHeight);
  line(random(frameCount), -windowHeight, random(frameCount), windowHeight);
  line(random(-frameCount), -windowHeight, random(-frameCount), windowHeight);

  line(-windowHeight, random(frameCount), windowHeight, random(frameCount));
  line(-windowHeight, random(-frameCount), windowHeight, random(-frameCount));
  line(-windowHeight, random(frameCount), windowHeight, random(frameCount));
  line(-windowHeight, random(-frameCount), windowHeight, random(-frameCount));
  line(-windowHeight, random(frameCount), windowHeight, random(frameCount));
  line(-windowHeight, random(-frameCount), windowHeight, random(-frameCount));
  line(-windowHeight, random(frameCount), windowHeight, random(frameCount));
  line(-windowHeight, random(-frameCount), windowHeight, random(-frameCount));

  push();
  rotateX(frameCount * 2);
  rotateY(frameCount * 4);
  rotateZ(frameCount);
  torus(200, 25, detailX.value(), 14);
  pop();

  let myColor = lerpColor(color("orange"), color("violet"), float(i / 100));
  stroke("black");
  strokeWeight(0.5);
  fill(myColor);

  if (b <= 100) {
    i = i + a;
    if (i > 100) {
      a = -1;
    }
    if (i < 0) {
      a = 1.0;
      b = b + 1;
    }
  }
}
