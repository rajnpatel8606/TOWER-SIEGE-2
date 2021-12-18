class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //this.body = Bodies.rectangle(x,y,width,height,options);
      //this.width = width;
      //this.height = height;
      this.ground=Bodies.rectangle(450,390,900,20,options)
      World.add(world, this.ground);
    }
    display(){
      //var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };
