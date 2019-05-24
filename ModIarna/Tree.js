class Tree
{
    constructor(x_position,y_position,dimensiune){
        this.x = x_position;
        this.y = y_position;
        this.dimensiune = dimensiune;
    }
     deseneazaCopac(){
         ctx.drawImage(brad_texture,this.x,this.y,this.dimensiune,this.dimensiune);
     }
     schimbarePozitie(){
        this.x = Math.floor(Math.random() * 400) + 1;
        this.y = Math.floor(Math.random() * 400) + 1;
     }
}