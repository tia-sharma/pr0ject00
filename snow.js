class Snow{
    constructor(x,y,w,h){
        var options={
            restitution:0.4
        }
    

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        image(this.image, this.body.position.x, this.body.position.y);
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        pop();
    }
}