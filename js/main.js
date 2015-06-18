	/************** document init **************/
$(document).ready(function () {

	var currentPage="feed"; //current on stage page visible to user

	/************************************ initialization****************************************/
	/*this block should handle all  actions that should be initiated in application main window*/

	//initiate calendar
	$('#calendar').clndr();

	//initiate create new dropdown menu
	 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false// Displays dropdown below the button
    }
  );





	/************************** end of doucment initialization ********************************/	


	/******************************* Events ***************************************/
	/*this block should handle every event that occurs in application main window*/

	//create-new anchor link to hidden navigation button
	$("#create-new-btn").on("click",".add-new-anchor",function(){
		if(currentPage=="create")//check if create page is already visible on stage , then implement a different animation for better UX
		{

		}
		else
		{
		  $('#create-new-btn-anchor').trigger('click');	
		}
		
	});



	//navigation items events

	$("#nav-wrap").on("click",".nav-main-item",function(){
		var $clicked=$(this);
		currentPage=$clicked.data("page"); //assign currentPage to current page on stage

		if($clicked.hasClass("main-item-active") || $clicked.hasClass("disabled"))//check if clicked item is already active , or animation is in progress
		{
			return false;
		}
			
		else
		{
			//Disable all buttons till animation ends , removed on transition.js (function onEndAnimation)
			$(".nav-main-item").addClass("disabled")
			//change animation-data corresponding to next or previous tab clicked
			if($(".main-item-active").index()>$clicked.index())
			{
				$clicked.data("animation",17);
			}				
			else
			{
				$clicked.data("animation",18);
			}
				
			$(".main-item-active").removeClass("main-item-active");
			$clicked.addClass("main-item-active");
			pageAnimate($clicked); // a function found in transition.js
		}

	})

	/************************ End of Document Events *****************************/
})