var	navToggleBtn = document.getElementById('nav-toggle-btn'),
		navbarIcon = document.querySelector("#nav-toggle-btn i"),
		navbarLinks = document.querySelector('#navbar-links');

navToggleBtn.onclick = function (){
	'use strict'
	// navbarLinks.style.transition = 'all 2s ease-in-out';
	navbarLinks.style.height = 'auto';
		navbarLinks.parentElement.style.minHeight = '398px';

	if (navbarIcon.classList.contains('fa-bars')) {
		navbarIcon.setAttribute("class", "fa fa-times");
	} else {
		navbarIcon.setAttribute("class", "fa fa-bars");
		navbarLinks.style.height = 0;
		navbarLinks.parentElement.style.minHeight = 0;
	}
}

$(document).ready(function () {
  $("body").niceScroll({
    cursorcolor:"dodgerblue",
    cursorwidth:"10px"
  });
})

// navToggleBtn.onclick = setInterval(navbar, 3);

// function navbar() {
// 	'use strict'
// 	this.nextElementSibling.style.display = 'flex';

// 	if (navbarIcon.classList.contains('fa-bars')) {
// 		navbarIcon.setAttribute("class", "fa fa-times");
// 	} else {
// 		navbarIcon.setAttribute("class", "fa fa-bars");	
// 	}	

// 	clearInterval();
// }



// /*global plusplus:true*/

// var myBtn = document.getElementById('goup');

// window.onscroll = function () {

// 	'use strict';

// 	if (window.pageYOffset >= 400) {

// 		myBtn.style.display = 'block';

// 	} else {

// 		myBtn.style.display = 'none';

// 	}

// };

// myBtn.onclick = function () {

// 	'use strict';

// 	$("html,body").animate({ scrollTop: 0 }, 600);
// };

// var bioText = "My name is \"Mohamed Atef\" I`m 22 years old I am from Egypt and I live in Wasta, Bani-Swef I love coding I like playing tennis I hope to move from Just a Coder to a Software Engineer",

// 	mybio = document.getElementById('my-bio'),

// 	i = 0;

// window.onload = function () {

// 	'use strict';

// 	var typeWriter = setInterval(function () {

// 		mybio.textContent += bioText[i];

// 		i = i + 1;

// 		if (i > bioText.length - 1) {

// 			clearInterval(typeWriter);
// 		}

// 	}, 100);
// };

// var myArrowDown = document.getElementById("down");

// myArrowDown.onclick = function (){

// 	'use strict';

// 	$("html,body").animate({

// 		scrollTop: $("#about").offset().top

// 	}, 600);

// }
