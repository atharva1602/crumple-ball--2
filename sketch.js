 
 var block1, block3, block5, block7, block9, block11, block13, block15;
 var block2, block4, block6, block8, block10, block12, block14, block16;
 var stone;

function setup() {

block1 = new Block();
block2 = new Block();
block3 = new Block();
block4 = new Block();
block5 = new Block();
block6 = new Block();
block7 = new Block();
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(430,235,30,40);
block12 = new Block(450,235,30,40);
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
block16 = new Block(390,150,30,40);
slingshot = new SlingShot(bird.body,{x:200, y:50});
stone = new Stone(200,50);

}
function draw(){
    noStroke();
    textSize(35)
    fill("white")
    text(" drag the stone and relase it,to launch towards blocks " + score, width-300, 50)

 block1.display();
 block3.display();
block5.display();
block7.display();
block9.display();
block11.display();
block13.display();
block15.display();                            
block2.display();
 block4 .display();
block6.display();
block8.display();
block10.display();
block12 .display();
block14 .display();
block16.display();
slingshot.display();

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        stone.trajectory=[];
        Matter.Body.setPosition(stone.body,{x:200,y:50});
       slingshot.attach(stone.body);
    }
} 