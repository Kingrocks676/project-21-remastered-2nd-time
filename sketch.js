
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1,wall2;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	let ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	   };

	//Create the Bodies Here.
	ground = new Ground(500,450,1000,20);
	wall1 = new Ground(620,400,20,100);
	wall2 = new Ground(850,400,20,100);

	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  wall1.show();
  wall2.show();

  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65});
	}
}

