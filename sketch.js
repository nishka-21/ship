var sea, seaImg
var ship, shipImg1

function preload(){
seaImg=loadImage("sea.png");
ship_Img1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage(seaImg);
  sea.scale=0.25
  sea.velocityX=-5;
  ship=createSprite(200,200);
  ship.addAnimation("Img",ship_Img1);
  ship.scale=0.3
 
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  drawSprites();
}
