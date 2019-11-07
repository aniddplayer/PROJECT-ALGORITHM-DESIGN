var fixedrect, movingrect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);

  gameObject1 = createSprite(200, 100, 50, 50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(400, 100, 50, 50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(500, 100, 50, 50);
  gameObject4.shapeColor = "yellow";

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.velocityY = 5;
  movingrect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingrect, fixedrect);
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  

  

  if (isTouching(movingrect, gameObject4)){
    movingrect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else {
    gameObject4.shapeColor = "green";
    movingrect.shapeColor = "green";
   
  }
  drawSprites();
}

