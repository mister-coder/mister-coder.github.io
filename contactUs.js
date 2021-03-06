
function submit(e) {
  e.preventDefault();
  var fName = document.getElementById('fname').value;
  var lName = document.getElementById('lname').value;
  var company = document.getElementById('company').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var city = document.getElementById('city').value;
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
  document.getElementById('city__error').innerHTML = '';
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
  } else if( (    
                  city != 'other' 
              &&  city != 'Jeddah' 
              &&  city != 'Riyadh' 
              &&  city != 'Makkah' 
              &&  city != 'Madinah' 
              &&  city != 'Dammam' 
              &&  city != 'Taif' 
              &&  city != 'Al-Kharj' 
              &&  city != 'Khobar' 
              &&  city != 'Tabuk' 
              &&  city != 'Dhahran' 
              ) ) {
    document.getElementById('city__error').innerHTML = 'Invalid city';
    scrollTop();
  } else if( ( sector != 'other' && sector != 'medical' && sector != 'industrial' && sector != 'logistics' ) ) {
    document.getElementById('sector__error').innerHTML = 'Invalid sector';
    scrollTop();
  } else if( typeof subject !== 'string'|| subject.length > 5000 || subject.length < 3 ) {
    document.getElementById('subject__error').innerHTML = 'Your message should be a string with between 3 and 5000 letters';
    scrollTop();
  } else if(      
                  typeof fName !== 'undefined' 
              &&  typeof lName !== 'undefined' 
              &&  typeof company !== 'undefined' 
              &&  typeof email !== 'undefined' 
              &&  typeof number !== 'undefined' 
              &&  typeof city !== 'undefined' 
              &&  typeof sector !== 'undefined' 
              &&  typeof subject !== 'undefined'
              &&  typeof city !== 'undefined' 
      ) {

      document.getElementById('form_container').innerHTML = '<div style="height: 200px; width: 100%; display: flex; justify-content: center; align-items: center;"><span class="loader2"></span></div>';
        //alert(sector);
        $.ajax({
          url:'email.php',
          data:{ 
                  fName:fName, 
                  lName:lName, 
                  company:company, 
                  email:email,
                  number:number,
                  city:city,
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

}


function araSubmit(e) {
  e.preventDefault();
  var fName = document.getElementById('fname').value;
  var lName = document.getElementById('lname').value;
  var company = document.getElementById('company').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var city = document.getElementById('city').value;
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
  document.getElementById('city__error').innerHTML = '';
  document.getElementById('sector__error').innerHTML = '';
  document.getElementById('subject__error').innerHTML = '';
  
  if( typeof fName !== 'string'|| fName.length > 30 || fName.length < 3 ) {
    document.getElementById('fname__error').innerHTML = '?????? ???? ?????????? ?????????? ?????????? ???? 3 ?????? 30 ??????????';
    scrollTop();
  } else if( typeof lName !== 'string'|| lName.length > 30 || lName.length < 3 ) {
    document.getElementById('lname__error').innerHTML = '?????? ???? ?????????? ?????? ?????????????? ???? 3 ?????? 30 ??????????';
    scrollTop();
  } else if( typeof company !== 'string'|| company.length > 100 || company.length < 3 ) {
    document.getElementById('company__error').innerHTML = '?????? ???? ?????????? ?????? ???????????? ???? 3 ?????? 100 ??????';
    scrollTop();
  } else if( typeof email !== 'string'|| email.length > 100 || email.length < 3 || !filter.test(email) ) {
    document.getElementById('email__error').innerHTML = '???????? ???????????????? ????????';
    scrollTop();
  } else if( typeof number !== 'string'|| number.length > 100 || number.length < 3 ) {
    document.getElementById('number__error').innerHTML = '?????? ?????? ????????';
    scrollTop();
  } else if( (    
        city != 'other' 
    &&  city != 'Jeddah' 
    &&  city != 'Riyadh' 
    &&  city != 'Makkah' 
    &&  city != 'Madinah' 
    &&  city != 'Dammam' 
    &&  city != 'Taif' 
    &&  city != 'Al-Kharj' 
    &&  city != 'Khobar' 
    &&  city != 'Tabuk' 
    &&  city != 'Dhahran' 
    ) ) {
    document.getElementById('city__error').innerHTML = '??????????! ?????? ?????????????? ?????? ????????????.';
    scrollTop();
  } else if( ( sector != 'other' && sector != 'medical' && sector != 'industrial' && sector != 'logistics' ) ) {
    document.getElementById('sector__error').innerHTML = '???????? ?????? ????????';
    scrollTop();
  } else if( typeof subject !== 'string'|| subject.length > 5000 || subject.length < 3 ) {
    document.getElementById('subject__error').innerHTML = '?????? ???? ???????? ???????????? ?????????? ???? 3 ?????? 5000 ??????';
    scrollTop();
  } else if(    typeof fName !== 'undefined' 
      && typeof lName !== 'undefined' 
      && typeof company !== 'undefined' 
      && typeof email !== 'undefined' 
      && typeof number !== 'undefined' 
      && typeof city !== 'undefined' 
      && typeof sector !== 'undefined' 
      && typeof subject !== 'undefined' ) {

      document.getElementById('form_container').innerHTML = '<div style="height: 200px; width: 100%; display: flex; justify-content: center; align-items: center;"><span class="loader2"></span></div>';
        //alert(sector);
        $.ajax({
          url:'ara_email.php',
          data:{ 
                  fName:fName, 
                  lName:lName, 
                  company:company, 
                  email:email,
                  number:number,
                  city:city,
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
      alert('???????? ?????? ????????');
    }

}