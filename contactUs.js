
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
        //alert(sector);
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

}


function araSubmit(e) {
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
    document.getElementById('fname__error').innerHTML = 'يجب أن يتكون الاسم الأول من 3 إلى 30 حرفًا';
    scrollTop();
  } else if( typeof lName !== 'string'|| lName.length > 30 || lName.length < 3 ) {
    document.getElementById('lname__error').innerHTML = 'يجب أن يتكون اسم العائلة من 3 إلى 30 حرفًا';
    scrollTop();
  } else if( typeof company !== 'string'|| company.length > 100 || company.length < 3 ) {
    document.getElementById('company__error').innerHTML = 'يجب أن يتكون اسم الشركة من 3 إلى 100 حرف';
    scrollTop();
  } else if( typeof email !== 'string'|| email.length > 100 || email.length < 3 || !filter.test(email) ) {
    document.getElementById('email__error').innerHTML = 'بريد إلكتروني خاطئ';
    scrollTop();
  } else if( typeof number !== 'string'|| number.length > 100 || number.length < 3 ) {
    document.getElementById('number__error').innerHTML = 'رقم غير صالح';
    scrollTop();
  } else if( ( sector != 'other' && sector != 'medical' && sector != 'industrial' && sector != 'logistics' ) ) {
    document.getElementById('sector__error').innerHTML = 'قطاع غير صالح';
    scrollTop();
  } else if( typeof subject !== 'string'|| subject.length > 5000 || subject.length < 3 ) {
    document.getElementById('subject__error').innerHTML = 'يجب أن تكون رسالتك عبارة عن 3 إلى 5000 حرف';
    scrollTop();
  } else if(    typeof fName !== 'undefined' 
      && typeof lName !== 'undefined' 
      && typeof company !== 'undefined' 
      && typeof email !== 'undefined' 
      && typeof number !== 'undefined' 
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
      alert('حاول مرة اخرى');
    }

}