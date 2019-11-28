// Name: Nur Suhaira Bte Badrul Hisham
// UOW ID: 5841549
// Assignment 2 Task 5

$(document).ready(function()
{
	// 1. Animate color to logo
	var state = true;
	$('#artbtn').click(function() 
	{
		if (state)
		{
			$('.logo').animate(
			{
				backgroundColor: "#aec6cf",
				color: "white",
				fontSize: "65px"
			}, 3000);
		}
		else 
		{
			$('.logo').animate(
			{
				backgroundColor: "#89E894",
				color: "black",
				fontSize: "30px"
			}, 3000 );
		}
		
		state = !state;
    });
	
	// 2. Add class to promo & 3. remove class promoX
	$('button').click(function() 
	{
        if (this.id == "promobtn") 
		{
            $('.promo').addClass("promoX", "fast");
        } 
		else if(this.id == "arcbtn")
		{
            $('.promo').removeClass("promoX", "fast");
        }
    });
	
	// 4. Draggable of image events
	$('figure').draggable (); 
	
	// 5. Run selected effect on all images based on the drop down value
    // Set effect when click on button
    $('#effbtn').click (function() 
	{
		var selectedEffect = $('#etype').val();
		$('img').effect(selectedEffect, "slow");
    });
	
	// 6. Using datepicker for promo date
	var date = $('#datepicker').datepicker();
	
	// 7. Using dialog for promo
	$('#dialog').dialog();
	
	// 8. Using menu
	$('#menu').menu();
	
	// 9. Using tooltip for date
	$('#datepicker').tooltip();
	
	// 10. Using tabs for event descriptions
	$('#tabs').tabs();
	$('#tabs2').tabs();
	$('#tabs3').tabs();
	 
	// 11. Switching class of table header to another class
	// 12. Toggling to another class for table columns 
	$('#thbtn').click(function()
	{
		$('th').switchClass("th", "th2", "fast");
		$('td').toggleClass("td2", 1000);
		
	});
	
	// 13. Toggling figure images
	$('#exbtn').click(function()
	{
		$('#tog1').toggle("explode", 500);
	});
	
	$('#bouncebtn').click(function()
	{
		$('#tog3').toggle("bounce", 500);
	});
	
	$('#pulbtn').click(function()
	{
		$('#tog2').toggle("pulsate", 500);
	});
	
	$('#shakebtn').click(function()
	{
		$('#tog4').toggle("shake", 500);
	});	
	
	// 14. Using animation for figure images
	$("#walk").click(function()
	{
		$("#walkpic").animate({left: "-=700"}, 5000);
	});
	
	$("#walk2").click(function()
	{
		$("#walkpic2").animate({top: "+=400"}, 5000);
	});
	
	$("#walk3").click(function()
	{
		$("#walkpic3").animate({left: "+=700"}, 5000);
	});
	
	$("#walk4").click(function()
	{
		$("#walkpic4").animate({top: "-=400"}, 5000);
	});
});