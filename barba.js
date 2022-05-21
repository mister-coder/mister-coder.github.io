function init(){
    
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleY: 0, 
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                scaleY: 0,
            },
            { 
                duration: 0.8,
                scaleY: 2, 
                ease: 'Power4.inOut', 
                transformOrigin: 'center top'
            });
            
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.fromTo(loader, 
            {
                scaleY: 2,
                transformOrigin: 'center bottom'
            },
            { 
            duration: 0.8, 
            scaleY: 0,
            transformOrigin: 'center top', 
            ease: 'Power4.inOut'
        });
    }

    /*/ do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });*/
    
    barba.hooks.afterLeave(() => {
        let count = 0;
        let triggers = ScrollTrigger.getAll();
        triggers.forEach(function (trigger) {
            count += 1;
            trigger.kill();
        });
        console.log(count + ' ST killed');

        //window.removeEventListener("scroll", wheel2, false);
    });

    // do something after the transition finishes
    barba.hooks.after((data) => {

        setupScrollTriggers();
        gsap.delayedCall(0.01, () =>
          ScrollTrigger.getAll().forEach((t) =>
            console.log('ST available for', t.vars.id, 'on', data.next.namespace)
          )
        );

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    function pageTransition() {

        //var tl = gsap.timeline();

        
        const loader_logo = document.querySelector('.loader_logo');

        loader_logo.style.zIndex = 10;
    
        gsap.fromTo(loader_logo, { opacity: 0 }, { opacity: 1, duration: 0.1 });
        gsap.fromTo(loader_logo, { opacity: 1, zIndex: 10 }, { zIndex: 0, opacity: 0, duration: 0.5, delay: 1.5 });
        //tl.to('.loader_logo', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 });
    }

    function removeCover() {
        document.getElementById("loading").style.display = "none";
    }

    function delay(n) {

        
        //gsap.fromTo('.loader_logo', { zIndex: 10, opacity: 1 }, { zIndex: 0, opacity: 0, duration: 0.5, delay: 0.5 });
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    barba.init({
        debug: true,
        transitions: [{
            async leave() {
                await loaderIn();
                
                const done = this.async();

                await pageTransition();
                await delay(1500);
                done();
                
            },
            async enter() {
                
                const done = this.async();

                await removeCover();
                loaderAway();
                done();
            }
        }]
    })

}

window.addEventListener('load', function(){
    init();
    
    setupScrollTriggers();
    gsap.delayedCall(0.01, () =>
      ScrollTrigger.getAll().forEach((t) =>
        console.log(
          'ST available for',
          t.vars.id,
          'on',
          document.querySelector('#intro').getAttribute('data-barba-namespace')
        )
      )
    );
});

function setupScrollTriggers() {

    if(window.location.pathname != '/' && window.location.pathname != '/index.html') {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-section2__section2",
                start: "top bottom",
                toggleActions: "restart none none none"
            }
        });

        tl.from(".page-section2__hero-title", {y: 50, opacity: 0, duration: 1.5})
        tl.from(".page-section2__medium-title", {y: 50, opacity: 0, duration: 1.5, delay: -1.1});
        
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-section2__medium-title",
                start: "bottom bottom",
                toggleActions: "restart none none none"
            }
        });

        tl2.from(".img1", {x: -50, opacity: 0, duration: 1.5});
        tl2.from(".page-section2__medium-title1", {x: 50, opacity: 0, duration: 1.5, delay: -1.5});
        
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-section2__flex2",
                start: "bottom bottom",
                toggleActions: "restart none none none"
            }
        });

        tl3.from(".img2", {x: 50, opacity: 0, duration: 1.5});
        tl3.from(".page-section2__medium-title2", {x: -50, opacity: 0, duration: 1.5, delay: -1.5});
        
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-section3__section3",
                start: "top bottom",
                toggleActions: "restart none none none"
            }
        });

        tl4.from(".page-section3__flex4-item", {y: 50, opacity: 0, duration: 2});
        tl4.from(".page-section3__image", {y: 50, opacity: 0, duration: 2, delay: -2});
    } 

    if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
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
                            
                            //alert('scroll');
    
                            animateSection(previousSectionNumber, currentSectionNumber);
                        } else if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
                            document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * window.innerHeight) + 'px';
                            
                            updateVerticalNavigation(currentSectionNumber);
                            
                            //alert('scroll');
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
    }
    
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
        
                if(st > lastScrollTop) {
                    mousewheelHandle(0);
                    //alert('down');
                } else {
                    mousewheelHandle(1);
                    //alert('up');
                }
        
                //lastScrollTop = st <= alert('down') ? alert('up') : alert('down');
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
}