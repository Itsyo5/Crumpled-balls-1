class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
		}
		this.xPos=x;
		this.yPos=y;
		this.width=w;
        this.height=h;
        
		this.body=Bodies.rectangle(this.xPos, this.yPos, this.width, this.height , options);
 		World.add(world, this.body);

	}
	display()
	{
		var groundPos=this.body.position;		
		push();
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		strokeWeight(4);
		fill(255,255,0);
		rect(0,0,this.width, this.height);
		pop();	
	}

};  