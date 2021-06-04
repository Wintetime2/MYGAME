class BaseClass{
    constructor(x, y, rdi) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.2,
            'isStatic':false
            
        }
        this.body = Bodies.circle(x, y, rdi, options);
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 47 , 47 );
        pop();
      }
}