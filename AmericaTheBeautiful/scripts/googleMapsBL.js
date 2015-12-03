$(document).ready(function() {
    
var map;  //create map variable
     
function initialize() {     //set up google map
    var myLatlng = new google.maps.LatLng(43.7500,-102.5000);  //coordinates for Badlands
    var myOptions = {
        zoom: 8, 
        center: myLatlng, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
}; 

//draw map in map div    
map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
    position: myLatlng, 
    map: map 
    
}); 
}
    
initialize();

    });
