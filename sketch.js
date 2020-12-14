var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(600, 200, 80, 50);
  movingrect.shapeColor = "blue";
  movingrect.debug = true;
}

function draw() {
  background(0);

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2
    ){
   
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";  

  }

  else{
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
  }

  drawSprites();
}