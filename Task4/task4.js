// Name: Nur Suhaira Bte Badrul Hisham
// UOW ID: 5841549
// Assignment 2 Task 4

$(document).ready(function()
{
	$("#walk").click(function()
    {
        for (i = 0; i < 100; i++)
        {
            var div = $("#dog");
            div.animate({left: '1100px'}, "slow");
            div.animate({left: '0px'}, "slow");
        }
    });

    $("#stop").click(function()
    {
        $("#dog").stop(true, false);
    });
});