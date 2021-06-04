class lava{
    constructor(x, y, width, height){
        var options={
            stiffness:-1,
            density:3,
        }
        this.body = Bodies.rectangle(x,y,width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
}