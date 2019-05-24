class Food
{
    constructor(x_position,y_position)
    {
        this.x = x_position;
        this.y = y_position;
    }
    spawnatInSnake()
    {
        for(var index = 0; index < snake_body.length; index++)
        {
            if(this.x < snake_body[index].x + 30 && this.x + 30 > snake_body[index].x)
            {
                if(this.y < snake_body[index].y + 30 && this.y + 30 > snake_body[index].y){
                    return true;
                }
            }
        }
        return false;
    }
    deseneazaMancare()
    {
        ctx.drawImage(gift_texture,this.x,this.y,latura_mancare,latura_mancare);
    }
    schimbaPozitie()
    {
        this.x = Math.floor(Math.random() * 400) + 10;
        this.y = Math.floor(Math.random() * 400) + 10;
        if(this.spawnatInSnake())
        {
            this.schimbaPozitie();
        }
    }
}