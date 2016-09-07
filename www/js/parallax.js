$(window).scroll(function(){
    var offset = $(window).scrollTop();
    $('.intro').css({
        'background-position':'0px ' + (offset / 4) + 'px'
    });
    
    $('.intro .name, .intro .appendix').css({
        'top': (50 + offset/30) + '%'
    });
    
    if(offset > $('.parallax1').offset().top - $(window).height()){
        offset = Math.min(2340, offset - $('.parallax1').offset().top + $(window).height());
        console.log(offset);
        $('.p1_l1').css({
            'transform':'translate(0px,'+ -(offset/4) +'px)'
        });
    }
});