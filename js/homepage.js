var homePageAboutImg = document.getElementById('about-img-desc'),
		homePageAboutBio = document.getElementById('about-home-back'),
		aboutBioGoBack = document.getElementById('about-bio-go-back');

		homePageAboutImg.onclick = function (){

			'use strict';
		
			if (window.innerWidth <= 768) {
				homePageAboutImg.style.transform = 'rotateY(180deg)';
				homePageAboutBio.style.transform = 'rotateY(0deg)';
			}
		}
		
		window.onresize = function (){
			'use strict';
			if (!(window.innerWidth <= 768 && homePageAboutImg.style.display =='none')) {
				homePageAboutBio.style.transform = 'rotateY(0deg)';
			} else {
				homePageAboutBio.style.transform = 'rotateY(180deg)';
			}
		}
		
		aboutBioGoBack.onclick = function (event){
		
			'use strict';
		
			event.preventDefault();
		
			homePageAboutImg.style.transform = 'rotateY(0deg)';
			homePageAboutBio.style.transform = 'rotateY(180deg)';
		
		}