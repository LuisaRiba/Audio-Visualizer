// light blue (191, 49, 100)
// dark blue (222, 53, 80)
// light red (351, 42, 100)
// dark red (3, 54, 83)
// grey (113,0,20)
// light green (130, 54, 100)
// dark green (128, 45, 71)
// light yellow (39, 43, 100)
// dark yellow (49, 65, 95)

let song, buttton, fft, space_between_lines;

var yColors = 704; // y axis for color circles
var yMin = 666; // y axis ranges for the circles
var yMax = 742;
var CSize = 76; // circle size
var xBlue = 130; // x axis for circles
var xRed = 260;
var xGrey = 390;
var xGreen = 520;
var xYellow = 650;

var mic;
var vol;


// stop/play button usage
function toggleSong() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}


function preload() {
  song = loadSound('CoronaTusa.mp3'); 
}


function setup() {
  createCanvas(780, 780);
    
// "bar graph" visual setup with frequency measuring
  angleMode(DEGREES);
  colorMode(HSB);
  buttton = createButton('Stop/Play');
  buttton.mousePressed(toggleSong);
  song.play();  
  fft = new p5.FFT(0.9, 128);
  space_between_lines = (width/2)/65;
    
  
// getting the mic ready for the circles
  mic = new p5.AudioIn();
  getAudioContext().suspend();
  userStartAudio();
  mic.start();
}


function draw() {
  background(113,0,20);

// "bar graph" visual
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    fill(i*3,255,255);
    stroke(i*3,255,255);
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    rect((width/2) + (i * space_between_lines), y, space_between_lines, height - y);
    rect((width/2) - (i * space_between_lines), y, space_between_lines, height - y);
    
// color option circles
    noStroke();
    fill(191, 49, 100);
        ellipse(xBlue, yColors, CSize, CSize);
    fill(351, 42, 100);
        ellipse(xRed, yColors, CSize, CSize);
    fill(113,0,20);
        ellipse(xGrey, yColors, CSize, CSize);
    fill(130, 54, 100);
        ellipse(xGreen, yColors, CSize, CSize);
    fill(39, 43, 100);
        ellipse(xYellow, yColors, CSize, CSize); 
      
// blue visualizer
    if (mouseX < (xBlue+(CSize/2)) && mouseX > (xBlue-(CSize/2)) && mouseY < yMax && mouseY > yMin) {
      background(191, 49, 100);
      vol = mic.getLevel();
      fill(222, 53, 80);
      ellipse(height/2, width/2, vol*5000, vol*5000);
      console.log('volume', vol);
        //color picker
        fill(191, 49, 100);
        ellipse(xBlue, yColors, CSize, CSize);
        fill(351, 42, 100);
        ellipse(xRed, yColors, CSize, CSize);
        fill(113,0,20);
        ellipse(xGrey, yColors, CSize, CSize);
        fill(130, 54, 100);
        ellipse(xGreen, yColors, CSize, CSize);
        fill(39, 43, 100);
        ellipse(xYellow, yColors, CSize, CSize);
  }

      
// red visualizer
    else if (mouseX < (xRed+(CSize/2)) && mouseX > (xRed-(CSize/2)) && mouseY < yMax && mouseY > yMin) {
      background(351, 42, 100);
      vol = mic.getLevel();
      fill(3, 54, 83);
      ellipse(height/2, width/2, vol*5000, vol*5000);
      console.log('volume', vol);
        //color picker
        fill(191, 49, 100);
        ellipse(xBlue, yColors, CSize, CSize);
        fill(351, 42, 100);
        ellipse(xRed, yColors, CSize, CSize);
        fill(113,0,20);
        ellipse(xGrey, yColors, CSize, CSize);
        fill(130, 54, 100);
        ellipse(xGreen, yColors, CSize, CSize);
        fill(39, 43, 100);
        ellipse(xYellow, yColors, CSize, CSize);
      
  }
      
      
// green visualizer
    else if (mouseX < (xGreen+(CSize/2)) && mouseX > (xGreen-(CSize/2)) && mouseY < yMax && mouseY > yMin) {
      background(130, 54, 100);
      vol = mic.getLevel();
      fill(128, 45, 71);
      ellipse(height/2, width/2, vol*5000, vol*5000);
      console.log('volume', vol);
        //color picker
        fill(191, 49, 100);
        ellipse(xBlue, yColors, CSize, CSize);
        fill(351, 42, 100);
        ellipse(xRed, yColors, CSize, CSize);
        fill(113,0,20);
        ellipse(xGrey, yColors, CSize, CSize);
        fill(130, 54, 100);
        ellipse(xGreen, yColors, CSize, CSize);
        fill(39, 43, 100);
        ellipse(xYellow, yColors, CSize, CSize);
      
  }

      
// yellow visualizer
    else if (mouseX < (xYellow+(CSize/2)) && mouseX > (xYellow-(CSize/2)) && mouseY < yMax && mouseY > yMin) {
      background(39, 43, 100);
      vol = mic.getLevel();
      fill(49, 65, 95);
      ellipse(height/2, width/2, vol*5000, vol*5000);
      console.log('volume', vol);
        //color picker
        fill(191, 49, 100);
        ellipse(xBlue, yColors, CSize, CSize);
        fill(351, 42, 100);
        ellipse(xRed, yColors, CSize, CSize);
        fill(113,0,20);
        ellipse(xGrey, yColors, CSize, CSize);
        fill(130, 54, 100);
        ellipse(xGreen, yColors, CSize, CSize);
        fill(39, 43, 100);
        ellipse(xYellow, yColors, CSize, CSize);
      
  }
}
}

function touchStarted() {
  getAudioContext().resume();
  
}