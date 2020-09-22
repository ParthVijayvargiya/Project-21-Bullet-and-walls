var bullet;
var wall, thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  
  thickness=random(22,83)
  weight=random(30,52);
}

function draw() {
  background(0);  
  drawSprites();

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180) 
    {
      bullet.shapeColor=color(255,0,0);
    }
                                                                              
    if(deformation<180 && deformation>100) 
    {
      bullet.shapeColor=color(230,230,0);
    }

    if(deformation<100) 
    {
      bullet.shapeColor=color(0,255,0);
    }
  }
}