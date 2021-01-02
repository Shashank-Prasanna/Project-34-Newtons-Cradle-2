class Plinko {
	constructor(x, y) {
		var options = {
			isStatic: true,
			density: 0.9,
		};

		this.body = Bodies.circle(x, y, 10, options);
		this.x = x;
		this.y = y;
		World.add(world, this.body);
	}

	display() {
		push();
		translate(this.x, this.y);
		ellipseMode(CENTER);
		ellipse(0, 0, 20);
		pop();
	}
}
