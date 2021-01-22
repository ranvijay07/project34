const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var world,engine;
var hero,ground;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
var b14;
var b15;
var b16;
var b17;
var b18;
var b19;
var b20;

var monster;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine=Engine.create()
  world=engine.world
  
  hero=new Hero(200,200,40)
  ground=new Ground(1500,400,3000,20)



  b1=new Box(900,100,50,50)
  b2=new Box(900,100,50,50)
  b3=new Box(900,100,50,50)
  b4=new Box(900,100,50,50)
  b5=new Box(900,100,50,50)
  b6=new Box(900,100,50,50)

  b7=new Box(800,100,50,50)
  b8=new Box(800,100,50,50)
  b9=new Box(800,100,50,50)
  b10=new Box(800,100,50,50)
  b11=new Box(800,100,50,50)
  b12=new Box(800,100,50,50)

  b13=new Box(700,100,50,50)
  b14=new Box(700,100,50,50)
  b15=new Box(700,100,50,50)
  b16=new Box(700,100,50,50)
  b17=new Box(700,100,50,50)
  b18=new Box(700,100,50,50)
  b19=new Box(700,100,50,50)
  b20=new Box(700,100,50,50)

  monster=new Monster(900,150,50,50)

}

function draw() {
  background(0);
  Engine.update(engine);
  
  hero.display();
  ground.display();

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()

  monster.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}