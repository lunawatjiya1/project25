var bottomWall,rightWall,leftWall
var ball
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(100,100,50,50)
	Engine.run(engine);
	bottomWall= new bin(1200,600,200,200)
	//rightWall= new bin(1100,625,10,100)
	//leftWall=new bin(1300,625,10,100)
	ground= Bodies.rectangle(width/2,680,width,10,{isStatic:true})
	World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background("white");
  rect(ground.position.x,ground.position.y,width,10)
  fill(255)
  // rightWall.display()
  //
  //leftWall.display()
  bottomWall.display()
  fill("red")
  paper1.display()
  drawSprites();
 
}
function keyPressed() {
	if ( keyCode=== UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:214,y:-110})
    
    }
}


