const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var slingshot;

var stand1;
var polygon_img
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

var ball;

function setup() {
  createCanvas(2000,550);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(800, 500, 3000, 30);
  stand1=new Ground(390,300,250,10);
  ball=Bodies.circle(50,200,20);
  World.add(world,ball);
  
  polygon_img=loadImage("polygon.png")

block1=new Block(300,275,30,40);
block2=new Block(330,275,30,40);
block3=new Block(360,275,30,40);
block4=new Block(390,275,30,40);
block5=new Block(420,275,30,40);
block6=new Block(450,275,30,40);
block7=new Block(480,275,30,40);
//level 1 done


block8=new Block(330,235,30,40);
block9=new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11=new Block(420,235,30,40);
block12=new Block(450,235,30,40);
//level 2 done

block13=new Block(360,195,30,40);
block14=new Block(390,195,30,40);
block15=new Block(420,195,30,40);
//level 3 done

block16=new Block(390,155,30,40);
//level 4 done

slingshot=new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 ground.display();
 slingshot.display();
 stand1.display();

 fill("pink")
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();

 fill("yellow");
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();

 fill("skyblue")
 block13.display();
 block14.display();
 block15.display();

 fill("chocolate");
 block16.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
 
}
function mouseDragged(){ 
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
  slingshot.fly();

}