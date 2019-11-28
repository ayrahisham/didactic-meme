// Name: Nur Suhaira Bte Badrul Hisham
// UOW ID: 5841549
// Assignment 2 Task 3

function dice (alt, width, height)
{
	this.alt = alt;
	this.width = width;
	this.height = height;
	this.faces = ["images/flower1.jpg", "images/flower2.jpg", "images/flower3.jpg", "images/flower4.jpg", "images/flower5.jpg", "images/flower6.jpg"];
	this.randomRoll = function ()
	{
		var randNum = Math.floor (Math.random() * this.faces.length);
		return "<img src = " + this.faces [randNum] + " alt = " + this.alt + " width = " + this.width
		+ " height = " + this.height + " />";
	};
}

function rollDice ()
{
	var dicedisplay = "";
	die = new dice ("flower", "300", "250");
	dicedisplay = die.randomRoll();
	document.getElementById("image").innerHTML = dicedisplay;
}