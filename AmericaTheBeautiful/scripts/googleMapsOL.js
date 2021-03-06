$(document).ready(function () {
    var map;  //create map variable   
    function initialize() {     //set up google map
        var myLatlng = new google.maps.LatLng(47.9694, -123.4986);   //coordinates for Olympic
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