class Cannon{
    constructor(x,y,width,height,angle){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.angle = angle;

    }

    display(){
        fill("gray");
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20, this.width,this.height);
        pop();
        arc(this.x-30,this.y+90,150,200,PI,0);
        noFill();
        

    }
}