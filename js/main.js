	/************** document init **************/
$(document).ready(function () {

	/************************************ initialization****************************************/
	/*this block should handle all  actions that should be initiated in application main window*/
	$('#calendar').clndr();

	/******************************* events ***************************************/
	/*this block should handle every event that occurs in application main window*/



	//navigation items events

	$("#nav-wrap").on("click",".nav-main-item",function(){
		var $clicked=$(this)

		if($clicked.hasClass("main-item-active") || $clicked.hasClass("disabled"))
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



	/************** end of doucment initialization **************/	
})