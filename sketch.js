const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Suelo;
var pig1;
var pig2;
var log1;
var log2;
var  box2;
var box3;
var box4;
var log3;
var box5;
var log3;
var log4;
var baseclase;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,300,50,50);
    Suelo=new suelo(600,height,1200,30);
    box2 = new Box(940,300,50,100);
    pig1=new puerquitos (870,300,50,50);
    log1=new palitroquez (869,240,190,PI/2);
    box3=new Box (800,190,50,50);
    box4=new Box (940,190,50,50);
    pig2=new puerquitos (870,190,50,50);
    log2=new palitroquez (870,100,190,PI/2);
    box5=new Box (870,50,50,50);
    log3=new palitroquez (810,50,100,PI/7);
    log4=new palitroquez (920,50,100,-PI/7);

    //ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    Suelo.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    //ground.display();
} 