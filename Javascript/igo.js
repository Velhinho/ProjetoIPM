function bigbutton(){
	window.location.assign("../main/mainmenu.html");
}


function getTime() {
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	if (mins < 10) {
		mins = "0" + mins;
	}
	document.getElementById("time").innerHTML = hours + ":" + mins;
}


function undo() {
	window.history.back();
}
