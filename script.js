let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} 
let move = "right";

function backGround(){
    context.fillStyle = "navy";
    context.fillRect(0,0, 16*box,16*box);
}

function cobrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle = "greenyellow";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    backGround();
    cobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(move == "right") snakeX += box;
    if(move == "left") snakeX -= box;
    if(move == "up") snakeY -= box;
    if(move == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 125);

