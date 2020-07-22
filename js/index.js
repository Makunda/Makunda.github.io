/**
 * Don't look at the JS code, it's dirty 
 */


 

// This code was stolen from Mister Chuck Grimmett, check is blog here : http://www.cagrimmett.com/til/2018/01/05/css-confetti.html 
class Confetti {
	  
	create(i) {
		var width = Math.random() * 8;
		var height = width * 0.4;
		var colourIdx = Math.ceil(Math.random() * 3);
		var colour = "red";
		switch(colourIdx) {
		  case 1:
			colour = "yellow";
			break;
		  case 2:
			colour = "blue";
			break;
		  default:
			colour = "red";
		}		
		$(`<div style="position: absolute;" class="${colour}-confetti confetti-${i}"></div>`).css({
		  "width" : width+"px",
		  "height" : height+"px",
		  "top" : -Math.random()*20+"%",
		  "left" : Math.random()*100+"%",
		  "opacity" : Math.random()+0.5,
		  "transform" : "rotate("+Math.random()*360+"deg)"
		}).appendTo('#project_section');  
		
		this.drop(i);
	  }
	  
	drop(x) {		
		$('.confetti-'+x).animate({
		  top: "100%",
		  left: "+="+Math.random()*15+"%"
		}, Math.random()*3000 + 3000, function() {
			$('.confetti-'+x).remove();
		});
	  }
	  

	launchConfetti() {
		for (var i = 0; i < 250; i++) {
			this.create(i);
		   
		  }
	  }
	  constructor() {
		
	  }
}



/** Darker bg */
var clientHeight = 0;
let last_known_scroll_position = 0;
let ticking = false;
function darkBackground() {

	last_known_scroll_position = window.scrollY;
  
	if (!ticking) {
	  window.requestAnimationFrame(function() {
		darkBackground();
		ticking = false;
	  });
  
	  ticking = true;
	}

	var bounding = document.getElementById('project_section').getBoundingClientRect();
	if(bounding.y > 0 && bounding.y < 1000) {
		
		opacity = 1 - (bounding.y) / 1000;
		document.getElementById('project_section').style.backgroundColor =  `rgba(52, 58, 64,${opacity})`;
	} else {
		document.getElementById('project_section').style.backgroundColor =  `rgba(52, 58, 64,1)`;
		window.removeEventListener('scroll', darkBackground, false);
		return 1;
	}
	
}



window.addEventListener('scroll', darkBackground, false);


var confetti = new Confetti();





