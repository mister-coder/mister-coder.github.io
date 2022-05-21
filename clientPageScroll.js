if(window.location.pathname == '/' || window.location.pathname == '/index.html') { 
(function (window, document, leScroll, undefined) {
	'use strict';

    var listItems = document.getElementsByTagName('li');

	var keyCodes = {
		up: 38,
		down: 40
	};

    var wheel = function(event){
        var delta = 0;

        var currentEvent = event || window.event;
        //alert(currentEvent.detail / 3);

        if (currentEvent.wheelDelta) {
            delta = (window.opera ? -1 : 1) * currentEvent.wheelDelta / 120;            
        } else if (currentEvent.detail) {
            delta = -currentEvent.detail / 3;
        }
        //console.log(delta);
        if (delta) {
            mousewheelHandle(delta);
        }
    };

    var wheel2 = function(event) {
        var st = window.pageYOffset || document.documentElement.scrollTop;
/*
        if(st > lastScrollTop) {
            mousewheelHandle(0);
            alert('down');
        } else {
            mousewheelHandle(1);
            alert('up');
        }
*/
        lastScrollTop = st <= 0 ? alert('up') : alert('down');
    }
/*
    var lastY;

    var currentY;

    
    var wheelstart = function(e) {
        var currentY = e.originalEvent.touches[0].clientY;
        lastY = currentY;
        e.preventDefault();
    }

    var wheelmove = function (e){
        var currentY = e.originalEvent.touches[0].clientY;
        delta = currentY - lastY;
    
        //this.scrollTop += delta * -1;
        lastY = currentY;
        e.preventDefault();
    }
*/
    var mousewheelHandle = function(delta) {
        if(leScroll.scrolling) {
            return;
        }
        if (delta > 0) {
            leScroll.scrolling = true;
            leScroll.moveUp();
            leScroll.setScrollTimeout(1500);
        } else if (delta <= 0) {
            leScroll.scrolling = true;
            leScroll.moveDown();
            leScroll.setScrollTimeout(1500);
        }
    };

    var navHandler = function() {
        leScroll.moveTo(event.target.getAttribute('data-section'));
    };

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].getAttribute('data-section')) {
            listItems[i].addEventListener('click', navHandler);
        }
    }

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === keyCodes.up) {
           leScroll.moveUp();
        } else if (event.keyCode === keyCodes.down) {
           leScroll.moveDown();
        }
    });

    window.addEventListener('resize', function(){
            leScroll.move();
    });

	var lastScrollTop = 0;
    window.addEventListener("scroll", wheel2, false);

    window.addEventListener('DOMMouseScroll', wheel, false); //desktop
    window.addEventListener('mousewheel', wheel, false); //desktop
    document.addEventListener('mousewheel', wheel, false); //desktop
    /*window.addEventListener('touchstart', wheelstart, false);
    window.addEventListener('touchmove', wheelmove, false);*/
    
    //window.onmousewheel = document.onmousewheel = wheel;

})(window, document, leScroll);// ignore:line

}