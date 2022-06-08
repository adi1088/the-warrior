var form , story;
var gameState =0;
var lake, lakeImg;
var player,playerFront,playerBack,playerLeft,playerRight;
var player_front,player_back,player_left,player_right;
var stage1, stage2 ,stage3;
var stage1Img, stage2Img, stage3Img;
var introMusic ;
var Shooter1;
var Shooter2;
var Shooter3;
var shooterImg,shooterImg2,shooterImg3;
var spawnStars,starsImg;
var gameOverImg;
var canvas
// for adding the required images and animation
function preload(){
  // backImage=loadImage("jungle.jpg");
  stage1Img=loadImage("images/Stage_1.png");
  stage2Img=loadImage("images/Stage_2.png");
  stage3Img=loadImage("images/Stage_3.jpg");
  playerFront=loadAnimation("images/front_1.png");
  playerBack=loadAnimation("images/back_1.png");
  playerLeft=loadAnimation("images/left_1.png");
  playerRight=loadAnimation("images/right_1.png");
  player_front=loadAnimation("images/front_2.png","images/front_3.png");
  player_back=loadAnimation("images/back_2.png","images/back_3.png");
  player_left=loadAnimation("images/left_2.png","images/left_3.png");
  player_right=loadAnimation("images/right_2.png","images/right_3.png");
  introMusic=loadSound("sounds/Intro_Music.mp3");
  shooterImg=loadAnimation("images/star_1.png","images/star_2.png","images/star_3.png","images/star_4.png")
  shooterImg2=loadAnimation("images/star_1.png","images/star_2.png","images/star_3.png","images/star_4.png")
  shooterImg3=loadAnimation("images/star_1.png","images/star_2.png","images/star_3.png","images/star_4.png")
  starsImg = loadAnimation("images/Nstar_0.png","images/Nstar_1.png","images/Nstar_2.png","images/Nstar_3.png")
  gameOverImg = loadImage("images/GameOver.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth-9,displayHeight*2);
  // player.addAnimation("front",player_front);
  // player.addAnimation("back", )
  
  player=createSprite(700,1300);
  player.addAnimation("front",player_front);
  player.addAnimation("frontS",playerFront);
  player.addAnimation("back",player_back);
  player.addAnimation("backS",playerBack);
  player.addAnimation("right",player_right);
  player.addAnimation("rightS",playerRight);
  player.addAnimation("left",player_left);
  player.addAnimation("leftS",playerLeft);
  player.depth = player.depth +1 ;
  camera.position.x = displayWidth/2;
  camera.position.y = player.y/2;
 
starsGroup = new Group();

 game = new Game();
 game.start();
 gameState=0;
 
}

function draw() { 
  
 
  if(gameState===1 || gameState===2 || gameState===6){
 
    game.play();
   
  }
  


  drawSprites();
}

