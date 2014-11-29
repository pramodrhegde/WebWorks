$(document).ready(function()
	{

		var sliderObject=$('div.slider').css('overflow','hidden').children('ul');
		var images=sliderObject.find('img');
		var imageWidth=images.width();
		var imageCount=images.length;
		var counter=0;
       
       $('div.slidernav').show().find('button').on('click',function()
       	{

           var direction=$(this).data('dir');
         
           (direction==="next")? ++counter:--counter;

           if(counter<0)
           {
           	counter=imageCount-1;
           
           }
           else if(counter==imageCount)
           {
           	counter=0;
           }
           
         
       
        slide(sliderObject,counter,imageWidth);

       	});
       
      

	});

function slide(container,position,location)
{
console.log('hello');
container.animate({'margin-left':-position*location});

}