$(document).ready(function(){
    $(window).scroll(function(){
        var offset = $(this).scrollTop();

        if(offset > $('.whatcan').offset().top - $(window).height() + 300){
            $('.left-column').css({
                'transform': 'translate(0px, 0px)',
                'opacity': '1'
            });

            $('.right-column').css({
                'transform': 'translate(0px, 0px)',
                'opacity': '1'
            });
        }
    });
});