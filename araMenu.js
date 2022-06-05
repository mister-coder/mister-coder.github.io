       //document.getElementById('solutions').addEventListener('click', menuHover('solutions'), false);
       document.getElementById('ara__services').addEventListener('click', () => { menuHover('الخدمات') }, false);
       document.getElementById('ara__solutions').addEventListener('click', () => { menuHover('الحلول') }, false);
       var subMenu = document.getElementById('sub__menu');
       var subSubMenu = document.getElementById('sub__sub__menu');

       let menuState = 0;

       function menuHover(menuItem) {
         if(menuItem == 'الحلول') {
          document.getElementById('ara__solutions').style.backgroundColor = '#17202a';
          document.querySelector('#ara__solutions .menu__link').style.color = '#ffffff';
          
          document.getElementById('ara__services').style.backgroundColor = '#ffffff';
          document.querySelector('#ara__services .menu__link').style.color = '#17202a';

           let menuState = 1;

           subMenuContent = '<li id="sub__solutions__monitoring" class="menu__item"><div href="arasamplepage.html" title="" class="menu__link">المراقبة والمتابعة</div></li>'
                           +'<li id="sub__solutions__automation" class="menu__item"><div href="arasamplepage.html" title="" class="menu__link">الأتمتة الصناعية</div></li>';
           document.getElementById('sub__menu').innerHTML = subMenuContent;

           document.getElementById('sub__solutions__monitoring').addEventListener('click', () => {subMenuHover('solutions', 'monitoring')} );
           document.getElementById('sub__solutions__automation').addEventListener('click', () => {subMenuHover('solutions', 'automation')});

         } else if(menuItem == 'الخدمات') {
          document.getElementById('ara__services').style.backgroundColor = '#17202a';
          document.querySelector('#ara__services .menu__link').style.color = '#ffffff';
          
          document.getElementById('ara__solutions').style.backgroundColor = '#ffffff';
          document.querySelector('#ara__solutions .menu__link').style.color = '#17202a';

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
                document.getElementById('sub__solutions__monitoring').style.backgroundColor = '#17202a';
                document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#ffffff';
                
                document.getElementById('sub__solutions__automation').style.backgroundColor = '#ffffff';
                document.querySelector('#sub__solutions__automation .menu__link').style.color = '#17202a';

                 console.log(1);
                 subfieldsArray = ['medical monitoring', 'industrial monitoring'];
                 subSubMenu.innerHTML =  '<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-medical-monitoring.html" title="" class="menu__link">المراقبة والمتابعة الطبية</a></li>'
                                       +'<li id="sub__solutions__monitoring"  class="menu__item"><a href="ara-industrial-monitoring.html" title="" class="menu__link">المراقبة والمتابعة الصناعية</a></li>';
               } else if (subField == 'automation') {
                  document.getElementById('sub__solutions__automation').style.backgroundColor = '#17202a';
                  document.querySelector('#sub__solutions__automation .menu__link').style.color = '#ffffff';
                  
                  document.getElementById('sub__solutions__monitoring').style.backgroundColor = '#ffffff';
                  document.querySelector('#sub__solutions__monitoring .menu__link').style.color = '#17202a';
                  
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