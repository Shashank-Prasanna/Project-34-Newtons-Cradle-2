const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball2, ball3, ball4, ball5;
var roof;
var chain1, chain2, chain3, chain4, chain5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(400, 350);
	ball2 = new Ball(460, 350);
	ball3 = new Ball(520, 350);
	ball4 = new Ball(340, 350);
	ball5 = new Ball(280, 350);

	roof = new Roof(400, 100, 500, 30);

	chain1 = new Chain(ball1.body, roof.body, 0, 0);
	chain2 = new Chain(ball2.body, roof.body, 66, 0);
	chain3 = new Chain(ball3.body, roof.body, 132, 0);
	chain4 = new Chain(ball4.body, roof.body, -66, 0);
	chain5 = new Chain(ball5.body, roof.body, -132, 0);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(100);

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	roof.display();

	drawSprites();
}

function mouseDragged() {
	Body.setPosition(ball5.body, {x: mouseX, y: mouseY});
}
