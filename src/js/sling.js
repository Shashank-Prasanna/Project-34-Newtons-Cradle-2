class Chain {
	constructor(body1, body2, offsetX, offsetY) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.body1 = body1;
		this.body2 = body2;

		var options = {
			bodyA: body1,
			bodyB: body2,
			pointB: {x: this.offsetX, y: this.offsetY},
		};

		this.chain = Matter.Constraint.create(options);
		World.add(world, this.chain);
	}

	display() {
		push();
		strokeWeight(5);
		line(this.body1.position.x, this.body1.position.y, this.body2.position.x + this.offsetX, this.body2.position.y + this.offsetY);
		pop();
	}
}
