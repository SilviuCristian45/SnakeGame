class Snake
{
    constructor(x_position,y_position)
    {
        this.snake_head_x = x_position;
        this.snake_head_y = y_position;
    }
    modificare_pozitite_snake()
    {
        for(var index = snake_body.length-1; index >= 1; index--){
            snake_body[index].x = snake_body[index-1].x;
            snake_body[index].y = snake_body[index-1].y; 
        }
    }
    coliziune_zid()//a simple bounding box collision
    {
        if(snake_body[0].x < 0 ){
            snake_body[0].x = 500;
        }
        if(snake_body[0].x > canvas.width){
            snake_body[0].x = 0;
        }   
        if(snake_body[0].y < 0){
            snake_body[0].y = 500;
        }
        if(snake_body[0].y > canvas.height){
            snake_body[0].y = 0;
        }
    }
    coliziune_mancare()
    {
        if(mancare.x < snake_body[0].x + 30 && mancare.x + latura_mancare > snake_body[0].x)
           if(mancare.y < snake_body[0].y + 30 && mancare.y + latura_mancare > snake_body[0].y)
              return true;
        return false;
    }
    coliziune_coada()
    {
        var cap = snake_body[0];
        for(var index = 1; index < snake_body.length; index++)
        {
            if(cap.x < snake_body[index].x + 30 && cap.x + 30 > snake_body[index].x)
            {
                if(cap.y < snake_body[index].y + 30 && cap.y + 30 > snake_body[index].y){
                    return true;
                }
            }
        }
        return false;
    }
    miscaSnake()  
    {
        switch (direction) 
        {
            case "LEFT":
                this.modificare_pozitite_snake();
                snake_body[0].x -= 40;
            break;
            case "DOWN":
                this.modificare_pozitite_snake();
                snake_body[0].y += 40;
            break;
            case "UP":
                this.modificare_pozitite_snake();
                snake_body[0].y -= 40;
            break;
            case "RIGHT":
                this.modificare_pozitite_snake();
                snake_body[0].x += 40;
            break;
            default:
                break;
        }
        
    }
    adaugaParteSnake(){
        var new_part_snake = {x:0, y:0};
        var last_index = snake_body.length-1;
        new_part_snake.x = snake_body[last_index].x;
        new_part_snake.y = snake_body[last_index].y;
        snake_body.push(new_part_snake);
    }
    drawSnakeBody()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        //0 index => head ; snake_body.lenght-1 index => last  
        //deseneaza corp sarpe
        for(var index = 1; index < snake_body.length; index++)
        {
            ctx.fillStyle = "white";
            ctx.fillRect(snake_body[index].x,snake_body[index].y,30,30);
            //console.log(snake_body[index].x + " " + snake_body[index].y);
        }
        //afiseaza scor
        ctx.fillStyle = "green";
        ctx.fillRect(snake_body[0].x,snake_body[0].y,30,30);
        ctx.font = "15px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(String(score),10,15);


        if(!this.coliziune_coada()){
        this.coliziune_zid();
        
        this.miscaSnake();
        if(this.coliziune_mancare()){
            console.log(mancare.x + " " + mancare.y);
            mancare.schimbaPozitie();
            this.adaugaParteSnake();
            score += 10;
        }
        mancare.deseneazaMancare();
    }
    else {
        if(!isForm_created)
            {
            afiseaza_Formular_Inscriere_Scor();
            //adauga in DOM asta
            /*
            <form action="config.php">
            <button type="submit"> Apasa </button>
            <input type="text" name="Nume"> </input>
            <input type="text" name="scor"> </input>
            </form>
            */
            isForm_created = true;
            }
        }
    }
    }