<!doctype html>
<html>
	<head>
		<title>Animidle</title>
		<link rel="stylesheet" type="text/css" href="interface.css"/>
	</head>
	<body>
		<script type="text/javascript" src="main.js"></script>
		<div id="loadOverlay" class="overlayOpen">
			<h2>In the Beginning...</h2>
			<p>You are walking down the street.</p>
			<p>All of a sudden you see a bright light...</p>
			<p>When you wake up...</p>
			<p>you find yourself...</p>
			<p>in the world of...</p>
			<h3>NINJATO!</h3>
			<button onclick="closeOverlay()">Click here to Start</button>
		</div>
		<div id="gameSpace" class="gameInitial" style="display: none;">
			<h3>THIS IS WHERE THE GAME WILL GO</h3>
		</div>
		<!--
		<div style="background-color:gray">
			<h3>Actions</h3>
			<span id="forageLog"></span>
			<br />
			<button onclick="forage()">Forage</button>
		</div>
		<div style="background-color:lightblue">
			<h3>Inventory</h3>
			Sticks: <span id="sticks">0</span>
			<br />
			Berries: <span id="berries">0</span>
		</div>
		<div style="background-color:lightgreen">
			<h3>Map</h3>
			<canvas id="map" width="200" height="200"></canvas>
		</div>
		-->
	</body>
</html>
