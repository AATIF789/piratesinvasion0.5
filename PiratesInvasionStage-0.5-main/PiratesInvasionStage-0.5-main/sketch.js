const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImage



function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImage=loadImage("./assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(350, 380, 160, 310);
  cannon= new Cannon(380,200,30,80,-PI/4)

}

function draw() {
  background(189);
  image(backgroundImage,0,0,width,height)
  Engine.update(engine);

  ground.display();
  cannon.display();
  tower.display();
  
 
}
