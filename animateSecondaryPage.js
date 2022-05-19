
if(window.location.pathname != '/' && window.location.pathname != '/index.html') {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".page-section2__section2",
              start: "top bottom",
              toggleActions: "restart none none none"
            }
          });
          tl.from(".page-section2__hero-title", {y: 200, opacity: 0, duration: 1.5})
          tl.from(".page-section2__medium-title", {y: 200, opacity: 0, duration: 1.5, delay: -1.1});
          
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".page-section2__medium-title",
              start: "bottom bottom",
              toggleActions: "restart none none none"
            }
          });
          tl2.from(".img1", {x: -200, opacity: 0, duration: 1.5});
          tl2.from(".page-section2__medium-title1", {x: 200, opacity: 0, duration: 1.5, delay: -1.5});
          
          const tl3 = gsap.timeline({
            scrollTrigger: {
              trigger: ".page-section2__flex2",
              start: "bottom bottom",
              toggleActions: "restart none none none"
            }
          });
          tl3.from(".img2", {x: 200, opacity: 0, duration: 1.5});
          tl3.from(".page-section2__medium-title2", {x: -200, opacity: 0, duration: 1.5, delay: -1.5});
          
          const tl4 = gsap.timeline({
            scrollTrigger: {
              trigger: ".page-section3__section3",
              start: "top bottom",
              toggleActions: "restart none none none"
            }
          });
          tl4.from(".page-section3__flex4-item", {y: 200, opacity: 0, duration: 2});
          tl4.from(".page-section3__image", {y: 200, opacity: 0, duration: 2, delay: -2});
}