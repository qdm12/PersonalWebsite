console.log('startup_late.js: Started.');

function moreDetailsOnSkill(skillboxID) {
	var display = document.getElementById(skillboxID);
	display.innerHTML = "";
	switch (skillboxID){
		case "Crypto":
			display.innerHTML = "Bitcoin<br>Cryptography<br>Ethereum<br>Homomorphic encryption thesis<br>Network and web security<br>Kali Linux";
			break;
		case "Programming":
			display.innerHTML = "Python 2 and 3<br>C++ and C<br>Java and Android<br>Javascript<br>Scala<br>RabbitMQ";
			break;
		case "Devops":
			display.innerHTML = "Github, Zenhub, GitKraken & BitBucket<br>Vagrant and Virtual Box<br>Docker and IBM Bluemix<br>Travis CI and unit testing<br>Swagger and RESTful APIs";
			break;
		case "Web":
			display.innerHTML = "HTML, CSS, Javascript, a bit of PHP<br>Database Systems: SQL and Redis<br>Network architecture course";
			break;
		case "Design":
			display.innerHTML = "Adobe XD<br>inVision<br>Gimp<br>Patience and a decent taste";
			break;
		case "HPC":
			display.innerHTML = "Hadoop (in Java and Python)<br>GPUs with openCL (C++)<br>Multi-core / Multi-threading<br>Cloudera QuickStart VM";
			break;
		case "Management":
			display.innerHTML = "Corporate finance<br>Economics<br>Project management<br>Innovation management<br>Entrepreneurship<br>Accounting";
			break;
		case "Others":
			display.innerHTML = "ARM7, FPGA Programming and Verilog<br>AI, Digital signal processing<br>Mathematics, Fundamental Algorithms and Control Engineering<br>Computer Assembly";
			break;
		case "Languages":
			display.innerHTML = "English<br>French<br>Spanish";
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