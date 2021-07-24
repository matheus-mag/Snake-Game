let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} 
let move = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

document.addEventListener('click',startGame);
document.addEventListener('keydown', updateMoviment);

function updateMoviment(event){
    if(event.keyCode == 65 && move != "right") move = "left";
    if(event.keyCode == 87 && move != "down") move = "up";
    if(event.keyCode == 68 && move != "left") move = "right";
    if(event.keyCode == 83 && move != "up") move = "down";

}

function food(){
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, box, box);
}

function calcFood(){
    comida.x = Math.floor(Math.random() * 15 + 1) * box;
    comida.y = Math.floor(Math.random() * 15 + 1) * box;
    for(i = 0;i<snake.length;i++){
        if(comida.x == snake[i].x && comida.y == snake[i].y){
            calcFood();
        }
    }
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && move == "right") snake[0].x = 0;
    if(snake[0].x < 0 && move == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && move == "down") snake[0].y = 0;
    if(snake[0].y < 0 && move == "up") snake[0].y = 16 * box;

    for(i =1;i<snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over x-x");
        }
    }


    backGround();
    cobrinha();
    food();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(move == "right") snakeX += box;
    if(move == "left") snakeX -= box;
    if(move == "up") snakeY -= box;
    if(move == "down") snakeY += box;

    if(snakeX != comida.x || snakeY != comida.y){
        snake.pop();
    }
    else{
        calcFood();
            
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

backGround();

function startGame(){
    document.getElementById("botao").remove();
    document.getElementById("titulo").remove();
    document.getElementById("controles").remove();
}
let jogo = setInterval(iniciarJogo, 120);