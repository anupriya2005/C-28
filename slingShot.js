class slingShot{
    constructor(bodyA, pointB){
        console.log("i'm here........");
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}