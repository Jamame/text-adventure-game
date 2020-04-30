let rabbit;
let winter;
let wolf;
let forest;
let gameover;
let win;
let typed = "";
let nextState = 0;
let state = 0;
let counter = 0;
let hide = false;
let timer = 15;
let hasDiedWolf = false;


function preload(){
  rabbit = loadImage("rabbit.jpg");
  winter = loadImage("winter.jpg");
  wolf = loadImage("wolf.gif");
  forest = loadImage("forest.jpg");
  gameover = loadImage("game-over.gif");
  win = loadImage("win.png");
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
      text("Type 'start' then press enter to begin!", 0,50, width, 30);

    } else if (state == 1){
      image(winter, 0, 0);
      text("You appear in a land covered by snow.", 0,10, width, 30);
      text("You see a trail of footprints not much bigger than yours.", 0,38, width, 30);
      text("Do you follow the trail or wander around? (type 'follow' or 'wander')", 0,62, width, 30);

    } else if (state == 2){
      image(wolf, 0, 90);
      text("While you wander around, you encounter a wolf!", 0,10, width, 30);
      text("Do you try to hide or outrun it? (type 'hide' or 'outrun')", 0,38, width, 30);
      if(state == 2 && hasDiedWolf == false){
        choiceTimer();
        if (hasDiedWolf == true){
          nextState = 5;
          typed = '';
        }
      }

    } else if (state == 3){
      image(forest, 0, 0);
      if(hide){
        text("You hide from the wolf successfully, a little bit shaken.", 0,10, width, 30);
      }
      text("You wander for hours, until you find a lush forest.", 0,38, width, 30);
      text("You find some beautiful purple and white plants. Do you eat the plants or the boring grass under your feet?", 0,62, width, 30);
      text("(type 'plants' or 'grass')", 0, 90, width, 30);

    } else if (state == 4){
      image(gameover, 0, 0);
      text("The wolf catches up to you and eats you for dinner. :( " , 0,10, width, 30);

    } else if (state == 5){
      image(gameover, 0, 0);
      text("You hesitate to make a decision, and the wolf eats you for dinner. :( " , 0,10, width, 30);

    } else if (state == 6){
      image(gameover, 0, 0);
      text("The plants look delicious, however, they are poisonous! You die of a tummy ache. :( " , 0,10, width, 30);
    } else if (state == 7){
      image(win, 0, 0);
      text("You eat the grass, and live through a day in the life of a rabbit, you win!" , 0,10, width, 30);
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
      image(rabbit, 0, 90);
    } else if (nextState == 1){
      image(winter, 0, 0);
    } else if (nextState == 2){
      image(wolf, 0, 0);
    } else if (nextState == 3){
      image(forest, 0, 0);
    } else if (nextState == 4){
      image(gameover, 0, 0);
    } else if (nextState == 5){
      image(gameover, 0, 0);
      text("You hesitate to make a decision, and the wolf eats you for dinner. :( " , 0,10, width, 30);
    } else if (nextState == 6){
      image(gameover, 0, 0);
      text("The plants look delicious, however, they are poisonous! You die of a tummy ache. :( " , 0,10, width, 30);
    } else if (nextState == 7){
      image(win, 0, 0);
      text("You eat the grass, and live through a day in the life of a rabbit, you win!" , 0,10, width, 30);
    }

    tint(255, 255-x);

    if(state == 0){
      image(rabbit, 0, 90);
    } else if (state == 1){
      image(winter, 0, 0);

    } else if (state == 2){
      image(wolf, 0, 0);

    } else if (state == 3){
      image(forest, 0, 0);

    } else if (state == 4){
      image(gameover, 0, 0);

    } else if (state == 5){
      image(gameover, 0, 0);
      text("You hesitate to make a decision, and the wolf eats you for dinner. :( " , 0,10, width, 30);

    } else if (state == 6){
      image(gameover, 0, 0);
      text("The plants look delicious, however, they are poisonous! You die of a tummy ache. :( " , 0,10, width, 30);
    } else if (state == 7){
      image(win, 0, 0);
      text("You eat the grass, and live through a day in the life of a rabbit, you win!" , 0,10, width, 30);
    }
  }
  text(typed, 0, displayHeight - 30, width, 30);
}

function choiceTimer(){
  if (frameCount % 60 === 0 && timer > 0) {
    timer --;
   }

  if (timer === 0){
    hasDiedWolf = true;
    timer = 20;
  }

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
      } else if (typed == 'wander'){
        nextState = 3;
        typed = '';
      } else if (typed == 'follow'){
        nextState = 2;
        typed = '';
      } else if (typed == 'hide'){
        nextState = 3;
        typed = '';
        hide = true;
      } else if (typed == 'outrun'){
        nextState = 4;
        typed = '';
      } else if (typed == 'plants'){
        nextState = 6;
        typed = '';
      } else if (typed == 'grass'){
        nextState = 7;
        typed = '';
      }
  } else{
    typed += key;
  }
}
