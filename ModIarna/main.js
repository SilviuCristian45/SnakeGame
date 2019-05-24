//executes when the page load
var speed = 0.2;
var fulgi = [{x:40,y:20,v:2} , {x:120,y:20,v:4},  {x:170,y:20,v:3},  {x:220,y:20,v:5},  {x:300,y:20,v:1},  {x:390,y:20,v:3} , {x:430,y:20,v:2}];
//snake_body[0] - capul sarpelui 
var snake_body = [{x:40 , y:40},{x:80,y:40},{x:120,y:40},{x:160,y:40},{x:200,y:40}];
var snake;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var direction = "";
var score = 0;
var time = 0;
var mancare= new Food(400,400);
var fulg = new Flake();
var brad = new Tree(300,300,50);
var latura_mancare = 60;
var speed_spawning_flakes = 0.5;
const gift_texture = new Image();
gift_texture.src = "gift.png";
const fulg_texture = new Image();
fulg_texture.src = "fulg.png";
const brad_texture = new Image();
brad_texture.src = "brad.png";
var isForm_created = false;
var c = false;//presupunem ca in frame-ul curent nu a fost apasata vreo tasta 
window.onload = function()
{
    document.addEventListener("keydown", keyDownHandler, false);
    snake = new Snake(20,20);
    //setInterval(update,80);
    update();
}
function update(){
    time++;
    if(time % 5 == 0)
    {
        c = false;//in frame-ul curent nu a fost apasata vreo tasta 
        if(Math.random() > speed_spawning_flakes)
        {
            //setez pozitia noului fulg ( undeva deasupra coltului dreapta sus a canvas-ului)
            var x_new_flake = Math.floor(Math.random() * 770) + 100;
            var y_new_flake =Math.floor(Math.random() * -3) + 5;
            var v_new_flake = Math.floor(Math.random() * 1) + 5;
            fulgi.push({x:x_new_flake,y:y_new_flake,v:v_new_flake});
            if(fulgi[0].x < 0 || fulgi[0].y > canvas.height)//fulg[0] e cel mai inaintat , il scoatem din sir daca nu mai e in cavas
            //ca sa nu consumam memorie degeaba
            fulgi.shift();
        }
        snake.drawSnakeBody();
        fulg.deseneaza_fulgi();
        //fulgii se deplaseaza pe directia diagonala in jos
        fulg.modificare_pozitie();
        if(score % 30 == 0 && score != 0)//cand scorul e multiplu de 30 atunci apare bradul 
        {
            console.log("apare bradul");
            brad.deseneazaCopac();
        }
    }
    requestAnimationFrame(update);//reapelam functia update
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

            var restart = document.createElement("input");
            restart.type = "submit";
            restart.value = "Restart";

            f.appendChild(i1);
            f.appendChild(i2);
            f.appendChild(buton);
            f.appendChild(restart);
            container.appendChild(f);
            document.getElementsByTagName('body')[0].appendChild(container); 
            //location.reload();
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);