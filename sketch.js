const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;

var img, e1,e2,e3;

var safety1,safety2,safety3,safety4;

var  med1,med2;

var home1,home2,home3;

var mg,e1x,e1y,img2;
var PLAY=1;
var END=0
var gs=PLAY;


function preload(){

 img=loadImage("sprites/bg1.jpg");
 mgI=loadImage("sprites/mg.png");
 img2= loadImage("sprites/bg2.jpg");
}

function setup(){

createCanvas(1000,400);

engine=Engine.create();

world = engine.world;

mg = createSprite(75,150,10,40);
mg.addImage(mgI);
mg.scale=0.20;

//image1 = image(img,600,200,2000,1200);

e1 = new Edu(200,200)
e1x=e1.body.position.x;
e1y=e1.body.position.y;
e2 = new Edu(400,100)
e3 = new Edu(800,150)

safety1 = new Safety(900,100)
safety2 = new Safety(100,350)
safety3 = new Safety(200,100)
safety4 = new Safety(700,300)

med1 = new Med(900,350)
med2 = new Med(500,200)

home1 = new Home(70,250)
home2 = new Home(750,50)
home3 = new Home(40,40)

}

function draw(){
if(gs === PLAY){
    background(img);
}

drawSprites();
Engine.update(engine);
e1.display();
console.log(mg.x);
e2.display();
e3.display();
safety1.display();
safety2.display();
safety3.display();
safety4.display();
med1.display();
med2.display();
home1.display();
home2.display();
home3.display();
//touching();
if(mg.x===175){
    background("white");
background(img2);
gs=END;
}
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
  
      mg.x=mg.x-20;    
  
    } else if (keyCode === RIGHT_ARROW) {
      mg.x=mg.x+20; 
    }
    else if (keyCode === DOWN_ARROW) {
       mg.y=mg.y+5;
    }
    else if (keyCode === UP_ARROW){
        mg.y=mg.y-5;
    }
  }

 /* function touching(){
      if(mg.isTouching(e1)){
        e1.visible=false;
      }
  }*/