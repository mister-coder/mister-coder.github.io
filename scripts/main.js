/* jshint devel:true */
var leScroll = (function(leScroll) {
	'use strict';

	var currentSectionNumber = 0;

	var sectionCount = document.querySelectorAll('section').length - 1;
	
	var maskHeight = document.getElementById('mask').offsetHeight; 
		
	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

	leScroll.scrolling = false;

        leScroll.move = function() {
        	if(iOS) {
	                document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * maskHeight) + 'px';
	            } else {
	                document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * window.innerHeight) + 5 + 'px';
					
					updateVerticalNavigation(currentSectionNumber);
	        }
	};

	function updateVerticalNavigation(csn) { //csn = current section number
		for (let i = 0; i <= 3; i++) {
			if(i == csn) {
				document.getElementById("data_section_"+csn).setAttribute("style","opacity:0.6; -moz-opacity:0.5; filter:alpha(opacity=50)");
			} else {
				document.getElementById("data_section_"+i).setAttribute("style","opacity:0.2; -moz-opacity:0.5; filter:alpha(opacity=50)");
			}
			
		}
		
        
        
      }

	leScroll.moveUp = function() {
		if (currentSectionNumber === 0) {
            		return;
        	}
	        currentSectionNumber--;
	        leScroll.move();
	};

	leScroll.moveDown = function() {
		if (currentSectionNumber === sectionCount) {
        		return;
        	}
	        currentSectionNumber++;
	        leScroll.move();
	};

	leScroll.moveTo = function(sectionNumber) {
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
