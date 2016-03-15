$(function () {
    var $firstInput = $("#first");
    var $firstInputJ = $("#firstJ");
    var $firstInputM = $("#firstM");
    var $firstInputN = $("#firstN");
    var $lastInput = $("#last");
    var $lastInputJ = $("#lastJ");
    var $lastInputM = $("#lastM");
    var $lastInputN = $("#lastN");
    var $midInput = $("#middle");
    var $midInputJ = $("#middleJ");
    var $midInputM = $("#middleM");
    var $midInputN = $("#middleN");
    var $titleInput = $("#title");
    var $titleInputJ = $("#titleJ");
    var $titleInputM = $("#titleM");
    var $titleInputN = $("#titleN");
    var $yearInput = $("#year");
    var $yearInputJ = $("#yearJ");
    var $yearInputM = $("#yearM");
    var $yearInputN = $("#yearN");
    var $monthInputM = $("#monthM");
    var $monthInputN = $("#monthN");
    var $monthInputW = $("#monthW");
    var $dateInputM = $("#dateM");
    var $dateInputN = $("#dateN");
    var $cityInput = $("#city");
    var $stateInput = $("#state");
    var $publisherInput = $("#publisher");
    var $volumeInputJ = $("#volumeJ");
    var $volumeInputM = $("#volumeM");
    var $issueInputJ = $("#issueJ");
    var $articleInputJ = $("#artTitleJ");
    var $articleInputM = $("#artTitleM");
    var $articleInputN = $("#artTitleN");
    var $pagesInputJ = $("#pagesJ");
    var $pagesInputM = $("#pagesM");
    var $pagesInputN = $("#pagesN");
    //--clears form inputs
    $(".clearForm").on("click", function () {
        var $allInput = $(":input");
        $allInput.val("");
        $('[required]').removeClass("red");
        $("#msg").css("visibility", "hidden");
        $("#msgJ").css("visibility", "hidden");
        $("#msgM").css("visibility", "hidden");
        $("#msgN").css("visibility", "hidden");
        $("#citation").html(""); 
    });
    //--capitalizes the first letter of each word
    function capitalizeWords(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    //--check for missing book inputs
    function missingB() {
        if ($firstInput.val() !== "" && $lastInput.val() !== "" &&
            $titleInput.val() !== "" && $cityInput.val() !== "" && 
            $stateInput.val() !== "" && $publisherInput.val() !== "" &&
            $yearInput.val() !== "") { 
            $('[required]').removeClass("red");
            $("#msg").css("visibility", "hidden");
        } else {
            $('[required]').addClass("red");
            $("#msg").css("visibility", "visible");
            e.preventDefault(); 
        } 
    }
    //--citation for a book
    $("#submitB").on("click", function (e) {
        missingB();
        var last = capitalizeWords($lastInput.val())  + ", \u00A0";
        var first = $firstInput.val().charAt(0).toUpperCase() + ". \u00A0"; //cut to first letter and capitalize
        var middle;
        if ($midInput.val() === "") {
            middle = "";
        } else {
            middle = $midInput.val().charAt(0).toUpperCase() + ". \u00A0";
        }
        var year = "(" + $yearInput.val() + "). \u00A0";
        var title = "<em>" + capitalizeWords($titleInput.val())  + ".</em> \u00A0";
        var city = capitalizeWords($cityInput.val()) + ", \u00A0";
        var state = $stateInput.val().toUpperCase() + ": \u00A0";
        var publisher = capitalizeWords($publisherInput.val()) + ". \u00A0"; 
        $("#citation").html(last + first + middle + year + title + city + state + publisher); 
    });
    //--check for missing journal inputs
        function missingJ () {
        if ($firstInputJ.val() !== "" && $lastInputJ.val() !== "" &&
            $titleInputJ.val() !== "" && $articleInputJ.val() !== "" && 
            $pagesInputJ.val() !== "" && $volumeInputJ.val() !== "" &&
            $yearInputJ.val() !== "") { 
            $('[required]').removeClass("red");
            $("#msgJ").css("visibility", "hidden");
        } else {
            $('[required]').addClass("red");
            $("#msgJ").css("visibility", "visible");
            e.preventDefault(); 
        } 
    }
    //--citation for a journal
    $("#submitJ").on("click", function (e) {
        missingJ();
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
        var volJ = "<em>" + $volumeInputJ.val() + "</em>";
        var issueJ;
        if ($issueInputJ.val() === "") {
            issueJ = "";
            volJ = "<em>" + $volumeInputJ.val() + ",</em> \u00A0";
        } else {
            issueJ = "(" + $issueInputJ.val() + "), \u00A0";
            }
        var pagesJ = $pagesInputJ.val();
        $("#citation").html(lastJ + firstJ + middleJ + yearJ + artJ + titleJ + volJ + issueJ + pagesJ); 
    });
    //--check for missing magazine inputs
        function missingM () {
        if ($firstInputM.val() !== "" && $lastInputM.val() !== "" &&
            $titleInputM.val() !== "" && $articleInputM.val() !== "" && 
            $pagesInputM.val() !== "" && $volumeInputM.val() !== "" &&
            $yearInputM.val() !== "" && $dateInputM.val() !== "" && 
            $monthInputM.val() !== "") { 
            $('[required]').removeClass("red");
            $("#msgM").css("visibility", "hidden");
        } else {
            $('[required]').addClass("red");
            $("#msgM").css("visibility", "visible");
            e.preventDefault(); 
        } 
    }
    //--citation for a magazine
    $("#submitM").on("click", function (e) {
        missingM();
        var titleM = "<em>" + capitalizeWords($titleInputM.val()) + ",</em>  \u00A0";
        var firstM = $firstInputM.val().charAt(0).toUpperCase() + ". \u00A0"; 
        var middleM;    
        if ($midInputM.val() === "") {
            middleM = "";
        } else {
            middleM = $midInputM.val().charAt(0).toUpperCase() + ". \u00A0";
        }
        var lastM = capitalizeWords($lastInputM.val())  + ", \u00A0";
        var monthM = capitalizeWords($monthInputM.val()) +" \u00A0";
        var dateM = $dateInputM.val() + "). \u00A0";
        var yearM = "(" + $yearInputM.val() + ", \u00A0";
        var artM = capitalizeWords($articleInputM.val()) + ". \u00A0";
        var volM = "<em>" + $volumeInputM.val() + ",</em> \u00A0";
        var pagesM = $pagesInputM.val() + ".";
        $("#citation").html(lastM + firstM + middleM + yearM + monthM + dateM + artM + titleM + volM + pagesM);
    }); 
    //--check for missing newspaper inputs
     function missingN () {
        if ($firstInputN.val() !== "" && $lastInputN.val() !== "" &&
            $titleInputN.val() !== "" && $articleInputN.val() !== "" && 
            $pagesInputN.val() !== "" && $yearInputN.val() !== "" && 
            $dateInputN.val() !== "" && $monthInputN.val() !== "") { 
            $('[required]').removeClass("red");
            $("#msgN").css("visibility", "hidden");
        } else {
            $('[required]').addClass("red");
            $("#msgN").css("visibility", "visible");
            e.preventDefault(); 
        } 
    }
    //--citation for a newspaper
    $("#submitN").on("click", function (e) {
        missingN();
        var titleN = "<em>" + capitalizeWords($titleInputN.val()) + ",</em> \u00A0";
        var firstN = $firstInputN.val().charAt(0).toUpperCase() + ". \u00A0"; 
        var middleN;    
        if ($midInputN.val() === "") {
            middleN = "";
        } else {
            var middleN = $midInputN.val().charAt(0).toUpperCase() + ". \u00A0";
        }
        var lastN = capitalizeWords($lastInputN.val())  + ", \u00A0";
        var monthN = capitalizeWords($monthInputN.val()) +" \u00A0";
        var dateN = $dateInputN.val() + "). \u00A0";
        var yearN = "(" + $yearInputN.val() + ", \u00A0";
        var artN = capitalizeWords($articleInputN.val()) + ". \u00A0";
        var pagesN = "pp. \u00A0" + $pagesInputN.val() + ".";
        $("#citation").html(lastN + firstN + middleN + yearN + monthN + dateN + artN + titleN + pagesN);
    }); 
});