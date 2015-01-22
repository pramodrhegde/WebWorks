/* image preview plugin*/

(function($){
 
 	$.expr[':'].linkingToImage=function(elem,index,match){

 		return $(elem).is('a') && elem.href && (/\.(png|jpe?g|gif|bmp)$/).test(elem.href);
 	};

 	$.fn.imagePreview=function(options){

 		var defaultSettings={
 			imgCSS:{},
 			positionFromCursor:{left:10,top:10},
 			onShow:function(){},
 			onHide:function(){},
 			onLoad:function(){},
 			preLoadImages:true,
 			containerId:'imagePreviewContainer',
 			containerLoadingClass:'loading'
 		},

 		settings = $.extend({},defaultSettings,options),

 		$container = $('<div/>').attr('id',settings.containerId).append('<img/>').hide().appendTo('body'),
 		$img = $('img',$container).css(settings.imgCSS);

 		if(settings.preLoadImages)
 		{
 			this.each(function(){
 				if($(this).is(':linkingToImage')){
 					$('<img/>').attr('src',this.href);
 				}
 			});
 		}

 		this.mousemove(function(e){
 			$container.css({
 				left:e.pageX+settings.positionFromCursor.left+'px',
 				top:e.pageY+settings.positionFromCursor.top+'px'
 			});
 		}).hover(function(){

 			var link=this;
 			$container.addClass(settings.containerLoadingClass).show();
 			$img.load(function(){
 				$container.removeClass(settings.containerLoadingClass);
 				settings.onLoad.call($img,link);
 			}).attr('src',link.href)
 			settings.onShow.call($container,this);
 		},function(){
 			
 			$img.attr('src','');
 			$container.hide();
 			                                     
 		});

 	};

})(jQuery);

$('a').imagePreview({imgCSS:{'width':'200px','height':'200px'},
     onShow:function(){
		$('img',this).css({opacity:0});
	},
    onLoad:function(){
    	$(this).animate({opacity:1},400)
	}
});