var boy, boy_running, running
var path, invisiblepath1, invisiblepath2
function preload(){
  //pre-load images
}

function setup(){
    createCanvas(400,400);
    //create sprites here
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY=4;
    path.scale=1.2;
  invisiblepath1=createSprite(0,400)
  invisiblepath1.visible=false
  invisiblepath2=createSprite(400,0)
  invisiblepath2.visible=false

    boy = createSprite(50,160,20,50);
      boy.addAnimation("running", boy_running);
      boy.scale = 1.5;
  }

function draw() {
    background(0);

    if(path.y > 400){
      path.y = height/2;
      boy.collide(invisiblepath1);
      boy.collide(invisiblepath2);
    function mousePressed(boy){
      
    }
      drawSprites();
    }
  

