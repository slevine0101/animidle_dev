var sticks = 0;
var berries = 0;
var map = document.getElementById('map')

function closeOverlay(){
	document.getElementById("loadOverlay").style.display = "none";
	document.getElementById("gameSpace").style.display = "block";
}


function forage(){
	var forageLog = "You found ";
	var sticks_found = 0;
	var berries_found = 0;

	var stick_rand = Math.floor(Math.random() * 10);
	var berries_find_rand = Math.floor(Math.random() * 10);

	if (stick_rand < 6) {
		sticks_found = 1;
		stick_text = "1 Stick";
	}
	else if (stick_rand < 9) {
		sticks_found = 2;
		stick_text = "2 Sticks";
	}
	else {
		sticks_found = 3;
		stick_text = "3 Sticks";
	}

	sticks += sticks_found;
	forageLog += stick_text;

	if (berries_find_rand == 9) {
		var berries_rand = Math.floor(Math.random() * 10);

		if (berries_rand < 9) {
			berries_found = 1;
			berry_text = " and 1 Berry";
		}
		else {
			berries_found = 2;
			berry_text = " and 2 Berries";
		}

		berries += berries_found;
		forageLog += berry_text;
	}

	document.getElementById("forageLog").innerHTML = forageLog;
	document.getElementById("sticks").innerHTML = sticks;
	document.getElementById("berries").innerHTML = berries;
};