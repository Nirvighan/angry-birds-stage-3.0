//create the chain class
class Chain 
{
     
//create the constructor function

    constructor(bodyA,bodyB)
    {

    var options = 
    {
        //give options for the constraint
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.01,
        length:10

    }

    //create the constraint
this.chain = Constraint.create(options);
World.add(world,this.chain);


    }

//create the display function

display()
{
//name space bodyA and bodyB position
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
//make the constraint visible
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);



}












};