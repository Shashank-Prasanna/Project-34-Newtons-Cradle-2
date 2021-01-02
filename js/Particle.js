class Particle {
	constructor() {
		var options = {
			density: 0.5,
			restitution: 0.6,
		};

		this.body = Bodies.circle(random(50, 450), 5, 5, options);
		this.color = color(random(100, 255), random(100, 255), random(100, 255));
		World.add(world, this.body);
	}

	display() {
		var pos = this.body.position;

		push();
		translate(pos.x, pos.y);
		ellipseMode(CENTER);
		fill(this.color);
		ellipse(0, 0, 10, 10);
		pop();
	}
}
