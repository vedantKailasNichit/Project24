class Iron{
  constructor(x, y, w, h){
    var options={
      friction:3,
      restitution:0.8,
      density: 30
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    fill("brown")
    rotate(angle);
    rectMode(CENTER)
    strokeWeight(3);
    stroke("Black");
    rect(0, 0, this.w, this.h);
    pop();
  }
}