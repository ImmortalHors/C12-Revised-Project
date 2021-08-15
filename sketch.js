var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaves, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png")
  leavesImg = loadImage ("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x = World.mouseX
if(rabbit.x < 60)
  {
    rabbit.x= 60;
  }
    
  if(rabbit.x > 340)
  {
    rabbit.x = 340;
  }
  
  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 == 0){
    if (select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }

  drawSprites();
  
  
}

function createApples() {
  apple = createSprite(random(5,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.1
  apple.velocityY = 3
  apple.lifetime =  250

}

function createLeaves(){
  leaves = createSprite(random(5,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.scale = 0.1
  leaves.velocityY = 3
  leaves.lifetime = 250
}
