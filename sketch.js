const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var girl, girlG;
var snow = [];

function preload() { 
  bg = loadImage("snow1.jpg");
  girl = loadImage("girl.png");
}
function setup() { 
  createCanvas(800,400);
  girlG = createSprite(400, 200, 50, 50);
  girlG.addImage(girl);
  girlG.scale=0.5;
}

function draw() { 
  background(bg);  
  drawSprites();

  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-30,width/2+30), 10,10));
  }
   
//display the paricles 
for (var j = 0; j<snow.length; j++) {
  snow[j].display();
}
  
}

function key() {
  if(keyCode === 32 ){
    girlG.velocity.x = girlG.velocity.x+2;
  }
}