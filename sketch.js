w = 640 * 1.3;
h = 480 * 1.3;


function setup() {
  pixelDensity(3.0);

  background("clear");
  video = createCapture(VIDEO);
  video.size(w, h);
  createCanvas(w, h);
  video.hide();
video.position(50,100);
}

function draw() {

  push();
  translate(w, 0);
  scale(-1, 1);
  image(video, 0, 0, w, h);
  pop();



}