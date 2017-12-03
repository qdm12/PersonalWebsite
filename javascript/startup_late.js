console.log('startup_late.js: Started.');

function moreDetailsOnSkill(skillboxID) {
    var display = document.getElementById(skillboxID);
    display.innerHTML = "";
    switch (skillboxID){
        case "Crypto":
            display.innerHTML = "Bitcoin, Ethereum (Solidity)<br>Cryptography<br>Homomorphic encryption thesis<br>Network and web security<br>Kali Linux";
            break;
        case "Backend":
            display.innerHTML = "Golang<br>NodeJS<br>Python 2 & 3<br>Java & Scala<br>C++ and C"
            break;
        case "Frontend":
            display.innerHTML = "Javascript, CSS, HTML and Cordova/PhoneGap<br>Android SDK<br>Kivy (Python)"
            break;
        case "Devops":
            display.innerHTML = "Github, Zenhub, GitKraken & BitBucket<br>Vagrant and Virtual Box<br>Docker and IBM Bluemix<br>Travis CI and unit testing<br>Swagger and RESTful APIs";
            break;
        case "Databases":
            display.innerHTML = "MySQL & SQlite<br>Redis<br>Hadoop (Java, Python)<br>Impala, Hive, Spark ...<br>Cloudera Quickstart VMs and clusters";
            break;
        case "Design":
            display.innerHTML = "Adobe XD<br>inVision<br>Gimp<br>Patience and a decent taste";
            break;
        case "HPC":
            display.innerHTML = "GPUs with openCL (C++)<br>Multi-core / Multi-threading<br>";
            break;
        case "Management":
            display.innerHTML = "Corporate finance<br>Economics<br>Project management<br>Innovation management<br>Entrepreneurship<br>Accounting";
            break;
        case "Others":
            display.innerHTML = "ARM7, FPGA & Verilog<br>AI, Signal processing<br>Mathematics, Fundamental Algorithms & Control Engineering<br>Computer Assembly<br>English, french, spanish";
            break;
        default:
            display.innerHTML = "????????????";
    }
}
function restoreSkillBox(skillboxID) {
    var display = document.getElementById(skillboxID);
    display.innerHTML = "";
    display.innerHTML = skillboxID;
}
console.log('startup_late.js: Ended.');