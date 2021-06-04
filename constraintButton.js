class Form {

    constructor() {
      this.button = createButton('Click');
    }
  
    display(){      
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      
      this.button.mousePressed(()=>{
        slingShot.attach(player.body);
      });
  
    }
  }
  