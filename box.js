class Box extends BaseClass {
    constructor(x, y, rdi){
      super(x,y,rdi);
      this.image = loadImage("polygon.png");
    }

    

    
      


    

    display(){
      // console.log(this.velocity.x);

      if(keyIsDown(UP_ARROW)){
        this.x -= 2

      }

        super.display();
     

  
  }
}
