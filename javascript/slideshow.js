// User inputs
var entries = [
    {
        title: "The swiss knife VPN client in a container (2300K+ Pulls)",
        description: 'The best VPN client container to private internet access & Mullvad servers \
        <br><br>&#9673 Connect other containers to it \
        <br>&#9673 Supervising program written in Go \
        <br>&#9673 Choose your VPN region, encryption and protocol \
        <br>&#9673 Built-in firewall, DNS over TLS and proxies \
        <br>&#9673 Access local ports of containers connected to the VPN with a proxy \
        <br>&#9673 50MB Alpine based image \
        <br><br>STATUS: Finished',
        image: "https://raw.githubusercontent.com/qdm12/private-internet-access-docker/master/title.svg?sanitize=true",
        link: "https://github.com/qdm12/private-internet-access-docker",
        tags: ["Docker", "VPN", "Automation", "Networking", "OpenVPN", "Alpine", "Iptables", "DNS over TLS"]
    },
    {
        title: "Cloudflare DNS over TLS Docker (700K+ Pulls)",
        description: 'The best DNS over TLS client/server container \
        <br><br>&#9673 DNS caching server with Unbound \
        <br>&#9673 Uses DNS over TLS service providers (Cloudflare, Google, etc.) \
        <br>&#9673 Supervising program written in Go \
        <br>&#9673 DNSSec, DNS rebinding protection \
        <br>&#9673 Docker healthcheck \
        <br>&#9673 Blocks malicious IPs and hostnames \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/cloudflare-dns-server/raw/master/readme/title.png",
        link: "https://github.com/qdm12/cloudflare-dns-server",
        tags: ["Docker", "DNS over TLS", "Networking", "Alpine", "Popular"]
    },
    {
        title: "DDNS Updater Docker (700K+ Pulls)",
        description: 'Update the IP address of A records on multiple domain name providers every 5 minutes \
        <br><br>&#9673 <b>9MB</b> image based on Scratch and a static Golang binary \
        <br>&#9673 <b>Multiple domain providers:</b> GoDaddy, Namecheap, DuckDNS, NoIP, DNSPod, Infomaniak, etc. \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/ddns-updater/raw/master/readme/title.png",
        link: "https://github.com/qdm12/ddns-updater",
        tags: ["Docker", "DDNS", "Automation", "Networking", "Golang", "Scratch"]
    },
    {
        title: "Golang development container",
        description: 'The ultimate VSCode development container for Go  \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/godevcontainer/raw/master/title.png",
        link: "https://github.com/qdm12/godevcontainer",
        tags: ["Docker", "Go", "VSCode", "Alpine"]
    },
    {
        title: "React development container",
        description: 'The ultimate VSCode development container for React  \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/reactdevcontainer/raw/master/title.png",
        link: "https://github.com/qdm12/reactdevcontainer",
        tags: ["Docker", "React", "VSCode", "Alpine"]
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
        title: "Big Data Project: Bitcoin Uses",
        description: "The Bitcoin blockchain was analyzed from 2009 up to December 2017 to \
        estimate the uses of bitcoins. \
        <br>It was also correlated with Reddit data and venues data from Coinmap. \
        <br><br>The two main results researched are: \
        <br>&#9673 The monthly counts of transaction outputs belonging to different USD ranges \
        <br>&#9673 The monthly cumulative amounts of these outputs belonging to different USD ranges \
        <br><br>The miner rewards, self-transfers and change outputs are ignored. \
        <br><br>STATUS: Finished",
        image: "images/bitcoinuses.png",
        link: 'https://qdm12.github.io/BitcoinUses/results',
        tags: ["MapReduce", "Java", "HadoopCryptoLedger", "BigData", "Bitcoin", "Cryptocurrencies"]
    },
    {
        title: "Derivatex - Smart pseudo random password generator",
        description: "CLI to generate deterministically strong unique passwords. \
        <br><br>It uses various cryptographic techniques to protect your passwords \
        <br><br>&#9673 Strong generated passwords \
        <br>&#9673 Valid passwords with digits, alpha and symbols \
        <br>&#9673 Keep your master digest file safe on your device \
        <br>&#9673 Reconstruct your master digest file with your master password and birthdate \
        <br><br>STATUS: Working but still a lot to do!",
        image: "https://github.com/techsek/derivatex/raw/master/readme/logo.png",
        link: "https://github.com/qdm12/techsek/derivatex",
        tags: ["Cryptography", "Security", "Golang", "Passwords", "CLI", "Argon2ID"]
    },
    {
        title: "COD4X Dedicated server Docker",
        description: '<br><br>STATUS: Finished',
        image: "https://github.com/qdm12/cod4-docker/raw/master/images/title.png",
        link: "https://github.com/qdm12/cod4-docker",
        tags: ["Docker", "Gaming", "Alpine"]
    },
    {
        title: "Spigot Server Docker",
        description: 'Spigot Minecraft server in a container, based on: \
        <br>&#9673 Alpine and OpenJRE 8 - <b>130MB</b> image \
        <br>&#9673 It uses about 300MB of RAM and little CPU \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/spigot-docker/raw/master/readme/title.png",
        link: "https://github.com/qdm12/spigot-docker",
        tags: ["Docker", "Minecraft", "Spigot", "Java", "Alpine", "Automation"]
    },
    {
        title: "Youtube Downloader Docker",
        description: 'Download with a self-updated youtube-dl using command line arguments on Docker \
        <br><br>Based on Alpine, Python 2.7 and FFMPEG - <b>100MB</b> image \
        <br><br>STATUS: Finished',
        image: "https://github.com/qdm12/youtube-dl-docker/raw/master/title.png",
        link: "https://github.com/qdm12/youtube-dl-docker",
        tags: ["Docker", "Youtube-dl", "Alpine", "FFMPEG", "Automation"]
    },
    {
        title: "AdsUp (business idea only)",
        description: 'AdsUp is a platform bridging brands, social causes and individual supporters through <b>advertising</b>. \
        <br><br><b>Supporters</b> unite together and donate <b>a few seconds of their time</b> watching ads they partially choose on our mobile app. This generates revenue used to support a social cause of their choice. \
        <br><br><b>Supporters</b> also gain loyalty points for a specific brand by sharing their ads and by watching them. \
        <br<br>Finally, <b>supporters</b> can easily create a cause from Twitter or Facebook by sharing the weblink with our mobile app. \
        <br><br>STATUS: Paused',
        image: "images/adsup.png",
        link: "https://sites.google.com/view/adsup/home",
        tags: ["MobileApp", "Social", "Business"]
    },
    {
        title: "Stamina",
        description: 'Mobile app and backend to find the optimal coffee intake schedule for a person. \
        <br>&#9673 Maximise performance during the day \
        <br>&#9673 Ensure high quality sleep at night \
        <br><br>Monitors analyses the activity of the user over several days, with smartphone and smartwatch sensors. \
        <br><br>A server stores and analyses the data with a clustering machine learning technique to provide suggestions to the user. \
        <br><br>STATUS: Finished/abandoned',
        image: "gifs/stamina.gif",
        link: "documents/stamina-report.pdf",
        tags: ["MobileApp", "Caffeine", "Wearable", "Sleep", "MachineLearning"]
    },
    {
        title: "Redio (design only)",
        description: 'Design of a mobile app for music artists using Adobe XD beta \
        <br><br>STATUS: Finished',
        image: "gifs/redio.gif",
        link: "",
        tags: ["MobileApp", "Design", "Adobe XD"]
    },
    // To add: Desktops, NAS, Ryzen, etc.
];
var slides = "#Projects > #slides";
var slideIndex = entries.length - 1;

// Logic
var autoplayID = null;
function goToSlide(fromIndex, toIndex) {
    $(slides + " > #dots > #dot-" + fromIndex).css({background: "transparent"});
    $(slides + " > #dots > #dot-" + toIndex).css({background: "rgb(130, 170, 200)"});
    // Remove current slide
    $(slides + " > #slide").remove();
    // Create new slide
    var entry = entries[toIndex];
    var slide = $('<div id="slide"></div>');
    var title;
    if (entry.link.length > 0) {
        title = $('<div class="title"><a target="_blank" href=' + entry.link + '>' + entry.title + '</a></div>');
    } else {
        title = $('<div class="title">'+entry.title + '</div>')
    }
    title.appendTo(slide);
    var tags = $('<div class="tags"></div>');
    for (j = 0; j < entry.tags.length; j += 1) {
        $('<div class="tag"><b>#' + entry.tags[j] + '</b></div>').appendTo(tags);
    }
    tags.appendTo(slide);
    var imageContainer = $('<div class="imageContainer"></div>');
    $('<img class="image" src="' + entry.image + '"/>').appendTo(imageContainer);
    imageContainer.appendTo(slide);
    $('<div class="description">' + entry.description + '</div>').appendTo(slide);
    $('<div style="clear:both;"></div>').appendTo(slide);
    $('<div class="link"><a target="_blank" href=' + entry.link + '>Click <b>here</b></a> for more details</div>').appendTo(slide);
    slide.appendTo($(slides));
    return toIndex;
}

function autoPlay() {
    if (autoplayID != null) {
        clearInterval(autoplayID)
    }
    autoplayID = setInterval(function () {
        var toIndex = Number(slideIndex) + 1;
        if (toIndex > entries.length - 1) {
            toIndex = 0;
        }
        slideIndex = goToSlide(slideIndex, toIndex);
    }, 7000);
}

function previousSlide() {
    var toIndex = Number(slideIndex) - 1;
    if (toIndex < 0) {
        toIndex = entries.length - 1;
    }
    clearInterval(autoplayID);
    slideIndex = goToSlide(slideIndex, toIndex);
    setTimeout(autoPlay, 12000);
}

function nextSlide() {
    var toIndex = Number(slideIndex) + 1;
    if (toIndex > entries.length - 1) {
        toIndex = 0;
    }
    clearInterval(autoplayID);
    slideIndex = goToSlide(slideIndex, toIndex);
    setTimeout(autoPlay, 7000);
}

$(document).ready(function () {
    // Creates the dots
    for (var i = 0; i < entries.length; i++) {
        $('<div id="dot-' + i + '" class="dot"></div>').appendTo($(slides + " > #dots"));
    }
    $(slides + " > #dots > .dot").click(function () {
        var toIndex = this.id.slice(-1);
        clearInterval(autoplayID);
        slideIndex = goToSlide(slideIndex, toIndex);
        setTimeout(autoPlay, 10000);
    });

    nextSlide();
    autoPlay();

    // Previous Button
    $(slides + " > #previous").click(function () {
        previousSlide();
    });

    // Next Button
    $(slides + " > #next").click(function () {
        nextSlide();
    });

    // Touch swipe
    $(slides + " > .slide").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction === "left") {
                nextSlide();
            } else if (direction === "right") {
                previousSlide();
            }
        },
        allowPageScroll: "vertical"
    });
});




