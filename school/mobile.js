$(function () {    
$("html, body").animate({scrollTop: $(this).offset().top}, 800);
});

 $(window).on('resize', function(event){
        var windowSize = $(window).width(); 
        if(windowSize < 800){
    $("html, body").animate({scrollTop: $("#sessions").offset().top}, 800);
        }
    }); 


var is_mobile = false;
    if($("#content td").css('margin')== '0') {
        is_mobile = true;
    }

 if (is_mobile == true) {
            
        $("html, body").animate({scrollTop: $("#description").offset().top}, 800);
    }