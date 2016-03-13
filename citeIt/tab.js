   $(document).ready(function () {
   // for tab list in about section 
    $(".tabList").each(function () {     //find list of tabs
        var $this = $(this);                //store as current tabs
        var $tab = $this.find("li.active"); //get active tab
        var $link = $tab.find("a");        //get link element in active tab
        var $panel = $($link.attr("href"));        //get active panel
        //show one tab and hide others
    $this.on("click", ".tabControl", function (e) {
        e.preventDefault();      //prevents link behavior 
        var $link = $(this);      //hold current link inside jQuery object
        var id = this.hash;        //get href from tab that was clicked
        $("#citation").html("");
    if (id && !$link.is(".active")) {     //if not currently active
        $panel.removeClass("active");   //make panel and tab inactive
        $tab.removeClass("active");
        $panel = $(id).addClass("active");      //make new panel and tab active
        $tab = $link.parent().addClass("active");
        }
    });
    });
   });