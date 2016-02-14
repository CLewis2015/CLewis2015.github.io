$(document).ready(function(){

//to light up current location in navigation bar
$('ul[role="navigation"] a').each(function(){       //for each link in the nav bar
    if(this.href===window.location.href){       //if it is the current page
        $(this).addClass('current');}           //then hightlight link
    });
    
 //Study: Mitosis
    $(".answer").hide();    //hide answers
    $(".guess_box").click(function(){       //click event
        $(".answer").hide();        //hide previous answer
        $(this).find(".answer").slideDown();      //show answer
    });
//Slideshow, prevents page from reloading when swapping slides    
    $(".slide").on("click", function (e) {
        e.preventDefault();    
    });
    $(".arrow").on("click", function (e) {
        e.preventDefault();    
    });
    
//PHP alert
    $("#phpAlert").click(function () {
       alert("Sorry, GitHub Pages does not run PHP."); 
    });
});

     
   