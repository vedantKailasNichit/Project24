class Rubber{
	constructor(x, y, r){
		var options={
			friction: 5,
			restitution:0.3,
			density: 1
		  }
		  this.body = Bodies.circle(x, y, r,options);
		  this.r = r;
		  World.add(world, this.body);
	}
  
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  fill("blue")
	  rotate(angle);
	  rectMode(CENTER)
	  strokeWeight(4);
	  stroke("black");
	  ellipse(0, 0, this.r*2);
	  pop();
	}
  }