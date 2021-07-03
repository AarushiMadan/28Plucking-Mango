
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObject, stoneObject,groundObject, launcherObject;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9,Mango10,Mango11,Mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObject=new stone(235,420,30); 

	Mango1 =new mango(1100,100,30);
  Mango2 =new mango(1170,130,30);
	Mango3 =new mango(1010,140,30);
	Mango4 =new mango(1000,70,30);
	Mango5 =new mango(1100,70,30);
	Mango6 =new mango(1000,230,30);
	Mango7 =new mango(900,230,25);
	Mango8 =new mango(1140,150,25);
	Mango9 =new mango(1100,230,25);
	Mango10 =new mango(1200,200,25);
	Mango11 =new mango(1120,50,25);
	Mango12 =new mango(900,160,25);

	treeObject=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObject.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  textSize(25);
  fill("black")
  text("Click the Space Bar key to get another chance =)",50 ,50);
  image(boy ,200,340,200,300);
 
  

  treeObject.display();
  stoneObject.display();

  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Mango11.display();
  Mango12.display();

  stoneObject.display();

  groundObject.display();
  launcherObject.display();

  detectollision(stoneObject,Mango1);
  detectollision(stoneObject,Mango2);
  detectollision(stoneObject,Mango3);
  detectollision(stoneObject,Mango4);
  detectollision(stoneObject,Mango5);
  detectollision(stoneObject,Mango6);
  detectollision(stoneObject,Mango7);
  detectollision(stoneObject,Mango8);
  detectollision(stoneObject,Mango9);
  detectollision(stoneObject,Mango10);
  detectollision(stoneObject,Mango11);
  detectollision(stoneObject,Mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObject.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }