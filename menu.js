
        //document.getElementById('solutions').addEventListener('click', menuHover('solutions'), false);
        document.getElementById('services').addEventListener('click', () => { menuHover('services') }, false);
        document.getElementById('solutions').addEventListener('click', () => { menuHover('solutions') }, false);
        var subMenu = document.getElementById('sub__menu');
        var subSubMenu = document.getElementById('sub__sub__menu');

        let menuState = 0;

        function menuHover(menuItem) {
          if(menuItem == 'solutions') {
            document.getElementById('solutions').style.backgroundColor = '#17202a';
            document.querySelector('#solutions .menu__link').style.color = '#ffffff';
            
            document.getElementById('services').style.backgroundColor = '#ffffff';
            document.querySelector('#services .menu__link').style.color = '#17202a';

            let menuState = 1;

            subMenuContent = '<li id="sub__solutions__monitoring" onclick="subMenuHover(\'solutions\', \'monitoring\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Monitoring</div></li>'
                            +'<li id="sub__solutions__automation" onclick="subMenuHover(\'solutions\', \'automation\')" class="menu__item"><div href="samplepage.html" title="" class="menu__link">Industrial Automation</div></li>';
            document.getElementById('sub__menu').innerHTML = subMenuContent;

          } else if(menuItem == 'services') {
            document.getElementById('services').style.backgroundColor = '#17202a';
            document.querySelector('#services .menu__link').style.color = '#ffffff';
            
            document.getElementById('solutions').style.backgroundColor = '#ffffff';
            document.querySelector('#solutions .menu__link').style.color = '#17202a';

            let menuState = 1;

            subMenuContent = '<li id="sub__services__monitoring" class="menu__item"><a href="industrial-automation.html" title="" class="menu__link">Industrial Automation</a></li>'
                            +'<li id="sub__services__automation" class="menu__item"><a href="monitoring.html" title="" class="menu__link">Monitoring</a></li>';
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
            // console.log(subField);
            if(field == 'solutions') {
              //console.log(field);
                if(subField == 'monitoring') {
                  document.getElementById('sub__solutions__monitoring').style.backgroundColor = '#17202a';
                  document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#ffffff';
                  
                  document.getElementById('sub__solutions__automation').style.backgroundColor = '#ffffff';
                  document.querySelector('#sub__solutions__automation .menu__link').style.color = '#17202a';
                  // console.log(1);
                  
                    // let lynk1 = 'medical-moniroting';
                    // let lynk2 = 'industrial-moniroting';
                  subfieldsArray = ['medical monitoring', 'industrial monitoring'];
                  subSubMenu.innerHTML =  '<li class="menu__item"><a href="medical-monitoring.html" title="" class="menu__link">medical monitoring</a></li>'
                                        +'<li class="menu__item"><a href="industrial-monitoring.html" title="" class="menu__link">industrial monitoring</a></li>';
                } else if (subField == 'automation') {
                  document.getElementById('sub__solutions__automation').style.backgroundColor = '#17202a';
                  document.querySelector('#sub__solutions__automation .menu__link').style.color = '#ffffff';
                  
                  document.getElementById('sub__solutions__monitoring').style.backgroundColor = '#ffffff';
                  document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#17202a';

                  // console.log(2);
                  subfieldsArray = ['automatic product sorting', 'energy consumption optimization'];
                  subSubMenu.innerHTML =  '<li class="menu__item"><a href="industrial-automation-main.html#automatic-product-sorting" title="" class="menu__link">automatic product sorting</a></li>'
                                        +'<li class="menu__item"><a href="industrial-automation-main.html#energy-consumption-optimization" title="" class="menu__link">energy consumption optimization</a></li>';
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