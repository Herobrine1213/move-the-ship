var sea, ship_moving ;


function preload(){
ship_moving = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png","ship-4.png")
sea = loadImage ("sea.png")
}

function setup(){
  createCanvas(400,400);
  Sea = createSprite(200,180,400,20)
  ship = createSprite(150,290,20,50)
  ship.addAnimation("ship",ship_moving)
  Sea.addImage(sea)
}

function draw() {
  background("blue");
  drawSprites()
  ship.scale=0.2
 Sea.velocityX=-4
 if (Sea.velocityx<0){
Sea.x=Sea.width/8
 }
 console.log(ship.y)
}   