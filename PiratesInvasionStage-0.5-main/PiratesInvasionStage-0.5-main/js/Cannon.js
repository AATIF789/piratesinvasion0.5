class Cannon{
    constructor(x,y,width,height,angle){
        this.width=width
        this.height=height
        this.angle=angle
        this.x=x
        this.y=y
    }
    display(){
        fill("grey")
        push()

        translate(this.x,this.y)
        rotate(this.angle)
        rect(-10,30,this.width,this.height)
        pop()
        arc(this.x-40,this.y+40,180,230,PI,TWO_PI)
        
    }
}
