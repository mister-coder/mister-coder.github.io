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
                if(window.location.pathname == '/index.html' 
                    || window.location.pathname == '') {
                        await removeCover();
                        // console.log('hi');
                }
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
  //console.clear();
    console.log('hi there ' + (new Date()).toTimeString().split(' ')[0]);
        var cursor = document.querySelector(".custom-cursor");
        var links = document.querySelectorAll("a");
        var initCursor = false;
  
        for (var i = 0; i < links.length; i++) {
          var selfLink = links[i];
  
          selfLink.addEventListener("mouseover", function() {
            cursor.classList.add("custom-cursor--link");
          });
          selfLink.addEventListener("mouseout", function() {
            cursor.classList.remove("custom-cursor--link");
          });
        }
  
        window.onmousemove = function(e) {
          var mouseX = e.clientX;
          var mouseY = e.clientY;
  
          if (!initCursor) {
            // cursor.style.opacity = 1;
            TweenLite.to(cursor, 0.3, {
              opacity: 1, 
            });
            initCursor = true;
          }
  
          TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
          });
        };
  
        window.onmouseout = function(e) {
          TweenLite.to(cursor, 0.3, {
            opacity: 0
          });
          initCursor = false;
        };
    ////////////////////////////////////
    // if(window.)

    window.addEventListener('load', (event) => {
        setTimeout(hideLoading, 2000);
      });

      
      function hideLoading() {
        document.getElementById("loading").style.display = "none";
      }

    document.querySelector('.btn').onclick = function (e) {
        var menu = document.querySelector('.menu');
        var btn = document.querySelector('.btn');
    
        menu.classList.toggle('is-active');
        btn.classList.toggle('is-active');
    
        e.preventDefault();
    }
    

    /////////////////////////////////////////

    if(window.location.pathname == '/index.html' 
        || window.location.pathname == '/'
        ) {
          window.addEventListener('load', (event) => {
              setTimeout(hideLoading, 2000);
            });
      
            
            function hideLoading() {
              document.getElementById("loading").style.display = "none";
            }
        }

    if(window.location.pathname == '/index.html' 
        || window.location.pathname == '/industrial-monitoring.html'
        || window.location.pathname == '/monitoring.html'
        || window.location.pathname == '/industrial_automation.html'
        || window.location.pathname == '/industrial-automation-main.html'
        || window.location.pathname == '/monitoring-main.html'
        || window.location.pathname == '/industrial-monitoring.html'
        || window.location.pathname == '/medical-monitoring.html'
        || window.location.pathname == '/'
        ) {
        console.log(window.location.pathname);
        document.getElementById('solutions').addEventListener('click', () => { menuHover('solutions') });
        document.getElementById('services').addEventListener('click', () => { menuHover('services') });
        
        console.log('root');
        
        var subMenu = document.getElementById('sub__menu');
        var subSubMenu = document.getElementById('sub__sub__menu');

        let menuState = 0;

        function menuHover(menuItem) {
            if(menuItem == 'solutions') {
                menuState = 1;

                subMenuContent = '<li id="sub__solutions__monitoring" onclick="subMenuHover(\'solutions\', \'monitoring\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Monitoring</div></li>'
                                +'<li id="sub__solutions__automation" onclick="subMenuHover(\'solutions\', \'automation\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Industrial Automation</div></li>';
                subMenu.innerHTML = subMenuContent;
                
                document.getElementById('sub__solutions__monitoring').addEventListener('click', () => { subMenuHover('solutions', 'monitoring') });
                document.getElementById('sub__solutions__automation').addEventListener('click', () => { subMenuHover('solutions', 'automation') });

            } else if(menuItem == 'services') {
                menuState = 1;

                subMenuContent = '<li id="sub__services__monitoring" class="menu__item"><a href="industrial-automation.html" title="" class="menu__link">Industrial Automation</a></li>'
                                +'<li id="sub__services__automation" class="menu__item"><a href="monitoring.html" title="" class="menu__link">Monitoring</a></li>';
                subMenu.innerHTML = subMenuContent;

                subSubMenu.innerHTML = '';
            
            } else if(menuItem == 'الحلول') {
              let menuState = 1;
  
              subMenuContent = '<li id="sub__solutions__monitoring" onclick="subMenuHover(\'solutions\', \'monitoring\')" class="menu__item"><div href="monitoring.html" title="" class="menu__link">المراقبة والمتابعة</div></li>'
                              +'<li id="sub__solutions__automation" onclick="subMenuHover(\'solutions\', \'automation\')" class="menu__item"><div href="industrial-automation.html" title="" class="menu__link">الأتمتة الصناعية</div></li>';
              document.getElementById('sub__menu').innerHTML = subMenuContent;
  
            } else if(menuItem == 'الخدمات') {
              let menuState = 1;
  
              subMenuContent = '<li id="sub__services__monitoring" class="menu__item"><a href="industrial-automation.html" title="" class="menu__link">الأتمتة الصناعية</a></li>'
                              +'<li id="sub__services__automation" class="menu__item"><a href="monitoring.html" title="" class="menu__link">المراقبة والمتابعة</a></li>';
              document.getElementById('sub__menu').innerHTML = subMenuContent;
  
              document.getElementById('sub__sub__menu').innerHTML = '';
  
              //console.log('input');
  
            }
        }

        function subMenuHover(field, subField) {
            menuState = 2;
            let subfieldsArray = [];
            let lynk1 = '';
            let lynk2 = '';
            
            if(field == 'solutions') {
            //console.log(field);
                console.log(subField);
                if(subField == 'monitoring') {
                subfieldsArray = ['medical monitoring', 'industrial monitoring'];
                let lynk1 = 'medical-moniroting';
                let lynk2 = 'industrial-moniroting';
                subSubMenu.innerHTML =  '<li id="sub__solutions__monitoring"  class="menu__item"><a href="medical-monitoring.html" title="" class="menu__link">'+subfieldsArray[0]+'</a></li>'
                                        +'<li id="sub__solutions__monitoring"  class="menu__item"><a href="industrial-monitoring.html" title="" class="menu__link">'+subfieldsArray[1]+'</a></li>';
                console.log(3);
                } else if (subField == 'automation') {
                subfieldsArray = ['automatic product sorting', 'energy consumption optimization'];
                let lynk1 = 'industrial-automation-main.html#automatic-product-sorting';
                let lynk2 = 'industrial-automation-main.html#energy-consumption-optimization';
                console.log(4);
                subSubMenu.innerHTML =  '<li id="sub__solutions__monitoring"  class="menu__item"><a href="industrial-automation-main.html#automatic-product-sorting" title="" class="menu__link">'+subfieldsArray[0]+'</a></li>'
                                        +'<li id="sub__solutions__monitoring"  class="menu__item"><a href="industrial-automation-main.html#energy-consumption-optimization" title="" class="menu__link">'+subfieldsArray[1]+'</a></li>';
                }
                console.log(lynk1);

            }
        }

        function removeSubs(level) {
        setTimeout(() => {
            console.log(menuState);
            if(level == 'menu' && menuState == 1 ) {
            subMenu.innerHTML = '';              
            } else if(level == 'sub' && menuState == 2) {
            subMenu.innerHTML = '';
            }
        }, 500);
        }

        function removeSubSubs(level) {
            setTimeout(() => {
            subMenu.innerHTML = '';
            }, 500);
        }
    }


    /////////////////////////////////////////////////////

    if(window.location.pathname == '/arabic.html') {

        document.getElementById('contact_us_text').addEventListener('mouseover', araBookVisit);
        document.getElementById('contact_us_text').addEventListener('mouseout', araReturnText);

        function araBookVisit() {
            document.getElementById("contact_us_text").style.fontSize = '15px';
            document.getElementById("contact_us_text").innerHTML = "احجز زيارة استشارية من أحد مهندسينا الخبراء";
    
          }
    
          function araReturnText() {
            document.getElementById("contact_us_text").style.fontSize = '15px';
            document.getElementById("contact_us_text").innerHTML = "اطلب زيارة مجانية";
    
          }
        }
        ///////////////////////////////
        if(window.location.pathname == '/arabic.html'
        || window.location.pathname == '/araContactUs.html'
        || window.location.pathname == '/ara-monitoring.html'
        || window.location.pathname == '/ara-monitoring-main.html'
        || window.location.pathname == '/ara-medical-monitoring.html'
        || window.location.pathname == '/ara-industrial-monitoring.html'
        || window.location.pathname == '/ara-industrial-automation.html'
        || window.location.pathname == '/ara-industrial-automation-main.html'
        || window.location.pathname == '/ara-about.html') {

          console.log(window.location.pathname);
          
        document.getElementById('ara__services').addEventListener('click', () => { menuHover('الخدمات') }, false);
        document.getElementById('ara__solutions').addEventListener('click', () => { menuHover('الحلول') }, false);
        var subMenu = document.getElementById('sub__menu');
        var subSubMenu = document.getElementById('sub__sub__menu');

        let menuState = 0;

        function menuHover(menuItem) {
          if(menuItem == 'الحلول') {
            let menuState = 1;

            subMenuContent = '<li id="sub__solutions__monitoring" class="menu__item"><div href="arasamplepage.html" title="" class="menu__link">المراقبة والمتابعة</div></li>'
                            +'<li id="sub__solutions__automation" class="menu__item"><div href="arasamplepage.html" title="" class="menu__link">الأتمتة الصناعية</div></li>';
            document.getElementById('sub__menu').innerHTML = subMenuContent;

            document.getElementById('sub__solutions__monitoring').addEventListener('click', () => {subMenuHover('solutions', 'monitoring')} );
            document.getElementById('sub__solutions__automation').addEventListener('click', () => {subMenuHover('solutions', 'automation')});

          } else if(menuItem == 'الخدمات') {
            let menuState = 1;

            subMenuContent = '<li id="sub__services__monitoring" class="menu__item"><a href="ara-industrial-automation.html" title="" class="menu__link">الأتمتة الصناعية</a></li>'
                            +'<li id="sub__services__automation" class="menu__item"><a href="ara-monitoring.html" title="" class="menu__link">المراقبة والمتابعة</a></li>';
            document.getElementById('sub__menu').innerHTML = subMenuContent;

            document.getElementById('sub__sub__menu').innerHTML = '';

            //console.log('input');

          }
        }

        function subMenuHover(field, subField) {
            menuState = 2;
            let subfieldsArray = [];
            console.log(subField);
            if(field == 'solutions') {
              //console.log(field);
                if(subField == 'monitoring') {
                  console.log(1);
                  subfieldsArray = ['medical monitoring', 'industrial monitoring'];
                  subSubMenu.innerHTML =  '<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-medical-monitoring.html" title="" class="menu__link">المراقبة والمتابعة الطبية</a></li>'
                                        +'<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-industrial-monitoring.html" title="" class="menu__link">الأتمتة الصناعية</a></li>';
                } else if (subField == 'automation') {
                  console.log(2);
                  subfieldsArray = ['automatic product sorting', 'energy consumption optimization'];
                  subSubMenu.innerHTML =  '<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-industrial-automation-main.html#automatic-product-sorting.html" title="" class="menu__link">الفرز التلقائي للمنتج</a></li>'
                                        +'<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-industrial-automation-main.html#energy-consumption-optimization.html" title="" class="menu__link">تحسين استهلاك الطاقة</a></li>';
                } else if (subField == 'logistics') {
                  subfieldsArray = ['fleet management system', 'warehouse monitoring system'];
                }
            }
        }

        function removeSubs(level) {
          setTimeout(() => {
            //console.log(menuState);
            if(level == 'menu' && menuState == 1 ) {
              subMenu.innerHTML = '';              
            } else if(level == 'sub' && menuState == 2) {
              subMenu.innerHTML = '';
            }
          }, 500);
        }

        function removeSubSubs(level) {
            setTimeout(() => {
              subMenu.innerHTML = '';
            }, 500);
        }
    }


    ////////////////////////////////////////////////////

    function submit(e) {
        e.preventDefault();
        var fName = document.getElementById('fname').value;
        var lName = document.getElementById('lname').value;
        var company = document.getElementById('company').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var sector = document.getElementById('sector').value;
        var subject = document.getElementById('subject').value;
        
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        function scrollTop() {
           window.scrollTo(0, 0);
        }
        
        document.getElementById('fname__error').innerHTML = '';
        document.getElementById('lname__error').innerHTML = '';
        document.getElementById('company__error').innerHTML = '';
        document.getElementById('email__error').innerHTML = '';
        document.getElementById('number__error').innerHTML = '';
        document.getElementById('sector__error').innerHTML = '';
        document.getElementById('subject__error').innerHTML = '';
        
        if( typeof fName !== 'string'|| fName.length > 30 || fName.length < 3 ) {
          document.getElementById('fname__error').innerHTML = 'First name should be a string with between 3 and 30 letters';
          scrollTop();
        } else if( typeof lName !== 'string'|| lName.length > 30 || lName.length < 3 ) {
          document.getElementById('lname__error').innerHTML = 'Last name should be a string with between 3 and 30 letters';
          scrollTop();
        } else if( typeof company !== 'string'|| company.length > 100 || company.length < 3 ) {
          document.getElementById('company__error').innerHTML = 'Company name should be a string with between 3 and 100 letters';
          scrollTop();
        } else if( typeof email !== 'string'|| email.length > 100 || email.length < 3 || !filter.test(email) ) {
          document.getElementById('email__error').innerHTML = 'Invalid email';
          scrollTop();
        } else if( typeof number !== 'string'|| number.length > 100 || number.length < 3 ) {
          document.getElementById('number__error').innerHTML = 'Invalid number';
          scrollTop();
        } else if( ( sector != 'other' && sector != 'medical' && sector != 'industrial' && sector != 'logistics' ) ) {
          document.getElementById('sector__error').innerHTML = 'Invalid sector';
          scrollTop();
        } else if( typeof subject !== 'string'|| subject.length > 5000 || subject.length < 3 ) {
          document.getElementById('subject__error').innerHTML = 'Your message should be a string with between 3 and 5000 letters';
          scrollTop();
        } else if(    typeof fName !== 'undefined' 
            && typeof lName !== 'undefined' 
            && typeof company !== 'undefined' 
            && typeof email !== 'undefined' 
            && typeof number !== 'undefined' 
            && typeof sector !== 'undefined' 
            && typeof subject !== 'undefined' ) {

                document.getElementById('form_container').innerHTML = '<div style="height: 200px; width: 100%; display: flex; justify-content: center; align-items: center;"><span class="loader2"></span></div>';
              $.ajax({
                url:'email.php',
                data:{ 
                        fName:fName, 
                        lName:lName, 
                        company:company, 
                        email:email,
                        number:number,
                        sector:sector,
                        subject:subject,
                      },
                method: 'POST',
                success: function(data){
                    jQuery('#form_container').html(data);
                }
            });
              
            scrollTop();

        } else {
            alert('please try again');
        }

        // var formContainer = document.getElementById('form_container');
        
        // formContainer.innerHTML = 'Thank you for reaching out to us.<br>'
        //                           + 'Our team will be in touch with you shortly';
    }

    if(window.location.pathname != '/' 
        && window.location.pathname != '/index.html'
        && window.location.pathname != '/arabic.html'
        ) {
            
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

    if(window.location.pathname == '/arabic.html') {
        
        document.getElementById('this__year').innerHTML = new Date().getFullYear();
        var araProfileIcon = document.getElementById('ara_profile__download');

        function araIconOrProfile() {
          if(window.innerWidth < 575) {
            araProfileIcon.innerHTML = '<i class="material-icons arrow">arrow_downward</i>'
                                    +'<span class="tooltiptext">الملف التعريفي</span>';
          } else if (window.innerWidth >= 575) {
            araProfileIcon.innerHTML = 'الملف التعريفي';
          }
        }
        
        window.addEventListener('resize', araIconOrProfile);

        araIconOrProfile();
    }

    if(window.location.pathname == '/index.html'
        || window.location.pathname == '/') {

        document.getElementById('contact_us_text').addEventListener('mouseover', bookVisit);
        document.getElementById('contact_us_text').addEventListener('mouseout', returnText);

        function bookVisit() {
            document.getElementById("contact_us_text").style.fontSize = '15px';
            document.getElementById("contact_us_text").innerHTML = "Book an inspection visit by one of our expert engineers";
  
          }
  
          function returnText() {
            document.getElementById("contact_us_text").style.fontSize = '15px';
            document.getElementById("contact_us_text").innerHTML = "Request a Free visit";
  
          }

            document.getElementById('this__year').innerHTML = new Date().getFullYear();
            var profileIcon = document.getElementById('profile__download');
    
            function iconOrProfile() {
              if(window.innerWidth < 575) {
                profileIcon.innerHTML = '<i class="material-icons arrow">arrow_downward</i>'
                                        +'<span class="tooltiptext">Download profile</span>';
              } else if (window.innerWidth >= 575) {
                profileIcon.innerHTML = 'Profile Download';
              }
            }
            
            window.addEventListener('resize', iconOrProfile);
    
            iconOrProfile();
            

    }

    if(window.location.pathname == '/' 
        || window.location.pathname == '/index.html'
        || window.location.pathname == '/arabic.html'
        ) {
        var leScroll = (function(leScroll) {
            'use strict';
    
            var currentSectionNumber = 0;
            
            var previousSectionNumber = -1;
    
            var sectionCount = document.querySelectorAll('section').length - 1;
            
            var maskHeight = document.getElementById('mask').offsetHeight; 
                
            var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    
            leScroll.scrolling = false;
    
                leScroll.move = function() {
                  if(currentSectionNumber == 4) {
                    let hideItems = document.getElementsByClassName('hide__item');
                    for (var i = 0; i < hideItems.length; i++) {
                      //console.log();
                      hideItems[i].style.display = 'none';
                     }
                  } else if (currentSectionNumber < 4) {
                    let hideItems = document.getElementsByClassName('hide__item');
                    for (var i = 0; i < hideItems.length; i++) {
                      //console.log();
                      hideItems[i].style.display = 'block';
                     }
                     hideItems[3].style.display = 'flex';
                  }
                  
                    if(iOS) {
                            document.getElementById('containerSnapScroll').style.top = '-' + (currentSectionNumber * maskHeight) + 'px';
                            
                            updateVerticalNavigation(currentSectionNumber);
                            
                            //alert('scroll');
    
                            animateSection(previousSectionNumber, currentSectionNumber);
                        } else if(window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/arabic.html') {
                            // alert('move');
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
    
    if(window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/arabic.html') { 
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
              // alert('moving');
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
        
            let lastScrollTop = 0;

            
            window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
              var st = window.pageYOffset || document.documentElement.scrollTop; 
              if (st > lastScrollTop){
                // downscroll code
                // alert('down');
                mousewheelHandle(0);
                
              } else {
                // upscroll code
                // alert('up');
                mousewheelHandle(1);
              }
              lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
          }, false);
          
          // document.addEventListener('swiped-up', function(e) {
          //     console.log(e.target); // the element that was swiped
          // });
          
            // window.addEventListener("scroll", wheel2, false);
        
            window.addEventListener('DOMMouseScroll', wheel, false); //desktop
            window.addEventListener('mousewheel', wheel, false); //desktop
            document.addEventListener('mousewheel', wheel, false); //desktop
            /*window.addEventListener('touchstart', wheelstart, false);
            window.addEventListener('touchmove', wheelmove, false);*/
            
            //window.onmousewheel = document.onmousewheel = wheel;
        
        })(window, document, leScroll);// ignore:line
        
        }

        
}