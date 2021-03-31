const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, rubber, iron, stone, ball1, ball2, ball3, ball4, ball5, ball6;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,50)
    hammer = new Hammer(250,400,100,30);
    rubber  = new Rubber(300,400,30);
    iron = new Iron(350, 400, 70,50);
    stone = new Stone(400,400,80,80);
    ball1 = new Rubber(450,400,5);
    ball2 = new Rubber(470,400,5);
    ball3 = new Rubber(490,400,5);
    ball4 = new Rubber(510,400,5);
    ball5 = new Rubber(530,400,5);
    ball6 = new Rubber(550,400,5);
    Engine.run(engine);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display(); 
    iron.display();
    stone.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
}