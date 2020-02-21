var r,g,b
let num = 70;
let mx = [];
let my = [];
var state = false;
let=angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  r= random(255);
  g= random(255);
  b= random(255);
  //noStroke();
  stroke(r,g,b);
  strokeWeight(3);
  fill(r,g,b, 100);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  state=false;
  background(40);
  
  textSize(30);
  text('Click to Change Color!',(windowWidth/2)-125,(windowHeight/2)-50);
  text('or',(windowWidth/2)-10,(windowHeight/2));
  text('Press Keyboard for Surprise!',(windowWidth/2) - 185,(windowHeight/2) + 50);
  color(255);
  
  if (keyIsPressed){
    state=true;
  }
  if (state){
    background (r,g,b);
    textSize(25);
    color(255,200);
    text('Click to change Color',(windowWidth/2)-125,(windowHeight/2)-50);
    text('or', (windowWidth/2)-10,(windowHeight/2));
    text('Release to go Back', (windowWidth/2)-120,(windowHeight/2)+50);
    text('Keep moving the mouse for more fun', (windowWidth/2)-200,(windowHeight)-50);
    fill(255);
    noStroke();
    translate((windowWidth/2),(windowHeight/2))
    rotate(angle);
    rect(0,0, 100,100);
    angle=angle+4
      }//end of if(state)
  
  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }//end of for(let)
  
}//end of function draw

// When the user clicks the mouse
function mousePressed() {
  r= random(255);
  g= random(255);
  b= random(255);
  fill(r,g,b,100);
  stroke(r,g,b);
//ellipse.push(new Ellipse());
  }//end of function mousepressed

