class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;

        this.boxBottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.wallThickness , {isStatic:true} );
        World.add(world, this.boxBottomBody);
        
        this.boxLeftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        Body.setAngle(this.boxLeftBody,this.angle);
	    World.add(world, this.boxLeftBody);

        this.boxRightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        Body.setAngle(this.boxRightBody,-1*this.angle);
     	World.add(world, this.boxRightBody);

    }

    display(){
 
        var posBottom = this.boxBottomBody.position;
        var posLeft = this.boxLeftBody.position;
        var posRight = this.boxRightBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
		translate(posRight.x, posRight.y);
		rectMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(255);
		rotate(-1*this.angle);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();  

		push();
		translate(posBottom.x, posBottom.y);
		rectMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(255);
		rect(0,0,this.dustbinWidth, this.wallThickness);
		pop();

    }
};