class Roof{
    constructor(body1, body2, offsetX, offsetY){
    this.offseteX=offsetX
    this.offsetY=offsetY
        var options = {
        bodyA: body1, 
        bodyB: body2, 
        pointB: {x:this.offsetX, y:this.offsetY}
        }
     this.chain = Constraint.create(options); 
     World.add(world, this.chain); 

  //console.log(options)
  this.rope=Constraint.create(options)
  World.add(world, this.rope)
}
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position; 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
    }

  };