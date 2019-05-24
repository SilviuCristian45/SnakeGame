class Flake
{
    deseneaza_fulgi()
    {
        ctx.fillStyle = "white";
        for(var fulg of fulgi)
        {
            ctx.drawImage(fulg_texture,fulg.x,fulg.y,15,15);
        }
    }
    modificare_pozitie()
    {
        fulgi = fulgi.map(val=>({
            x:val.x-val.v,
            y:val.y+val.v,
            v:val.v
        }));
    }
}