
var projects=[
{name:"veronica1",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica2",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica1",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica2",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica1",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica2",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica1",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica2",startDate:"25th jan 2011",endDate:"28th aug 2017"},
{name:"veronica3",startDate:"25th jan 2011",endDate:"28th aug 2017"}
]
var meetings=[
{
title:"mms bugs discussion",location:"online",startDate:"25th jan 2011",startTime:"12:50 am",duration:"2 HRs",members:"12"
},
{
title:"mms bugs discussion",location:"online",startDate:"25th jan 2011",startTime:"12:50 am",duration:"2 HRs",members:"12"

}
]
var members=[
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
{name:"tony stark",role:"Stark Industries CEO",picture:"url(profile_pics/tony.jpg)"},
{name:"bruce banner",role:"Nuclear physicist",picture:"url(profile_pics/bruce.jpg)"},
{name:"collin farrell",role:"Swat officer",picture:"url(profile_pics/collin.jpg)"},
{name:"bruce wayne",role:"business man",picture:"url(profile_pics/ben.jpg)"},
]



blocks.query(projects,$("#projects"))
blocks.query(meetings,$("#meetings"))
blocks.query(members,$(".contact-list"))