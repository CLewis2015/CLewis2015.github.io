$(document).ready(function(){ 
//-------------------for park image sections-------------------// 
$( ".thumbnail" ).hover( 
    function() {
        var idx = $(this).index();     
        $('.featured-images').children('.active').removeClass('active'); 
        $('.featured-image-item').eq(idx).addClass('active'); 
        $('.thumbnail-images').children('.active').removeClass('active');
        $('.thumbnail').eq(idx).addClass('active');
        });
    
//-------------------dropdown menu for touch screens-------------------//  
    $("#submenu").click(function (event) {
        event.stopPropagation();
        $("#drop").toggle();
    });
    $(document).click(function() {
        $("#drop").hide();
    });
    });