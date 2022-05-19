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

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });*/

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
});
