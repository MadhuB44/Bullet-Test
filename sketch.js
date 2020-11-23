var bullet, wall,wall2

var speed, weight;
var space
var thickness
var gun1

function preLoad() {
  
}

function setup() 
{
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255)

  space=createSprite(700,700)

  wall=createSprite(1200,200,thickness,height)
  wall.shapeColor=color(80,80,80)

  wall2=createSprite(800,200,5,height)
  wall2.shapeColor=color(80,80,80)

  wall2=createSprite(800,200,5,20)
  wall2.shapeColor=color(80,80,80)

  gun1=createSprite(50,230,20,70)
  gun1.shapeColor=("gray")

  gun2=createSprite(80,200,70,20)
  gun2.shapeColor=("gray")

  gun3=createSprite(70,228,20,5)
  gun3.shapeColor=("gray")

  gun4=createSprite(80,220,5,20)
  gun4.shapeColor=("gray")
}


function draw() {
  background(0);  

  
  text("hi")
if(wall.x-bullet.x<(bullet.height+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509

    if(deformation>180)
    { wall.shapeColor=color(255,0,0)
      wall2.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {wall.shapeColor=color(230,230,0)
      wall2.shapeColor=color(230,230,0)
    }

    if(deformation<100)
    {wall.shapeColor=color(0,255,0)
      wall2.shapeColor=color(0,255,0)
    }

    
  }
  

  drawSprites();
}