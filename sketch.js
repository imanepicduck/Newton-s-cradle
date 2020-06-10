const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof; 
var  bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var rope1, rope2, rope3,rope4, rope5; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  background(0);
  rope1= new Rope (bobObject1.body,roof.body,-bobDiameter*2, 0)
  rope2= new Rope (bobObject2.body,roof.body,-bobDiameter*2, 0)
  rope3= new Rope (bobObject3.body,roof.body,-bobDiameter*2, 0)
  rope4= new Rope (bobObject4.body,roof.body,-bobDiameter*2, 0)
  rope5= new Rope (bobObject5.body,roof.body,-bobDiameter*2, 0)
  
  roof.display(); 
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 
  bobObject1.display(); 
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display(); 
  keyUp(); 
}

function keyUp() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.setStatic(bobObject1,false);
	   bobObject1.isTouching(bobObject2); 
	   Matter.Body.setStatic(bobObject2,false);
	   bobObject2.isTouching(bobObject3); 
	   Matter.Body.setStatic(bobObject3,false);
	   bobObject3.isTouching(bobObject4); 
	   Matter.Body.setStatic(bobObject4,false);
	   bobObject4.isTouching(bobObject5); 
   }
   }
   

