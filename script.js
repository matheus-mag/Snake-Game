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

document.addEventListener('keydown', updateMoviment);

function updateMoviment(event){
    if(event.keyCode == 37 && move != "right") move = "left";
    if(event.keyCode == 38 && move != "down") move = "up";
    if(event.keyCode == 39 && move != "left") move = "right";
    if(event.keyCode == 40 && move != "up") move = "down";

}

function iniciarJogo(){
    if(snake[0].x > 15 * box && move == "right") snake[0].x = 0;
    if(snake[0].x < 0 && move == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && move == "down") snake[0].y = 0;
    if(snake[0].y < 0 && move == "up") snake[0].y = 16 * box;

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

let jogo = setInterval(iniciarJogo, 150);

