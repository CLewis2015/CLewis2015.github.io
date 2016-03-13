$(function () {
    
    var $firstInput = $("#first");
    var $firstInputJ = $("#firstJ");
    var $firstInputM = $("#firstM");
    var $firstInputN = $("#firstN");
    var $firstInputW = $("#firstW");
    var $lastInput = $("#last");
    var $lastInputJ = $("#lastJ");
    var $lastInputM = $("#lastM");
    var $lastInputN = $("#lastN");
    var $lastInputW = $("#lastW");
    var $midInput = $("#middle");
    var $midInputJ = $("#middleJ");
    var $midInputM = $("#middleM");
    var $midInputN = $("#middleN");
    var $midInputW = $("#middleW");
    var $titleInput = $("#title");
    var $titleInputJ = $("#titleJ");
    var $titleInputM = $("#titleM");
    var $titleInputN = $("#titleN");
    var $yearInput = $("#year");
    var $yearInputJ = $("#yearJ");
    var $yearInputM = $("#yearM");
    var $yearInputN = $("#yearN");
    var $yearInputW = $("#yearW");
    var $monthInputM = $("#monthM");
    var $monthInputN = $("#monthN");
    var $monthInputW = $("#monthW");
    var $cityInput = $("#city");
    var $stateInput = $("#state");
    var $publisherInput = $("#publisher");
    var $volumeInputJ = $("#volumeJ");
    var $volumeInputM = $("#volumeM");
    var $volumeInputN = $("#volumeN");
    var $issueInputJ = $("#issueJ");
    var $issueInputM = $("#issueM");
    var $issueInputN = $("#issueN");
    var $articleInputJ = $("#artTitleJ");
    var $articleInputM = $("#artTitleM");
    var $articleInputN = $("#artTitleN");
    var $articleInputW = $("#artTitleW");
    var $pagesInputJ = $("#pagesJ");
    var $pagesInputM = $("#pagesM");
    var $pagesInputN = $("#pagesN");
    var $urlInput = $("#urlW");
    
    var blank;
    
    
    function resetInput () {
        var $allInput = $("input:text");
        $allInput.val("");
        
    }
    
    function capitalizeWords(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        //title = // capitalize all words != and in or of the
      }
    function fieldBlankError () {
        alert(blank);
    }
    
    $("#submitB").on("click", function (e) {
        if($($firstInput).val() == "") {
            blank = "required field missing";
            fieldBlankError();
        } else if ($($lastInput).val() == "") {
            blank = "required field missing";
            fieldBlankError();
        } else {
            
        var title = "<em>" + capitalizeWords($titleInput.val())  + ".</em> \u00A0";
        var first = $firstInput.val().charAt(0).toUpperCase() + ". \u00A0"; //cut to first letter and capitalize
        var middle;
        if ($midInput.val() === "") {
            middle = "";
        } else {
            middle = $midInput.val().charAt(0).toUpperCase() + ". \u00A0";
        }
        var last = capitalizeWords($lastInput.val())  + ", \u00A0";
        var year = "(" + $yearInput.val() + "). \u00A0"; 
        var city = capitalizeWords($cityInput.val()) + ", \u00A0";  
        var state = $stateInput.val() + ": \u00A0";
        var publisher = capitalizeWords($publisherInput.val()) + ". \u00A0";  
        
        $("#citation").html(last + first + middle + year + title + city + state + publisher);
        
        }
       });
    
    $("#submitJ").on("click", function (e) {
        e.preventDefault();
            var titleJ = "<em>" + capitalizeWords($titleInputJ.val()) + ",</em> \u00A0";
            var firstJ = $firstInputJ.val().charAt(0).toUpperCase() + ". \u00A0"; 
            var middleJ;    
            if ($midInputJ.val() === "") {
                middleJ = "";
            } else {
                middleJ = $midInputJ.val().charAt(0).toUpperCase() + ". \u00A0";
            }
            var lastJ = capitalizeWords($lastInputJ.val())  + ", \u00A0";
            var yearJ = "(" + $yearInputJ.val() + "). \u00A0";
            var artJ = capitalizeWords($articleInputJ.val()) + ". \u00A0";
            var volJ = "<em>" + $volumeInputJ.val() + "</em> \u00A0";
            var issueJ = "(" + $issueInputJ.val() + "), \u00A0";
            var pagesJ = $pagesInputJ.val();
           
            $("#citation").html(lastJ + firstJ + middleJ + yearJ + artJ + titleJ + volJ + issueJ + pagesJ);
        
            var $allInput = $(":input");
            $allInput.val("");
            
       });
    
    $("#submitM").on("click", function (e) {
        e.preventDefault();
            var titleM = "<em>" + capitalizeWords($titleInputM.val()) + ",</em> \u00A0";
            var firstM = $firstInputM.val().charAt(0).toUpperCase() + ". \u00A0"; 
            var middleM;    
            if ($midInputM.val() === "") {
                middleM = "";
            } else {
                middleM = $midInputJ.val().charAt(0).toUpperCase() + ". \u00A0";
            }
            var lastM = capitalizeWords($lastInputM.val())  + ", \u00A0";
            var monthM = capitalizeWords($monthInputM.val()) +"). \u00A0";
            var yearM = "(" + $yearInputM.val() + ", \u00A0";
            var artM = capitalizeWords($articleInputM.val()) + ". \u00A0";
            var volM = "<em>" + $volumeInputM.val() + "</em> \u00A0";
            var issueM = "(" + $issueInputM.val() + "), \u00A0";
            var pagesM = $pagesInputM.val();
          
            $("#citation").html(lastM + firstM + middleM + yearM + monthM + artM + titleM + volM + issueM + pagesM);
            var $allInput = $(":input");
            $allInput.val("");
      });  
    
    $("#submitN").on("click", function (e) {
        e.preventDefault();
            var titleN = "<em>" + capitalizeWords($titleInputN.val()) + ",</em> \u00A0";
            var firstN = $firstInputN.val().charAt(0).toUpperCase() + ". \u00A0"; 
            var middleN;    
            if ($midInputN.val() === "") {
                middleN = "";
            } else {
            var middleN = $midInputN.val().charAt(0).toUpperCase() + ". \u00A0";
            }
            var lastN = capitalizeWords($lastInputN.val())  + ", \u00A0";
            var monthN = capitalizeWords($monthInputN.val()) +"). \u00A0";
            var yearN = "(" + $yearInputN.val() + ", \u00A0";
            var artN = capitalizeWords($articleInputN.val()) + ". \u00A0";
            var volN = "<em>" + $volumeInputN.val() + "</em> \u00A0";
            var issueN = "(" + $issueInputN.val() + "), \u00A0";
            var pagesN = $pagesInputN.val();
          
            $("#citation").html(lastN + firstN + middleN + yearN + monthN + artN + titleN + volN + issueN + pagesN);
            var $allInput = $(":input");
            $allInput.val("");
      }); 
    
    $("#submitW").on("click", function (e) {
        e.preventDefault();
            var titleW = "<em>" + capitalizeWords($articleInputW.val()) + ",</em> \u00A0";
            var firstW = $firstInputW.val().charAt(0).toUpperCase() + ". \u00A0";
            var middleW;    
            if ($midInputW.val() === "") {
                middleW = "";
            } else {
            var middleW = $midInputW.val().charAt(0).toUpperCase() + ". \u00A0";
            }
            var lastW = capitalizeWords($lastInputW.val())  + ", \u00A0";
            var monthW = capitalizeWords($monthInputW.val()) +"). \u00A0";
            var yearW = "(" + $yearInputW.val() + ", \u00A0";
            var urlW = "Retrieved from \u00A0" + $urlInput.val();
          
            $("#citation").html(lastW + firstW + middleW + yearW + monthW + titleW + urlW);
            var $allInput = $("input:text");
            $allInput.val("");
      });    
    
    });