
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine;
var paper, dustbin, ground;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper  = new Paper(200,450,40);
	dustbin = new Dustbin(1200, 650);
	ground = new Ground(width/2, 670, width, 20);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


