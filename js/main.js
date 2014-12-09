
$(document).ready(function(){
	set_loader();
});

$(window).resize(function(){
	set_loader();
});

function set_loader(){
	var height = $(window).height();
	var width = $(window).width();
	center_loader(height,width);
};


function center_loader(h,w){
	var margin_top = Math.floor(h/2 - $('#loader-big-content').height()/2);
	console.log(margin_top);
	$('#loader-big-content').css('top', margin_top);
}
