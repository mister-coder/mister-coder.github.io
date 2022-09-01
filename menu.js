
        //document.getElementById('solutions').addEventListener('click', menuHover('solutions'), false);
        document.getElementById('services').addEventListener('click', () => { menuHover('services') }, false);
        document.getElementById('solutions').addEventListener('click', () => { menuHover('solutions') }, false);
        var subMenu = document.getElementById('sub__menu');
        var subSubMenu = document.getElementById('sub__sub__menu');

        let menuState = 0;

        function menuHover(menuItem) {
          if(menuItem == 'solutions') {
            // document.getElementById('solutions').style.backgroundColor = '#17202a';
            document.getElementById('solutions').style.backgroundImage = 'linear-gradient(to right, #3525b3, #c11145)';
            document.querySelector('#solutions .menu__link').style.color = '#ffffff';
            
            document.getElementById('services').style.backgroundImage = '';
            document.querySelector('#services .menu__link').style.color = '#17202a';


            let menuState = 1;

            subMenuContent = '<li id="sub__solutions__monitoring" onclick="subMenuHover(\'solutions\', \'monitoring\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Monitoring</div></li>'
                            +'<li id="sub__solutions__automation" onclick="subMenuHover(\'solutions\', \'automation\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Industrial Automation</div></li>';
            document.getElementById('sub__menu').innerHTML = subMenuContent;

          } else if(menuItem == 'services') {
            document.getElementById('services').style.backgroundImage = 'linear-gradient(to right, #3525b3, #c11145)';
            document.querySelector('#services .menu__link').style.color = '#ffffff';
            
            document.getElementById('solutions').style.backgroundImage = '';
            document.querySelector('#solutions .menu__link').style.color = '#17202a';

            let menuState = 1;

            subMenuContent = '<li id="sub__services__monitoring" class="menu__item"><a href="industrial-automation.html" title="" class="menu__link">Industrial Automation</a></li>'
                            +'<li id="sub__services__automation" class="menu__item"><a href="monitoring.html" title="" class="menu__link">Monitoring</a></li>';
            document.getElementById('sub__menu').innerHTML = subMenuContent;

            document.getElementById('sub__sub__menu').innerHTML = '';

            
            
            document.getElementById('sub__services__monitoring').addEventListener("mouseover", function() {
              document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
            });
            document.getElementById('sub__services__monitoring').addEventListener("mouseout", function() {
              document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
            });

            document.getElementById('sub__services__automation').addEventListener("mouseover", function() {
              document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
            });
            document.getElementById('sub__services__automation').addEventListener("mouseout", function() {
              document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
            });

            //console.log('input');

          }
        }

        function subMenuHover(field, subField) {
            menuState = 2;
            let subfieldsArray = [];
            let lynk1 = '';
            let lynk2 = '';
            // console.log(subField);
            if(field == 'solutions') {
              //console.log(field);
                if(subField == 'monitoring') {
                  document.getElementById('sub__solutions__monitoring').style.backgroundImage = 'linear-gradient(to right, #3525b3, #c11145)';
                  document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#ffffff';
                  
                  document.getElementById('sub__solutions__automation').style.backgroundImage = '';
                  document.querySelector('#sub__solutions__automation .menu__link').style.color = '#17202a';
                  // console.log(1);
                  
                    // let lynk1 = 'medical-moniroting';
                    // let lynk2 = 'industrial-moniroting';
                  subfieldsArray = ['medical monitoring', 'industrial monitoring'];
                  subSubMenu.innerHTML =  '<li id="sub__medical__monitoring" class="menu__item"><a href="medical-monitoring.html" title="" class="menu__link">medical monitoring</a></li>'
                                        +'<li id="sub__industrial__monitoring" class="menu__item"><a href="industrial-monitoring.html" title="" class="menu__link">industrial monitoring</a></li>';

            
                  document.getElementById('sub__medical__monitoring').addEventListener("mouseover", function() {
                    document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
                  });
                  document.getElementById('sub__medical__monitoring').addEventListener("mouseout", function() {
                    document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
                  });

                  document.getElementById('sub__industrial__monitoring').addEventListener("mouseover", function() {
                    document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
                  });
                  document.getElementById('sub__industrial__monitoring').addEventListener("mouseout", function() {
                    document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
                  });

                } else if (subField == 'automation') {
                  document.getElementById('sub__solutions__automation').style.backgroundImage = 'linear-gradient(to right, #3525b3, #c11145)';
                  document.querySelector('#sub__solutions__automation .menu__link').style.color = '#ffffff';
                  
                  document.getElementById('sub__solutions__monitoring').style.backgroundImage = '';
                  document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#17202a';

                  // console.log(2);
                  subfieldsArray = ['automatic product sorting', 'energy consumption optimization'];
                  subSubMenu.innerHTML =  '<li id="automatic__product__sorting" class="menu__item"><a href="industrial-automation-main.html#automatic-product-sorting" title="" class="menu__link">automatic product sorting</a></li>'
                                        +'<li id="energy__consumption__optimization" class="menu__item"><a href="industrial-automation-main.html#energy-consumption-optimization" title="" class="menu__link">energy consumption optimization</a></li>';

                  document.getElementById('automatic__product__sorting').addEventListener("mouseover", function() {
                    document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
                  });
                  document.getElementById('automatic__product__sorting').addEventListener("mouseout", function() {
                    document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
                  });

                  document.getElementById('energy__consumption__optimization').addEventListener("mouseover", function() {
                    document.querySelector(".custom-cursor").classList.add("custom-cursor--link");
                  });
                  document.getElementById('energy__consumption__optimization').addEventListener("mouseout", function() {
                    document.querySelector(".custom-cursor").classList.remove("custom-cursor--link");
                  });
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