var canvas;
var bgImg;
var background;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

function setup(){
  canvas = createCanvas(1098,732);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function preload(){
  bg = loadImage("background.jpg");
}

function draw(){
  background(bgImg);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
