class baseclase {
    constructor(x, y,width,hight,angle)
     {
      var options=
      {
        restitution:0.1,
        friction:1,
        
  
      }
      
      this.body = Bodies.rectangle(x, y, width, hight,options );
      this.image=loadImage("bodies/base.png");
      this.width =width;
      this.height= hight;
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
     translate(pos.x,pos.y);
     rotate (angle);
      
     
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("#452B09");
      fill("#B48851");
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };