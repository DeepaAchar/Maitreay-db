var ball,database,position;

function setup(){
    createCanvas(500,500);

    database=firebase.database();

    var ballPosition=database.ref("Ball/Position");
    ballPosition.on('value', readdb);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writedb(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writedb(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writedb(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writedb(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readdb(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function writedb(x,y){
    var ballPosition=database.ref("Ball/Position");
    ballPosition.set({
        'x':position.x+x,
        'y':position.y+y
    })
}
