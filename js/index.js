'use strict';

function navAnimation() {
	let scroll = $(window).scrollTop();
	let nav = document.getElementById("navBar");
	// console.log(scroll);
	// console.log(nav);

	$(nav).addClass("navHideClass")

	if (scroll > 0) {
		$(nav).removeClass("navHideClass");
		$(nav).addClass("navShowClass");
	} else if (scroll = 0) {
		$(nav).removeClass("navShowClass");
		$(nav).addClass("navHideClass");
	}
	
}

$(window).on('load', function () {
	navAnimation();
});

$(window).scroll(function () {
  navAnimation();
});




