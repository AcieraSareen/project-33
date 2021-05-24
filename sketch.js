var backgroundImg;
//var sound;
var snow = [];



function preload(){
  backgroundImg = loadImage("snow3.jpg");
	//sound = loadSound("JoyMusic.mp3");
}


function setup() {
//sound.play();

  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(backgroundImg);

   //create snow
   for (var j = 90; j <=width-10; j=j+90) { 
    snow.push(new snow(j,90));
   }


 


    //display the snow
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }

  drawSprites();
}