$(function () {
    var times;          //global variable
    
    $.ajax({            //setup request
        beforeSend: function(xhr) {         //before requesting
            if(xhr.overrideMimeType) {      //checks if browser supports method 
                xhr.overrideMimeType("application/json");       //response from server should be trated as JSON data
            }
    }
});
    
//--------Collects data from JSON file----------//
    function loadTimetable () {
        $.getJSON("pdSchedule.json")        //collect JSON data from file using path from html
        .done(function(data) {              //if successful
            times= data;                    // data will be stored under times variable
        }).fail(function(){                 //if unsuccessful
            $("#event").html("Sorry, we could not load the schedule.");     //error msg
        });
    }
    loadTimetable();            //call function
    
//--------Click on day to load timetable------------//
$("#content").on("click", "#event a", function(e) {         //click event
        
        e.preventDefault();         //prevents link from opening a page, shows AJAX data instead
        var loc = this.id.toUpperCase();        //variable to hold event location
        
        var newContent = "";        //to build new timetable
        for (var i = 0; i < times[loc].length; i++){      //loop through sessions
             newContent += '<a href = "descriptions.html#';     //descriptions link added to timetable 
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';        //search for global match with a space in the title and replace with a dash; this will make it match id attribute 
            newContent += '<li><span class= "time">' + times[loc][i].time + '</span><br>';  //each session is stored in a list element
           
            newContent += times[loc][i].title + '</li></a>';        //title inside link  
    }
        $("#details").css("border", "none");
        $("#sessions").html("<h4>Pick a session:</h4><ul>" + newContent + "</ul>");     //new content added to middle column
        
        $("#event a").css("background-color", "#f0e68c");
        $(this).css("background-color", "#ff0");
        $("#description").css({"visibility": "hidden"});
        $("#details").text("");
    });
    
//--------Load description--------//
    $("#content").on("click", "#sessions a", function(e) {       //click on session
       e.preventDefault();                  //prevent new page from loading
        var fragment = this.href;           //title is in href attribute
        
        fragment = fragment.replace("#", " #");     //add space before # so it's in correct format for jquery load method
        $("#details").load(fragment);               //load info
        
       $("#sessions li").css("background-color", "#f0e68c");
        $(this).children().css("background-color", "#ff0");       //update selected
        
        $("#description").css({"visibility": "visible"});
        $("#details").css("border", "2px solid");
    });
});
        