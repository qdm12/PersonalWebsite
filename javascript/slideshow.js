var entries = [
    {
        title: "Derivatex",
        description: "TO DO",
        image: "images/derivatex.png",
        link: "https://github.com/qdm12/Password-Derivator#password-derivator",
        tags: ["Cryptography", "Security", "Python", "Passwords", "Kivy"]
    },
    {
        title: "Big Data Project: Bitcoin Uses",
        description: "The Bitcoin blockchain was analyzed from 2009 up to December 2017 to \
        estimate the uses of bitcoins. \
        <br>It was also correlated with Reddit data and venues data from Coinmap. \
        <br><br>The two main results researched are: \
        <br>&#9673 The monthly counts of transaction outputs belonging to different USD ranges \
        <br>&#9673 The monthly cumulative amounts of these outputs belonging to different USD ranges \
        <br><br>The miner rewards, self-transfers and change outputs are ignored.",
        image: "images/bitcoinuses.png",
        link: 'https://qdm12.github.io/BitcoinUses/results/',
        tags: ["MapReduce", "Java", "HadoopCryptoLedger", "BigData", "Bitcoin", "Cryptocurrencies"]
    }
];

var slides = "#slides";

function goToSlide(fromIndex, toIndex) {
    var duration = 600;
    $(slides + " > #dots > #dot-" + fromIndex).css({background: "transparent"});
    $(slides + " > #slide-" + fromIndex).fadeOut(duration, function () {
        $(slides + " > #dots > #dot-" + toIndex).css({background: "rgb(130, 170, 200)"});
        $(slides + " > #slide-" + toIndex).fadeIn(duration);
    });
    return toIndex;
}

$(document).ready(function () {
    var i, j;
    for (i = 0; i < entries.length; i += 1) {
        var slide = $('<div id="slide-' + i + '" class="slide"></div>');
        $('<div class="title"><a target="_blank" href=' + entries[i].link + '>' + entries[i].title + '</a></div>').appendTo(slide);
        var tags = $('<div class="tags"></div>');
        for (j = 0; j < entries[i].tags.length; j += 1) {
            $('<div class="tag"><b>#' + entries[i].tags[j] + '</b></div>').appendTo(tags);
        }
        tags.appendTo(slide);
        var imageContainer = $('<div class="imageContainer"></div>');
        $('<img class="image" src="' + entries[i].image + '"/>').appendTo(imageContainer);
        imageContainer.appendTo(slide);
        $('<div class="description">' + entries[i].description + '</div>').appendTo(slide);
        $('<div style="clear:both;"></div>').appendTo(slide);
        $('<div class="link"><a target="_blank" href=' + entries[i].link + '>Click <b>here</b></a> for more details</div>').appendTo(slide);
        console.log(slide);
        slide.hide();
        slide.appendTo($(slides));
        $('<div id="dot-' + i + '" class="dot"></div>').appendTo($(slides + " > #dots"));
    }
    var slideIndex = 0;
    $(slides + " > #slide-" + slideIndex).show();
    $(slides + " > #dots > #dot-" + slideIndex).css({background: "rgb(130, 170, 200)"});
    $(slides + " > #previous").click(function () {
        var toIndex = Number(slideIndex) - 1;
        if (toIndex < 0) {
            toIndex = entries.length - 1;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    });
    $(slides + " > #next").click(function () {
        var toIndex = Number(slideIndex) + 1;
        if (toIndex > entries.length - 1) {
            toIndex = 0;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    });
    $(slides + " > #dots > .dot").click(function () {
        var toIndex = this.id.slice(-1);
        slideIndex = goToSlide(slideIndex, toIndex);
    });
});




