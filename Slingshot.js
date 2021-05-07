class Slingshot
{
    constructor(bodyA,pointB)
    {
        var Property = 
        {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': .04,
            'length': 10
        }

        this.pointB = pointB
        this.sling = Matter.Constraint.create(Property)
        World.add(world,this.sling)
    }

    attach(body)
    {
        this.sling.bodyA = body
    }

    fly()
    {
        this.sling.bodyA = null
    }

    display()
    {
        if(this.sling.bodyA)
        {
            var A_pos = this.sling.bodyA.position
            var pointB_pos = this.pointB
            push()
                strokeWeight(4)
                line(A_pos.x,A_pos.y,pointB_pos.x,pointB_pos.y)
            pop()
        }
    }
}