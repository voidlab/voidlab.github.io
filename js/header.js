$(document).ready(function () {
	var nav = $('.menu-icon');
	console.log(nav);
    nav.bind('click', function () {
    	var navHeight = $('.site-nav .trigger-wrapper').height();
    	var newNavHeight = $('.site-nav .trigger').outerHeight();
    	console.log("nav height: " + navHeight + " newNavHeight" + newNavHeight);

    	if (navHeight == 0) {
    		$('.site-nav .trigger-wrapper').animate({'height':newNavHeight+'px'}, 500);
    	} else {
    		$('.site-nav .trigger-wrapper').animate({'height':'0px'}, 500);
    	}
    	return true;
    });
});