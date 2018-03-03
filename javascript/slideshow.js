var entries = [
    {
        title: "Derivatex",
        description: "Blah blah blah fdsfl kjdsa jkdlsad hjkdsla",
        image: "images/derivatex.png",
        link: "google.com",
        tags: ["tag 1", "tag 2"]
    },
    {
        title: "Mega blah 2",
        description: "Blah blah blah 2",
        image: "images/derivatex.png",
        link: "",
        tags: ["tag 3", "tag 4"]
    }
];

var slides = "#slides";
var i, j;
for (i = 0; i < entries.length; i += 1) {
    var slide = $('<div id="slide-' + i + '" class="slide"></div>');
    $('<div class="title"><a target="_blank" href=' + entries[i].link + '>' + entries[i].title + '</a></div>').appendTo(slide);
    var tags = $('<div class="tags"></div>');
    for (j = 0; j < entries[i].tags.length; j += 1) {
        $('<div class="tag">' + entries[i].tags[j] + '</div>').appendTo(tags);
    }
    tags.appendTo(slide);
    var imageContainer = $('<div class="imageContainer"></div>');
    $('<img class="image" src="' + entries[i].image + '"/>').appendTo(imageContainer);
    imageContainer.appendTo(slide);
    $('<div class="description">' + entries[i].description + '</div>').appendTo(slide);
    $('<div style="clear:both;"></div>').appendTo(slide);
    $('<div class="link"><a target="_blank" href=' + entries[i].link + '>Click <b>here</b></a> for more details</div>').appendTo(slide);
    slide.hide();
    slide.appendTo($(slides));
}

var slideIndex = 0;
$(slides + " > #slide-0").show();
$(slides + " > #previous").click(function () {
    $(slides + " #slide-" + slideIndex).fadeOut(600, function () {
        slideIndex -= 1;
        if (slideIndex < 0) {
            slideIndex = entries.length - 1;
        }
        $(slides + " #slide-" + slideIndex).fadeIn(600);
    });
});
$(slides + " > #next").click(function () {
    $(slides + " #slide-" + slideIndex).fadeOut(600, function () {
        slideIndex += 1;
        if (slideIndex > entries.length - 1) {
            slideIndex = 0;
        }
        $(slides + " #slide-" + slideIndex).fadeIn(600);
    });
});



