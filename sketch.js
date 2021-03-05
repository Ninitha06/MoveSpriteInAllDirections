
var boy, boyRun, bgImage;
var boundary1, boundary2, boundary3;

var edges;


function preload() {
  boyRun = loadAnimation("images/tile0.png", "images/tile1.png", "images/tile2.png", "images/tile3.png", "images/tile4.png", "images/tile5.png");
  bgImage = loadImage("images/steps_mid.jpg");
}


function setup() {
  createCanvas(1200,550);
  boy = createSprite(200, 400, 20, 20);
  boy.addAnimation("running",boyRun);
  boy.rotateToDirection = true;
  boy.scale = 0.2;
  boy.rotation = 0;
  boy.mirrorX(1);
  boy.mirrorY(1);

  boundary1 = createSprite(150, 230, 300, 10);
  boundary1.visible = false;
  boundary2 = createSprite(410, 195, 220, 10);
  boundary2.rotation = -15;
  boundary2.visible = false;
  boundary3 = createSprite(670, 170, 300, 10);
  boundary3.visible = false;
  boundary4 = createSprite(1010, 170, 370, 10);
  boundary4.rotation = 5;
  boundary4.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  imageMode(CENTER);
  image(bgImage, 600, 275, 1600, 550); 

  boy.collide(boundary1);
  boy.collide(boundary2);
  boy.collide(boundary3);
  boy.collide(boundary4);
  boy.collide(edges[0]);
  boy.collide(edges[1]);


  if (keyDown(LEFT_ARROW)) {
    boy.x = boy.x - 4;
    boy.rotation = 0;
    boy.mirrorX(-1);
   
  }
  if (keyDown(RIGHT_ARROW)) {
    boy.mirrorX(1);
    boy.rotation = 0;
    boy.x = boy.x + 4;
  }
  if (keyDown(UP_ARROW)) {
    if (boy.mirrorX() == -1)
      boy.rotation = 30
    else
      boy.rotation = -30;
    //boy.mirrorX(-1);
    boy.y = boy.y - 4;
  }
  if (keyDown(DOWN_ARROW)) {
    if (boy.mirrorX() == 1)
      boy.rotation = 10
    else
      boy.rotation = -10;
    //boy.mirrorY(1);
    boy.y = boy.y + 4;
  }
  drawSprites();
}