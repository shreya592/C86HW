var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

block_image_width= 30;
block_image_height= 30;

var player_object= "";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            left:player_x,
            top:player_y 
        })
        canvas.add(player_object);

    });

}


function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            left:player_x,
            top:player_y, 
        })
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed)

if(e.shiftKey==true && keyPressed== "80")
{
    console.log("p and shift pressed togethter")
    block_image_width= block_image_width+10;
    block_image_height= block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

}

if(e.shiftKey && keyPressed== "77")
{
    console.log("m and shift pressed togethter")
    block_image_width= block_image_width-10;
    block_image_height= block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

}


if(keyPressed=="38")
{
    up();
    console.log("up")
    
}

if(keyPressed=="37")
{
   left();
    console.log("left")
    
}

if(keyPressed=="39")
{
    right();
    console.log("right")
    
}

if(keyPressed=="40")
{
    down();
    console.log("down")
    
}

if(keyPressed=="73")
{
    new_image("head.png");
    console.log("i")
    
}

if(keyPressed=="72")
{
    new_image("legs.png");
    console.log("h")
    
}

if(keyPressed=="67")
{
    new_image("shield.png");
    console.log("c")
    
}

if(keyPressed=="83")
{
    new_image("spider-man_body.png");
    console.log("s")
    
}

if(keyPressed=="84")
{
    new_image("hammer.png");
    console.log("t")
    
}

}

function up() 
{
    if(player_y <= 0)
    {
        player_y=player_y-block_image_height;
        console.log("block image heigth= "+block_image_height);
        console.log("when up arrow key is pressed, x="+player_x+" ,y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() 
{
    if(player_y <= 500)
    {
        player_y=player_y+block_image_height;
        console.log("block image heigth= "+block_image_height);
        console.log("when up arrow key is pressed, x="+player_x+" ,y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() 
{
    if(player_x > 0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when up arrow key is pressed, x="+player_x+" ,y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() 
{
    if(player_x <= 850)
    {
        player_x=player_x+block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when up arrow key is pressed, x="+player_x+" ,y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}