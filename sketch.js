
var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, Food, Ob;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(60,300,20,20);
 monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.12;
  
  ground = createSprite(200,340,400,5);
    ground.velocityX = -5;
ground.x = ground.width / 2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}


function draw() {
background("white");
    
  drawSprites();
  Food();
  Ob();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/ frameRate());
  text("Survival Time: "+survivalTime,200,50);
  
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  //gravity
  monkey.velocityY = monkey.velocityY + 1;
  
  if(ground.x < 200){
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);
  
}

function Food(){
 if(World.frameCount % 80 === 0){
 banana = createSprite(400,150,20,20);
  banana.addImage("food",bananaImage);
  banana.scale = 0.09;
   banana.y = Math.round(random(120,200));
   banana.lifetime = 100;
   banana.velocityX = -8;
   
   FoodGroup.add(banana);
  }
}


function Ob(){
  if(World.frameCount % 300 === 0){
obstacle = createSprite(400,307,20,20);
  obstacle.addImage("over",obstacleImage);
    obstacle.scale = 0.17;
  obstacle.velocityX = -8;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}