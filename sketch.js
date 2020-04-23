let rabbit;
let winter;
let wolf;
let forest;
let typed = "";
let hasDied = false;
let nextState = 0;
let state = 0;
let counter = 0;


function preload(){
  rabbit = loadImage("rabbit.jpg");
  winter = loadImage("winter.jpg");
  wolf = loadImage("wolf.gif");
  forest = loadImage("forest.jpg");
  gameover = loadImage("game-over.gif");
}


function setup(){
  createCanvas(displayWidth, displayHeight);
  // font
  textFont("Helvetica");
  textSize(30);
  textAlign(CENTER);
  fill(220,220,220);
}


function draw(){
  background(0);

  if(state == nextState){
    if(state == 0){
      image(rabbit, 0, 90);
      text("Hello, welcome to Rabbit Adventure, where you become a rabbit!", 0,10, width, 30);
      text("Type 'start' to begin!", 0,50, width, 30);

    } else if (state == 1){
      image(winter, 0, 0);
      text("You appear in a land covered by snow.", 0,10, width, 30);
      text("", 0,50, width, 30);

    } else if (state == 2){
      image(wolf, 0, 0);

    } else if (state == 3){
      image(forest, 0, 0);

    } else if (state == 4){
      image(gameover, 0, 0);
    }
  } else{
    counter++;
    if(counter == 30){
      state = nextState;
      counter = 0;
    }
    let x = map(counter, 0, 30, 0, 255);
    tint(255, x);
    if(nextState == 0){
      text("", 0,10, width, 30);
    } else if (nextState == 1){
      image(winter, 0, 0);
    } else if (nextState == 2){
      image(wolf, 0, 0);
    } else if (nextState == 3){
      image(forest, 0, 0);
    } else if (nextState == 4){
      image(gameover, 0, 0);
    }

    tint(255, 255-x);

    if(state == 0){
      text("", 0,10, width, 30);
    } else if (state == 1){
      image(winter, 0, 0);

    } else if (state == 2){
      image(wolf, 0, 0);

    } else if (state == 3){
      image(forest, 0, 0);

    } else if (state == 4){
      image(gameover, 0, 0);
    }
  }
  text(typed, 0, displayHeight - 30, width, 30);
}

function keyPressed(){
  if(keyCode == BACKSPACE){
    typed = '';
  }
}


function keyTyped(){
  if(key == '0'){
    nextState = 0;
  } else if (key == '1'){
    nextState = 1;
  } else if (key == '2'){
    nextState = 2;
  } else if (key == '3'){
    nextState = 3;
  } else if (key == '4'){
    nextState = 4;
  } else if (keyCode == RETURN){
      if(typed == 'start'){
        nextState = 1;
        typed = '';
      } else if (typed == 'eat'){
        nextState = 2;
        typed = '';
      } else if (typed == 'intro'){
        nextState = 0;
        typed = '';
      } else if (typed == 'cry' && state == 2){
        hasCried = true;
        typed = '';
      }
  } else{
    typed += key;
  }
}
