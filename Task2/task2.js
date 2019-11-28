// Name: Nur Suhaira Bte Badrul Hisham
// UOW ID: 5841549
// Assignment 2 Task 2

$(document).ready(function()
{
	$("td").mouseover(function()
	{
		$(this).css("cursor", "pointer");
	});
	
	$("td").click(function(c)
	{
		$("td").removeClass("highlight");
		var selectedcell = $(c.target).closest ("td");
		selectedcell.addClass ("highlight");
	});
});