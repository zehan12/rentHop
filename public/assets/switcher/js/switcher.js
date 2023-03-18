// Swticher Cookie Base
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/

//p-scroll bar
const ps5 = new PerfectScrollbar('.right-sidebar', {
	useBothWheelAxes:true,
	suppressScrollX:true,
});
  
// DEMO Swticher Base
jQuery('.demo_changer .demo-icon').click(function(){
	if(jQuery('.demo_changer').hasClass("active")){
		jQuery('.demo_changer').animate({"right":"-253px"},function(){
			jQuery('.demo_changer').toggleClass("active");
		});						
	}else{
		jQuery('.demo_changer').animate({"right":"0px"},function(){
			jQuery('.demo_changer').toggleClass("active");
		});			
	} 
});

jQuery('.page').click(function(){
	if(jQuery('.demo_changer').hasClass("active")){
		jQuery('.demo_changer').animate({"right":"-253px"},function(){
			jQuery('.demo_changer').removeClass("active");
		});						
	}
	
});



