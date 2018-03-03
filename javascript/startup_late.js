var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

$(".skillbox").mouseover(function () {
    switch (this.id) {
    case "Crypto":
        this.innerHTML = "Bitcoin, Ethereum, Cardano<br>Network and web security<br>Cryptography<br>Homomorphic encryption thesis<br>Kali Linux";
        break;
    case "Backend":
        this.innerHTML = "Python, Golang, NodeJS<br>.NET, Java, Scala<br>RESTful, GraphQL<br>C++, C<br>GPUs with openCL";
        break;
    case "Frontend":
        this.innerHTML = "HTML-5, CSS, JS<br>React Native, Android SDK<br>Cordova, PhoneGap<br>.NET, Kivy (Python)"
        break;
    case "Devops and Cloud":
        this.innerHTML = "Docker, Vagrant and VirtualBox<br>Git, Github, Gitea and Gitlab<br>Zenhub, GitKraken, Swagger<br>Travis CI and unit testing<br>Google Cloud, AWS, Bluemix";
        break;
    case "Database and analytics":
        this.innerHTML = "MySQL, SQlite<br>Redis<br>Hadoop and Map Reduce (Java, Python)<br>Impala, Hive, Spark";
        break;
    case "Design":
        this.innerHTML = "Adobe XD, inVision<br>Gimp, Photofiltre<br>Patience and a decent taste";
        break;
    case "Server admin":
        this.innerHTML = "SSH, Shell, Bash scripting<br>Users and groups management<br>Apache, Nginx, Caddy<br>Ubuntu, Debian, CentOS, DSM";
        break;
    case "Management":
        this.innerHTML = "Corporate finance<br>Economics<br>Entrepreneurship and startups<br>Project management<br>Innovation management<br>Accounting";
        break;
    case "Others":
        this.innerHTML = "English, French, Spanish<br>ARM7, FPGA & Verilog<br>AI, Signal processing<br>Power engineering, Control Engineering<br>Computer architecture<br>Android OS, NFC";
        break;
    default:
        this.innerHTML = "????????????";
    }
});
$(".skillbox").mouseleave(function () {
    this.innerHTML = this.id;
});

$.getScript(
    'javascript/particles.min.js',
    function() {
        if (isMobile) {
            particlesJS.load('particles', 'config/particles_mobile.json');
        } else {
            particlesJS.load('particles', 'config/particles.json');
        }
    }
);