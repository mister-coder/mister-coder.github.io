/* jshint devel:true */
var leScroll = (function(leScroll) {
	'use strict';

	var currentSectionNumber = 0;
	
	var previousSectionNumber = -1;

	var sectionCount = document.querySelectorAll('section').length - 1;
	
	var maskHeight = document.getElementById('mask').offsetHeight; 
		
	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

	leScroll.scrolling = false;

        leScroll.move = function() {
        	if(iOS) {
	                document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * maskHeight) + 'px';
					
					updateVerticalNavigation(currentSectionNumber);

					animateSection(previousSectionNumber, currentSectionNumber);
	            } else {
	                document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * window.innerHeight) + 'px';
					
					updateVerticalNavigation(currentSectionNumber);

					//console.log('previous section: '+ previousSectionNumber + 'current section ' + currentSectionNumber);

					animateSection(previousSectionNumber, currentSectionNumber);
	        }
	};

	function updateVerticalNavigation(csn) { //csn = current section number
		for (let i = 0; i <= 3; i++) {
			if(i == csn) {
				document.getElementById("data_section_"+csn).setAttribute("style","opacity:0.8; -moz-opacity:0.5; filter:alpha(opacity=50)");
			} else {
				document.getElementById("data_section_"+i).setAttribute("style","opacity:0.2; -moz-opacity:0.5; filter:alpha(opacity=50)");
			}
			
		}
	}


	leScroll.moveUp = function() {
		if (currentSectionNumber === 0) {
            		return;
        	}
			previousSectionNumber = currentSectionNumber;
	        currentSectionNumber--;
	        leScroll.move();
	};

	leScroll.moveDown = function() {
		if (currentSectionNumber === sectionCount) {
        		return;
        	}
			previousSectionNumber = currentSectionNumber;
	        currentSectionNumber++;
	        leScroll.move();
	};

	leScroll.moveTo = function(sectionNumber) {
		previousSectionNumber = currentSectionNumber;
		currentSectionNumber = sectionNumber;
		leScroll.move();
	};

	leScroll.addEvent = function(element, sectionNumber) {
        	document.querySelector(element).addEventListener('click', function() {
                	leScroll.moveTo(sectionNumber);
		});
        };

        leScroll.setScrollTimeout = function(ms) {
    		setTimeout(function(){
            		leScroll.scrolling = false;
        	}, ms);
        };

	return leScroll;
	
})(leScroll || {});
