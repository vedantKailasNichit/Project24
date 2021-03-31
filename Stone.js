class Stone{
  constructor(x, y, w, h){
    var options={
      friction:0.9,
      restitution:0.8,
      density: 12
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
    fill("black")
    rotate(angle);
    rectMode(CENTER)
    strokeWeight(3);
    stroke(179);
    rect(0, 0, this.w, this.h);
    pop();
  }
}