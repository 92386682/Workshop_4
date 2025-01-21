let testbutton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0 , mouseY , mouseX);
  textAlign(CENTER);
  textFont('Arial');


  sliderTest = createSlider(50, 2000, 1000);
    sliderTest.position (windowWidth/2-100, windowHeight*0.9);
    sliderTest.size (200);
  //slider creation and placement


 testbutton = createButton('HERE');
    x = 0;
    setTimeout(MoveButton, sliderTest.value())
      // testbutton.position(windowWidth/2, windowHeight/2) obsolete
      //moves button at timed intervals based on slider value
      testbutton.mousePressed(() => {
        x++;
        testbutton.position(random(windowWidth-20), random (windowHeight-20))}
      )
  };  //moves button randomly when pressed, and increased "score" text

function MoveButton(){
  testbutton.position(windowWidth/2, windowHeight/2)
  testbutton.position(random(windowWidth-30), random (windowHeight-50)) //negatives stop it spawning offscreen
  setTimeout(MoveButton, sliderTest.value())
}

function windowResized () {
  testbutton.position(windowWidth/2, windowHeight/2); 
}

function draw() {
  background(0, mouseX, mouseY/x*10); //background colour depending on mouse position
   textSize(15);
   text('Difficulty', windowWidth/2, windowHeight*0.9);
    textSize(50);
    text(x , 50, 50); 
  };
