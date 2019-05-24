class Food{
    constructor(x_position,y_position)
    {
        this.x = x_position;
        this.y = y_position;
    }
    deseneazaMancare()
    {
        //this.x = Math.floor(Math.random() * 400) + 1;
        //this.y = Math.floor(Math.random() * 400) + 1;
        //ctx.fillStyle = "black";
        //ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,latura_mancare,latura_mancare);
    }
    schimbaPozitie()
    {
        this.x = Math.floor(Math.random() * 400) + 10;
        this.y = Math.floor(Math.random() * 400) + 10;
    }
}