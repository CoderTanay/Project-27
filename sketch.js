const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	bob1=new bob(300,350,50);
	bob2=new bob(350,350,50);
	bob3=new bob(400,350,50);
	bob4=new bob(450,350,50);
	bob5=new bob(500,350,50);

    roof = new Roof(400,100,300,40);
    rope1= new Rope(bob1.body,roof.body,-50*2,0);
    rope2= new Rope(bob2.body,roof.body,-25*2,0);
    rope3= new Rope(bob3.body,roof.body,-0*2,0);
    rope4= new Rope(bob4.body,roof.body,25*2,0);
    rope5= new Rope(bob5.body,roof.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("black");

  rectMode(CENTER);
  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
 

 
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400}); } 
} 




