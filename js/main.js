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
	 //initiate date picker
	 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

	 //initiate scrollables ( nicescroll )
	 $(".scrollable").niceScroll({cursorcolor: "#333", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
        cursorborder: "0px solid #fff", })





	/************************** end of doucment initialization ********************************/	


	/******************************* Events ***************************************/
	/*this block should handle every event that occurs in application main window*/

	//create-new anchor link to hidden navigation button
	$("#create-new-btn").on("click",".add-new-anchor",function(){
		if(currentPage==$(this).data("anchor"))
		{
			return true;
		}
		else if(currentPage.indexOf("create")!=-1)//check if one of create pages is already visible on stage , then implement a different animation for better UX
		{
		  $(".hidden-anchor[data-page='"+$(this).data("anchor")+"']").data("animation",19).trigger('click');

		}
		else
		{
		  $(".hidden-anchor[data-page='"+$(this).data("anchor")+"']").data("animation",17).trigger('click');	// if fired when no create pages are on stage , use then normal page transition
		}

		
	});



	//navigation items events

	$("#nav-wrap").on("click",".nav-main-item",function(){

		var $clicked=$(this);
		

		if($clicked.hasClass("main-item-active") || $clicked.hasClass("disabled"))//check if clicked item is already active , or animation is in progress
		{
			return false;
		}
			
		else
		{
			//Disable all buttons till animation ends , removed on transition.js (function onEndAnimation)
			$(".nav-main-item").addClass("disabled")
			//change animation-data corresponding to next or previous tab clicked , exclude create pages hidden button
			if(!$clicked.hasClass("hidden-anchor")) //check if clicked item (invoked via trigger) is a hidden-anchor
			{
				if($(".main-item-active").index()>$clicked.index())
				{
				$clicked.data("animation",17);
				}				
				else
				{
				$clicked.data("animation",18);
				}

			}
			
				
			$(".main-item-active").removeClass("main-item-active");
			$clicked.addClass("main-item-active");
			pageAnimate($clicked); // a function found in transition.js
			currentPage=$clicked.data("page"); //assign currentPage to current page on stage
		}

	})


	/************************ End of Document Events *****************************/

	/************************************* Functions ******************************************/
	/*this block should handle every function that can be invoked throughout whole application*/

    
})