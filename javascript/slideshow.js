// User inputs
var entries = [
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
        link: 'https://qdm12.github.io/BitcoinUses/results',
        tags: ["MapReduce", "Java", "HadoopCryptoLedger", "BigData", "Bitcoin", "Cryptocurrencies"]
    },
    {
        title: "Derivatex",
        description: "Desktop, Mobile and command line deterministic password generator. \
        <br><br>It uses Argon2id to generate string passwords from a hash digest made from a master password and your birthdate \
        <br><br>&#9673 Strong generated passwords \
        <br>&#9673 Valid passwords with digits, alpha and symbols \
        <br>&#9673 Keep your master digest file safe on your device \
        <br>&#9673 Reconstruct your master digest file with your master password and birthdate \
        <br>&#9673 Still in progress...",
        image: "images/derivatex.png",
        link: "https://github.com/qdm12/Password-Derivator#password-derivator",
        tags: ["Cryptography", "Security", "Python", "Passwords", "Kivy"]
    },
    {
        title: "Thesis on homomorphic binary circuits",
        description: 'Digital circuits using fully homomorphic encryption with HElib and written in C++. \
        <br>Homomorphic encryption allows to perform analytics on encrypted data, which will be very useful for cloud computing. \
        <br>&#9673 <a href="https://qdm12.github.io/hbc">Github</a> \
        <br>&#9673 <a href="documents/homomorphic-encryption-cryptography-for-cloud-computing-presentation.pptx">Presentation</a> \
        <br>&#9673 <a href="documents/homomorphic-encryption-cryptography-for-cloud-computing-report.pdf">Full report</a> \
        <br>&#9673 This was used as a starting point by Orange France R&D',
        image: "gifs/hbc.gif",
        link: "https://github.com/qdm12/hbc",
        tags: ["Cryptography", "Security", "C++", "Digital", "Binary", "MEngThesis"]
    },
];
var slides = "#slides";
var slideIndex = 2;
var autoplayTime = 8000;

// Logic
var autoplayID;
function goToSlide(fromIndex, toIndex) {
    var duration = 600;
    $(slides + " > #dots > #dot-" + fromIndex).css({background: "transparent"});
    $(slides + " > #slide-" + fromIndex).fadeOut(duration, function () {
        $(slides + " > #dots > #dot-" + toIndex).css({background: "rgb(130, 170, 200)"});
        $(slides + " > #slide-" + toIndex).fadeIn(duration);
    });
    return toIndex;
}

function autoPlay() {
    intervalID = setInterval(function () {
        var toIndex = Number(slideIndex) + 1;
        if (toIndex > entries.length - 1) {
            toIndex = 0;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    }, autoplayTime);
    return intervalID;
}

$(document).ready(function () {

    // Creates the slides
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

    // Shows initial slide
    $(slides + " > #slide-" + slideIndex).show();
    $(slides + " > #dots > #dot-" + slideIndex).css({background: "rgb(130, 170, 200)"});

    // Previous Button
    $(slides + " > #previous").click(function () {
        var toIndex = Number(slideIndex) - 1;
        if (toIndex < 0) {
            toIndex = entries.length - 1;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    });

    // Next Button
    $(slides + " > #next").click(function () {
        var toIndex = Number(slideIndex) + 1;
        if (toIndex > entries.length - 1) {
            toIndex = 0;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    });

    // Dots buttons
    $(slides + " > #dots > .dot").click(function () {
        var toIndex = this.id.slice(-1);
        slideIndex = goToSlide(slideIndex, toIndex);
    });

    // Autoplay
    autoplayID = autoPlay();

    // Stop and resume autoplay
    $(slides + " > .slide").mouseover(function() {
        clearInterval(autoplayID);
    });
    $(slides + " > .slide").mouseout(function() {
        autoplayID = autoPlay();
    });
});




