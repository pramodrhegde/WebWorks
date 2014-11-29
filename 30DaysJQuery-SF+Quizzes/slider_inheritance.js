/*
 function Slider(target,nav)
 {
   this.target=target;
   this.nav=nav;
   this.imageWidth=target.find('img').width();
   this.imageCount=target.find('img').length;

 };

 Slider.prototype.display=function()
 {
 	console.log(this.target);
 	console.log(this.nav);
 	console.log(this.imageCount);
 	console.log(this.imageWidth);
 }

$(document).ready(function ()
	{
     var target=$('div.slider').css('overflow','hidden').children('ul');
     var nav=$('div.slidernav');

     var sliderObject= new Slider(target,nav);
     sliderObject.display();

	});
 

*/



function Slider(container,nav)
{
	this.target=container;
	this.nav=nav.show();
	this.imageWidth=this.target.find('img').width();
	this.imageCount=this.target.find('img').length;
	this.counter=0;

	this.events.click.call(this);

};

Slider.prototype.slide=function()
{

   this.target.animate({'margin-left':-(this.counter)*(this.imageWidth)});

};

Slider.prototype.setCounter=function(direction)
{
  
   (direction==="next")? ++this.counter:--this.counter;

   if(this.counter < 0)
   {
   	 this.counter = this.imageCount - 1;
   }
   else if(this.counter == this.imageCount)
   {
   	this.counter=0;
   }

   this.slide();
};

Slider.prototype.events={

	click:function()
	{
         var parent=this;

         parent.nav.find('button').on('click',function()
         {
         	var dir=$(this).data('dir');

         	parent.setCounter(dir);
         });
	}
};


$(document).ready(function ()
{

var target=$('div.slider').css('overflow','hidden').children('ul');
var nav=$('div.slidernav');

var sliderObject=new Slider(target,nav);

})