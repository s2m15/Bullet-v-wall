var thickness,wall
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=("white")
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  bullet.velocityX = speed

}

function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/thickness*thickness*thickness
    if(deformation<10) {
      bullet.shapeColor=color(0,204,0)
  }
  else if(deformation >= 10){
    bullet.shapeColor=color(255,0,0)
  }
  }
  drawSprites();
}