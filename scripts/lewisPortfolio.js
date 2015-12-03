$(document).ready(function(){ 
    //----part of mobile first design, when menu icon is clicked, nav bar drops down
    $('.navbar').removeClass('open'); 
    $('.menu-button').on('click', function(){
        $('.navbar').toggleClass('open');
        });
    $('.navbar li').on('click', function () {
        $('.navbar').removeClass('open');
        });
    

    /*$("#resume").click(function() {
    window.open("../docs/Clewis_Resume");
});
         
//contact form
   $("#contact").on("submit", function(e) {
    e.preventDefault();
       var details = $("#contact").serialize();
       $.post("contactA.php", details, function(data) {
           $("#contact").html(data);
   });
   });*/
    
   // for tab list in about section 
    $(".tab-list").each(function() {     //find list of tabs
        var $this= $(this);                //store as current tabs
        var $tab= $this.find("li.active"); //get active tab
        var $link= $tab.find("a");        //get link element in active tab
        var $panel= $($link.attr("href"));        //get active panel
        //show one tab and hide others
    $this.on("click", ".tab-control", function(e){
        e.preventDefault();      //prevents link behavior 
        var $link= $(this);      //hold current link inside jQuery object
        var id= this.hash;        //get href from tab that was clicked
        
    if(id && !$link.is(".active")){     //if not currently active
        $panel.removeClass("active");   //make panel and tab inactive
        $tab.removeClass("active");
        $panel = $(id).addClass("active");      //make new panel and tab active
        $tab = $link.parent().addClass("active");
        }
    });
    });   
         
    });

/*to clear contact form, need to figure it in the php and call once the submit button is clicked
function clearInputs() {
    $("#contact :input").each(function(){ 
        $(this).val('');
});
}*/