const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var div1, div2, div3, div4, div5, div6, div7;

//Top Row Of Plinkos:
var plinkos = [];
var particles = [];

function setup() {
	createCanvas(520, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Division(260, 790, 520, 25);

	div1 = new Division(0, 740, 20, 350);
	div2 = new Division(80, 740, 20, 350);
	div3 = new Division(170, 740, 20, 350);
	div4 = new Division(260, 740, 20, 350);
	div5 = new Division(350, 740, 20, 350);
	div6 = new Division(440, 740, 20, 350);
	div7 = new Division(520, 740, 20, 350);

	for (var j = 30; j <= width; j += 50) {
		plinkos.push(new Plinko(j, 75));
	}

	for (var i = 5; i <= width - 10; i += 50) {
		plinkos.push(new Plinko(i, 175));
	}

	for (var j = 30; j <= width; j += 50) {
		plinkos.push(new Plinko(j, 275));
	}

	for (var i = 5; i <= width - 10; i += 50) {
		plinkos.push(new Plinko(i, 375));
	}
	console.log(plinkos);
}

function draw() {
	background(0, 0, 0);
	drawSprites();

	if (frameCount % 60 === 0) {
		particles.push(new Particle());
	}

	fill('#FFFFFF');

	div1.display();
	div2.display();
	div3.display();
	div4.display();
	div5.display();
	div6.display();
	div7.display();
	ground.display();

	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}

	for (var i = 0; i < particles.length; i++) {
		particles[i].display();
	}

	Engine.update(engine);
}
