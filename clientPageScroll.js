if(window.location.pathname == '/' 
    || window.location.pathname == '/index.html'
    || window.location.pathname == '/arabic.html') { 
(function (window, document, leScroll, undefined) {
	'use strict';

    var listItems = document.getElementsByClassName('navbar_click_area');
    console.log(listItems.length);
	let lastScrollTop = 0;

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

        if(st > lastScrollTop) {
            mousewheelHandle(0);
            //alert('down');
        } else {
            mousewheelHandle(1);
            //alert('up');
        }

        lastScrollTop = st <= 0 ? 0 : st;
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
        // console.log('moving');
        if(leScroll.scrolling) {
            return;
        }
        if (delta > 0) {
            // console.log('before up');
            leScroll.scrolling = true;
            leScroll.moveUp();
            leScroll.setScrollTimeout(2000);
        } else if (delta <= 0) {
            leScroll.scrolling = true;
            leScroll.moveDown();
            leScroll.setScrollTimeout(2000);
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


    
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if ( /windows phone/i.test(userAgent) || /android/i.test(userAgent) ) {
        var touchstartY = 0;
        var touchendY = 0;

        //var gesuredZone = document.getElementById('gesuredZone');

        document.addEventListener('touchstart', function(event) {
            touchstartY = event.touches[0].screenY;
        }, false);

        document.addEventListener('touchend', function(event) {
            touchendY = event.changedTouches[0].screenY;
            handleGesure();
        }, false); 

        
        function handleGesure() {
            if (touchendY < touchstartY) {
                // alert(swiped + 'down!');
                console.log('down');
                mousewheelHandle(0);
            }
            if (touchendY > touchstartY) {
                // alert(swiped + 'up!');
                console.log('up');
                mousewheelHandle(1);
            }
        }

    } else {

        window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; 
            if (st > lastScrollTop){
               // downscroll code
            //    alert('down');
               mousewheelHandle(0);
               console.log(1);
               
            } else {
               // upscroll code
            //    alert('up');
               mousewheelHandle(1);
               console.log(2);
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
         }, false);
    
         document.addEventListener('swiped-up', function(e) {
            console.log(e.target); // the element that was swiped
        });
        window.addEventListener('DOMMouseScroll', wheel, false); //desktop
        window.addEventListener('mousewheel', wheel, false); //desktop
        document.addEventListener('mousewheel', wheel, false); //desktop
    
        /*window.addEventListener('touchstart', wheelstart, false);
        window.addEventListener('touchmove', wheelmove, false);*/
        
        //window.onmousewheel = document.onmousewheel = wheel;


    }

})(window, document, leScroll);// ignore:line

}