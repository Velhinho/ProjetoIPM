var citylist = ["Lisboa", "Leira", "Setubal"];
var currentcity = 0;


function loadcities() {
	document.getElementById("selectedcity").innerHTML = citylist[currentcity];
	document.getElementById("nextcity").innerHTML = citylist[currentcity+1];
}


function previouscity() {
	if (currentcity == 0) {
		return;
	}
	currentcity -= 1;

	if (currentcity == 0) {
		document.getElementById("previouscity").innerHTML = "";
	}
	else {
		document.getElementById("previouscity").innerHTML = citylist[currentcity-1];
	}
	document.getElementById("selectedcity").innerHTML = citylist[currentcity];
	document.getElementById("nextcity").innerHTML = citylist[currentcity+1];
}


function nextcity() {
	if (currentcity == citylist.length-1) {
		return;
	}

	currentcity += 1;
	document.getElementById("previouscity").innerHTML = citylist[currentcity-1];
	document.getElementById("selectedcity").innerHTML = citylist[currentcity];

	if (currentcity+1 == citylist.length) {
		document.getElementById("nextcity").innerHTML = "";
	}
	else {
		document.getElementById("nextcity").innerHTML = citylist[currentcity+1];
	}
}
