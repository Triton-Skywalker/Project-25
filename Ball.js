class Ball{
	constructor(x,y,radius)
	{
		var property = 
		{
			'isStatic': false,
			'restitution': 1

		}
		this.x = x
		this.y = y
		this.radius = radius
		this.body = Matter.Bodies.circle(this.x,this.y,this.radius,property)
        World.add(world,this.body)
		this.color = 'red'
		
	}

    
	display()
	{
        
		
		var Ball_Pos = this.body.position
		push()
			translate(Ball_Pos.x,Ball_Pos.y)
			fill(this.color)
			circle(0,0,this.radius)
		pop()
	}
}
