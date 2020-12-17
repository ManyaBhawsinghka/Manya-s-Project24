
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var paper, ground;
var bin1 , bin2 , bin3;

function setup() {
	var canvas = createCanvas(1200, 500);

 	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,200,60/2);
	ground = new Ground(600,height,1200,20);
	bin1 = new Dustbin(1020,483,120,15);
	bin2 = new Dustbin(960,455,15,60);
	bin3 = new Dustbin(1080,455,15,60);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body , paper.body.position , {x : 40 , y : -10} );
	}
}



