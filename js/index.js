// ナビゲーションアニメーション
function navAnimation() {
	let scroll = $(window).scrollTop();
	let nav = document.getElementById("navBar");

	$(nav).addClass("navHideClass")
	if (scroll > 0) {
		$(nav).removeClass("navHideClass");
		$(nav).addClass("navShowClass");
	} else if (scroll = 0) {
		$(nav).removeClass("navShowClass");
		$(nav).addClass("navHideClass");
	}
}

// ロード時、スクロール時に実行
$(window).on('load scroll', function () {
	navAnimation();
});