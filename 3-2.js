Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype : " +this.width * this.height);
}

console.log(Rectangle.prototype);
rect.getArea();
rect1.getArea(); 
rect2.getArea();
rect3.getArea();