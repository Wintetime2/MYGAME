const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var cons;

function setup() {
    var canvas = createCanvas(1700,600);
    engine = Engine.create();
    world = engine.world;

    mousefollower = new Ground(mouseX, mouseY, 10, 10);

    // ground = new Ground(600, 570, 1200, 20);
    player = new Box(200, 100, 20);
    basePlank = new Ground(200, 150, 100, 20);
    plank = new Ground (500, 70, 100, 20)
    cons = new SlingShot(player.body, {x:450, y:100});
    test = new Box(200, 100, 20);
    // form = new Form();
}


function draw() {
    background("black");
    Engine.update(engine);

    // ground.display();
    player.display();
    basePlank.display();
    plank.display();
    cons.display();
    test.display();
    // form.display();

    drawSprites();
}



function mouseReleased(){
   cons.fly();
}



function keyPressed(){
    if(keyCode === 47){
        player.body = player.body.position.x - 3
    }
}

