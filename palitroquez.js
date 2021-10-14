class palitroquez extends baseclase{
    constructor(x, y,height,angle)
     {
       super(x,y,20,height,angle);
       this.image=loadImage("bodies/wood2");
       Matter.Body.setAngle(this.body,angle);
     }
    }
      