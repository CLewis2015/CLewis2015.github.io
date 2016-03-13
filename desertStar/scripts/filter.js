(function () {
    var $imgs = $('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {};
    $imgs.each(function () {
        var img = this;
        var tags = $(this).data('tags');
        if (tags) {
            tags.split(',').forEach(function (tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
    //adds the show all button and shows all images
    $('<button>', {
        text: 'Show All',
        class: 'active',
        click: function () {
            $(this).addClass('active').siblings().removeClass('active');
            $imgs.show();
        }
    }).appendTo($buttons);
    //creates a button for each tag name and tells how many with that tag
    $.each(tagged, function (tagName) {
        $('<button>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function () {
                $(this).addClass('active').siblings().removeClass('active');
                $imgs.hide().filter(tagged[tagName]).show(); //shows images with that tag, hides others
            }
        }).appendTo($buttons);
    });
}());