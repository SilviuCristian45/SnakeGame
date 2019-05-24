//executes when the page load
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var speed = 2;
//2 is the head , 1 means a part of the tail
var snake_body = [{x:40 , y:40},{x:80,y:40},{x:120,y:40},{x:160,y:40},{x:200,y:40}];
var snake;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var direction = "";
var score = 0;
var isForm_created = false;
var mancare= new Food(400,400);
var latura_mancare = 20;
var c = false;//presupunem ca in frame-ul curent nu a fost apasata vreo tasta 
window.onload = function()
{
    setTimeout(document.addEventListener("keydown", keyDownHandler, false),1000);
    snake = new Snake(20,20);
    setInterval(update,100);
}
function update(){
    c = false;//in frame-ul curent nu a fost apasata vreo tasta 
    snake.drawSnakeBody();
}
//set the direction of snake
function keyDownHandler(e)
{
    if(e.keyCode == 39 && direction != "LEFT" && direction != "" && c == false) {//daca nu a mai fost apasata vreo tasta in frame-ul respectiv atunci putem apasa alta tasta
        //evitam ca snake-ul sa ia 2 directii diferite in acelasi frame
        direction = "RIGHT";
        c = true;//marcam daca a fost apasata o tasta in frame-ul respectiv
    }
    else if(e.keyCode == 37 && direction != "RIGHT" && c== false) {//left
        direction = "LEFT";
        c = true;
    }
    else if(e.keyCode == 40 && direction != "UP" && c == false){
        direction = "DOWN";
        c = true;
    }
    else if(e.keyCode == 38 && direction != "DOWN" && c == false){
        direction = "UP";
        c = true;
    }
}

function afiseaza_Formular_Inscriere_Scor() {
            var container = document.createElement("div");
            container.setAttribute('class','col-md-4');
            
            var message = document.createElement("div");
            message.setAttribute('class','msg');
            message.textContent = "Game over . If you think that your score is good , submit it and appear in top#10";
        
            container.append(message);
            var f = document.createElement("form");
            f.setAttribute('method',"get");
            f.setAttribute('action',"submit.php");

            var i1 = document.createElement("input");
            i1.type = "text";
            i1.name = "i1";
            
            var i2 = document.createElement("input");
            i2.type = "text";
            i2.name = "i2";
            i2.value = String(score);
            i2.readOnly = true;

            var buton = document.createElement("input");
            buton.type = "submit";
            buton.value = "Submit";

            var f1 = document.createElement("form");
            f1.setAttribute('method',"get");
            f1.setAttribute('action',"restart.php");

            var restart = document.createElement("input");
            restart.type = "submit";
            restart.value = "Restart";

            f.appendChild(i1);
            f.appendChild(i2);
            f.appendChild(buton);
            f1.appendChild(restart);
            container.appendChild(f);
            container.appendChild(f1);
            document.getElementsByTagName('body')[0].appendChild(container); 
            //location.reload();
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);