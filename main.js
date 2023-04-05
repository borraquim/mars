canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;
backgroundImage = "mars.jpg";
roverImage ="rover.png";
RoverX = 10;
RoverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag .onload = uploadRover;
    roverImgTag .src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}
function uploadRover() {
    ctx.drawImage(roverImgTag, RoverX, RoverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("cima");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("baixo");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("esquerda");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("direita");
    }
}

function up()
{
    if(RoverY >=0)
    {
        RoverY = RoverY - 10;
        console.log("Quando direcional cima for pressionada, x = " + RoverX + "| y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}


function down()
{
if(RoverY <=500)
    {
        RoverY = RoverY + 10;
        console.log("Quando direcional baixo for pressionada, x = " + RoverX + "| y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}

function left()
{

if(RoverX >= 0)
{
    RoverX = RoverX - 10;
    console.log("quando a seta para esquerda é pressionada, x = " + RoverX + " | y = " +RoverX);
    uploadBackground();
    uploadRover();
}
}

function right()
{
if(RoverX <= 700)
{
    RoverX = RoverX + 10;
    console.log("quando a seta para direit é pressionada, x = " + RoverX + " | y = " +RoverX);
    uploadBackground();
    uploadRover();
}
}