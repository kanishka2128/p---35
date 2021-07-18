var balloon,balloonImage1,balloonImage2;
var database, position
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
var ballonPosition = database.ref('balloon/height');
balloonPosition.on("value",readPosition, showError);

function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    updateHeight(-10,0)
    balloon.x = height.x
    balloon.y = height.y
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    height.x = height.x + 1
    balloon.x = height.x
    balloon.y = height.y
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    height.y = height.y - 1
    balloon.x = height.x
    balloon.y = height.y
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    height.y = height.y + 1
    balloon.x = height.x
    balloon.y = height.y
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y) {
database.ref('balloon/height').set({
  'x' : height.x + x,
  'y' : height.y + y

})
}

function readHeight(data){
height = data.val()
balloon.y = height.y
balloon.x = height.x

}

function showError() {
  console.log("error in writing to the database.")
}

function update() {
  update(height)

}
