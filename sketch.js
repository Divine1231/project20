
function preload() {
    //load the images here
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
bgImage=loadImage("images/garden.png")

mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation ("sleeping",cat1)
cat.scale=0.2
mouse=createSprite(320,680)
mouse.addAnimation ("happy",mouse1)
mouse.scale=0.2
}
function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation(las )
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
