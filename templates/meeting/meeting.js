/****************** Meeting Initializations ********************/
var meetingTopWindow,meetingBottomWindow,modulesHiddenHolder;
meetingTopWindow=$("#meeting-top-window .window-content");
meetingBottomWindow=$("#meeting-bottom-window .window-content");
meetingTopWindow.addClass("meeting-active-window")
modulesHiddenHolder=$(".modules-hidden-holder");

var displayMode="double";

/*************** End of Meeting Initializations ****************/


/********************* Meeting Events **************************/

$(".window .expand").on("click",function(){	
	$(".full").removeClass("full");
	$(".not-full").removeClass("not-full");
	$(this).parents(".window").addClass("full");
	$(".window").not(".full").addClass("not-full");
	displayMode="single";
	//change full window to be active window
	$(".meeting-active-window").removeClass("meeting-active-window");
	$(".full .window-content").addClass("meeting-active-window");
	//move shrunk window content to hidden container
	var moduleToRemove=$(".not-full").find(".meeting-module-window").attr("id");
	modulesHiddenHolder.append($("#"+moduleToRemove));
})

$(".window .shrink").on("click",function(){
    //if returned to double mode , append first module in hidden container to the empty window	
	if(displayMode=="single")
	{
		$(".window.not-full .window-content").append(modulesHiddenHolder.find('.meeting-module-window:first'))
	}
	$(".full").removeClass("full");
	$(".not-full").removeClass("not-full");
	displayMode="double";
})



/********************* Meeting Events end **********************/

/******************* Experimental Queries **********************/
var meetingModules=[
{id:"audio-recorder",name:"audio recorder",icon:"icon-voice29",color:"#00A9A0"},
{id:"screen-sharer",name:"screen sharer",icon:"icon-computer-screen35",color:"#00A3D9"},
{id:"file-sharer",name:"file sharer",icon:"icon-share15",color:"#004C66"},
{id:"audio-chat",name:"audio chat",icon:"icon-headset",color:"#69008C"},
{id:"video-chat",name:"video chat",icon:"icon-video35",color:"#F97C00"},
{id:"votes",name:"votes",icon:"icon-thumb52",color:"#626257"},
{id:"my-documents",name:"my documents",icon:"icon-documents",color:"#EEEEEE"},
{id:"my-tasks",name:"my tasks",icon:"icon-tasks",color:"#81869d"},
{id:"my-members",name:"members",icon:"icon-members",color:"#81A098"}
]
blocks.query(meetingModules,$("#meeting-modules,.modules-hidden-holder"));
/***************** End of Experimental Queries *****************/



/********************** Meeting Events ************************/
$(".meeting-module-btn a").on("click",function(){
	//check if the choosen module is currently on stage , for both single and double mode
	var moduleToAppend=$(this).data("link");
	//case double mode do nothing , return false
	if(displayMode=="double"&&($(".window").find("#"+moduleToAppend).length>0))
	{
		return false;
	}	

	//else check for display mode

	else if(displayMode=="double")
	{
	    var meetingActiveWindow=$(".meeting-active-window");
		var moduleToRemove=meetingActiveWindow.find(".meeting-module-window").attr("id");			
		meetingActiveWindow.append($("#"+moduleToAppend));
		modulesHiddenHolder.append($("#"+moduleToRemove));
		$(".window .window-content").toggleClass("meeting-active-window");
    }
    else if(displayMode=="single")
    {
    	var meetingActiveWindow=$(".meeting-active-window");
		var moduleToRemove=meetingActiveWindow.find(".meeting-module-window").attr("id");
		modulesHiddenHolder.append($("#"+moduleToRemove));				
		meetingActiveWindow.append($("#"+moduleToAppend));
			
    }
})

/****************** End of Meeting Events ********************/

/****************** Meeting Functions ********************/


/****************** End of Meeting Functions *******************/


