var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1Img,car2Img,car3Img,car4Img;
var groundImg;
var trackImg;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
 
  car1Img=loadImage("orangeSportCarImg.png")
  car2Img=loadImage("sportCarImg.png")
  car3Img=loadImage("RedCarImg.png")
  car4Img=loadImage("silverCarImg.png")
  trackImg=loadImage("track.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){

    game.end();
  }


}