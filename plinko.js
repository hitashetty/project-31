class plinko {
    constructor(x,y,r){
      var options = {
      'density' : 1
      }
      this.body = Bodies.circle(x,y,r,options)
      this.r= r;
      r= 10;
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop(); 
    }
}