 
$(document).ready(function() {
    createCookie("passion",1,.014666);
	$(function() {
		$('#slides').slidesjs({
			width: 400,
			height: 225,
			start: 1,
			navigation: false,
			effect: {
				slide: {
				speed: 700,
				// [number] Speed in milliseconds of the fade animation.
				crossfade: true
				// [boolean] Cross-fade the transition.
				}
			},
			play: {
			effect: "slide",
			auto: true,
			interval: 6000
			}
		});

		$('#slides2').slidesjs({
			width: 400,
			height: 225,
			navigation: false,
			start: 1,
			effect: {
				slide: {
				speed: 700,
				// [number] Speed in milliseconds of the fade animation.
				crossfade: true
				// [boolean] Cross-fade the transition.
				}
			},
			play: {
			effect: "slide",
			auto: true,
			interval: 6000
			}
		});

		$('#slides3').slidesjs({
			width: 400,
			height: 225,
			navigation: false,
			start: 1,
			effect: {
				slide: {
				speed: 700,
				// [number] Speed in milliseconds of the fade animation.
				crossfade: true
				// [boolean] Cross-fade the transition.
				}
			},
			play: {
			effect: "slide",
			auto: true,
			interval: 6000
			}
		});

		$('#slides4').slidesjs({
			width: 400,
			height: 225,
			navigation: false,
			start: 1,
			effect: {
				slide: {
				speed: 700,
				// [number] Speed in milliseconds of the fade animation.
				crossfade: true
				// [boolean] Cross-fade the transition.
				}
			},
			play: {
			effect: "slide",
			auto: true,
			interval: 6000
			}
		});
	});
});
