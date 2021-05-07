const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Render = Matter.Render

var dustbinObj,groundObject;
var world;
var ball;
var engine;
var slingshot;

function setup()
{
	createCanvas(1600, 700)
	rectMode(CENTER)

	engine = Engine.create()
	world = engine.world
    
	
	groundObject = new ground(width/2,670,width,20)
	dustbinObj = new dustbin(1200,650)

	ball = new Ball(1200,200,75)
    slingshot = new Slingshot(ball.body,{x:1200,y:200})

	Engine.run(engine)
}


function draw()
{
	rectMode(CENTER)
	background(230)

	groundObject.display()
	dustbinObj.display()
	ball.display()
    slingshot.display()
   
    Engine.update(engine)
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    slingshot.fly()
}

function keyPressed()
{
    if(keyCode == 32 && slingshot.sling.bodyA == null)
    {
        Matter.Body.setPosition(ball.body,{x: 1200,y:200})
        slingshot.attach(ball.body)
    }
}
