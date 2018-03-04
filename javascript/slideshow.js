// User inputs
var entries = [
    {
        title: "Derivatex",
        description: "Desktop, Mobile and command line deterministic password generator. \
        <br><br>It uses Argon2id to generate string passwords from a hash digest made from a master password and your birthdate \
        <br><br>&#9673 Strong generated passwords \
        <br>&#9673 Valid passwords with digits, alpha and symbols \
        <br>&#9673 Keep your master digest file safe on your device \
        <br>&#9673 Reconstruct your master digest file with your master password and birthdate \
        <br><br>STATUS: Working but unfinished",
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
        <br><br>The miner rewards, self-transfers and change outputs are ignored. \
        <br><br>STATUS: Finished but to be enhanced",        
        image: "images/bitcoinuses.png",
        link: 'https://qdm12.github.io/BitcoinUses/results',
        tags: ["MapReduce", "Java", "HadoopCryptoLedger", "BigData", "Bitcoin", "Cryptocurrencies"]
    },
    {
        title: "Thesis on homomorphic binary circuits",
        description: 'Digital circuits using fully homomorphic encryption with HElib and written in C++. \
        <br>Homomorphic encryption allows to perform analytics on encrypted data, which will be very useful for cloud computing. \
        <br>&#9673 <a href="https://qdm12.github.io/hbc">Github</a> \
        <br>&#9673 <a href="documents/homomorphic-encryption-cryptography-for-cloud-computing-presentation.pptx">Presentation</a> \
        <br>&#9673 <a href="documents/homomorphic-encryption-cryptography-for-cloud-computing-report.pdf">Full report</a> \
        <br>&#9673 This was used as a starting point by Orange France R&D \
        <br><br>STATUS: Finished but updating it',
        image: "gifs/hbc.gif",
        link: "https://github.com/qdm12/hbc",
        tags: ["Cryptography", "Security", "C++", "Digital", "Binary", "MEngThesis"]
    },
    {
        title: "Private Internet Access Docker",
        description: 'VPN client container to private internet access servers based on Alpine Linux and OpenVPN. \
        <br><br>&#9673 Connect other containers to it \
        <br>&#9673 Choose your VPN region \
        <br>&#9673 Keep your authentication details in a secured file \
        <br>&#9673 Access local ports of containers connected to the VPN with a proxy \
        <br>&#9673 <b>700KB</b> RAM usage and <b>10MB</b> image \
        <br><br>STATUS: Finished',
        image: "images/piadocker.png",
        link: "https://github.com/qdm12/private-internet-access-docker",
        tags: ["Docker", "VPN", "Automation", "Networking", "OpenVPN", "Alpine"]
    },
    {
        title: "GoDaddy DDNS Updater Docker",
        description: 'Update the IP address of one or more of your records of one or more GoDaddy domain(s) every 5 minutes. \
        <br><br>&#9673 <b>10MB</b> image \
        <br>&#9673 <b>13MB</b> RAM usage for any number of domains \
        <br>&#9673 Relies on bash (for regex) and curl \
        <br><br>STATUS: Finished',
        image: "images/godaddydocker.png",
        link: "https://github.com/qdm12/godaddy-ip-ddns",
        tags: ["Docker", "GoDaddy", "Automation", "Networking", "Regex", "Alpine"]
    },
    {
        title: "Spigot Server Docker",
        description: 'Runs a Spigot Minecraft server. It is based on: \
        <br>&#9673 Alpine and OpenJDK JRE 8 - <b>82MB</b> image \
        <br>&#9673 It uses about 300MB of RAM and little CPU \
        <br><br>STATUS: Finished',
        image: "images/spigotdocker.png",
        link: "https://github.com/qdm12/spigot-docker",
        tags: ["Docker", "Minecraft", "Spigot", "Java", "Alpine", "Automation"]
    },
    {
        title: "Youtube Downloader Docker",
        description: 'Download with youtube-dl using command line arguments or configuration files. GeoIP address detection built on top if you use a VPN. \
        <br><br>Based on Alpine, Bash (for regexp), Python, Curl and FFMPEG - <b>94MB</b> image \
        <br><br>STATUS: Finished',
        image: "images/youtubedldocker.png",
        link: "https://github.com/qdm12/youtube-dl-docker",
        tags: ["Docker", "Youtube-dl", "Alpine", "Regex", "Automation"]
    },
    {
        title: "Blockchain course",
        description: 'A course on the blockchain and Bitcoin. \
        <br><br>&#9673 Binary, bits and bytes \
        <br>&#9673 P2P Network \
        <br>&#9673 Digital signatures \
        <br>&#9673 Hash functions \
        <br>&#9673 Merkle tree \
        <br><br>STATUS: In progress',
        image: "images/blockchaincourse.png",
        link: "https://github.com/qdm12/blockchain-course",
        tags: ["Blockchain", "Bitcoin", "Markdown", "Cryptography"]
    },
    {
        title: "AdsUp",
        description: 'AdsUp is a platform bridging brands, social causes and individual supporters through <b>advertising</b>. \
        <br><br><b>Supporters</b> unite together and donate <b>a few seconds of their time</b> watching ads they partially choose on our mobile app. This generates revenue used to support a social cause of their choice. \
        <br><br><b>Supporters</b> also gain loyalty points for a specific brand by sharing their ads and by watching them. \
        <br<br>Finally, <b>supporters</b> can easily create a cause from Twitter or Facebook by sharing the weblink with our mobile app. \
        <br><br>STATUS: Paused',
        image: "images/adsup.png",
        link: "https://sites.google.com/view/adsup/home",
        tags: ["MobileApp", "Social", "Business", "Regex", "Automation"]
    },
    {
        title: "Stamina",
        description: 'Mobile app and backend to find the optimal coffee intake schedule for a person. \
        <br>&#9673 Maximise performance during the day \
        <br>&#9673 Ensure high quality sleep at night \
        <br><br>Monitors analyses the activity of the user over several days, with smartphone and smartwatch sensors. \
        <br><br>A server stores and analyses the data with a clustering machine learning technique to provide suggestions to the user. \
        <br><br>STATUS: Finished',
        image: "gifs/stamina.gif",
        link: "documents/stamina-report.pdf",
        tags: ["MobileApp", "Caffeine", "Wearable", "Sleep", "MachineLearning"]
    },
    // To add: Desktops, billsplitter, eebug, Rpi, NAS, Managr, Devops, Thumbgifs
];
var slides = "#slides";
var slideIndex = 0; //entries.length - 1;
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




