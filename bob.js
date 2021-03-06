class Bob{
    constructor(x,y,radius){
        var options = {
            restitution : 1.2,
            friction : 1.2,
            density : 0.8,
            slop : 1,
            inertia : Infinity
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x, this.body.position.y);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}