$(document).ready(function () {
    $('.slider').each(function () {  //for every slider
        var $this = $(this);  //get currrent slider
        var $group = $this.find('.slide-group');
        var $slides = $this.find('.slide');     //jQuery object to hold all slides
        var buttonArray = [];
        var currentIndex = 0; //index number of current slide
        var timeout;
        // function to move the slides
        function move(newIndex) {
            var animateLeft, slideLeft;
            advance();
            //if current slide is showing or is moving, do nothing
            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }
            buttonArray[currentIndex].removeClass('active');
            buttonArray[newIndex].addClass('active');
            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }
            //position new slide to left if less than current or to right if more
            $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
            $group.animate({left: animateLeft}, 500, "swing", function () {
                $slides.eq(currentIndex).css({display: 'none'});
                $slides.eq(newIndex).css({left: 0});
                $group.css({left: 0});
                currentIndex = newIndex;
            });
        }
        function advance() {
            clearTimeout(timeout);
            //Sets timer to run function every 4 seconds
            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) { //if not the last slide
                    move(currentIndex + 1); //move to the next slide
                } else {
                    move(0); //move to first slide
                }
            }, 5000);
        }
        $.each($slides, function (index) {
            //create a button element for the button
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) { //if index is current item
                $button.addClass('active');
            } //add active class
            $button.on('click', function () {
                move(index); //event handler for button
            }).appendTo('.slide-buttons');
            buttonArray.push($button);
        });
        advance();
    });
});

