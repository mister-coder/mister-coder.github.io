
          if(document.getElementsByClassName('page-section2__section2').length > 0) {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-section2__section2",
                    start: "top bottom",
                    toggleActions: "restart none none none"
                }
            });
    
            tl.from(".page-section2__hero-title", {y: 25, opacity: 0.9, duration: 1.5})
            tl.from(".page-section2__medium-title", {y: 25, opacity: 0.9, duration: 1.5, delay: -1.1});
            
          }

          if(document.getElementsByClassName('page-section2__medium-title').length > 0) {

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-section2__medium-title",
                    start: "bottom bottom",
                    toggleActions: "restart none none none"
                }
            });
    
            tl2.from(".img1", {x: -50, opacity: 0, duration: 1.5});
            tl2.from(".page-section2__medium-title1", {x: 25, opacity: 0.9, duration: 1.5, delay: -1.5});
            
          }
        
          if(document.getElementsByClassName('page-section2__flex2').length > 0) {
        
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-section2__flex2",
                    start: "bottom bottom",
                    toggleActions: "restart none none none"
                }
            });
    
            tl3.from(".img2", {x: 50, opacity: 0, duration: 1.5});
            tl3.from(".page-section2__medium-title2", {x: -25, opacity: 0.9, duration: 1.5, delay: -1.5});

          }

          if(document.getElementsByClassName('page-section2__flex2').length > 0) {
        
            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-section3__section3",
                    start: "top bottom",
                    toggleActions: "restart none none none"
                }
            });
    
            tl4.from(".page-section3__flex4-item", {y: 25, opacity: 0.9, duration: 2});
            tl4.from(".page-section3__image", {y: 25, opacity: 0.9, duration: 2, delay: -2});

          }