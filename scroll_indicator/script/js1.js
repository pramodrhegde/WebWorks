(function(){
    var $w = $(window);
    var $prog2 = $('.progress-indicator1');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function(){
        var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
        updateProgress(perc);
    });
 
    function updateProgress(perc){
 
        $prog2.css({width : perc*100 + '%'});
    }
 
}());