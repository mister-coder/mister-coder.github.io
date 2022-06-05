<?php 
    

    // Import PHPMailer classes into the global namespace 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    if(
            isset($_POST['fName'])
        &&  isset($_POST['lName'])
        &&  isset($_POST['company'])
        &&  isset($_POST['email'])
        &&  isset($_POST['number'])
        &&  isset($_POST['city'])
        &&  isset($_POST['sector'])
        &&  isset($_POST['subject'])
    )   {
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $company = $_POST['company'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $city = $_POST['city'];
        $sector = $_POST['sector'];
        $subject = $_POST['subject'];
        
        
        $mail = new PHPMailer(); 
        
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();                      // Set mailer to use SMTP 
        // $mail->SMTPDebug = 4;
        $mail->Host = 'smtp.zoho.com';       // Specify main and backup SMTP servers 
        $mail->SMTPAuth = true;               // Enable SMTP authentication 
        $mail->Username = 'ragi@autonera-sa.com';   // SMTP username 
        $mail->Password = 'AA2022@a';   // SMTP password 
        $mail->SMTPSecure = 'tls';            // Enable TLS encryption, `ssl` also accepted 
        $mail->Port = 587;                    // TCP port to connect to  //587  //465
        
        // Sender info 
        $mail->setFrom('ragi@autonera-sa.com', 'Autonera main'); 
        $mail->addReplyTo('ragi@autonera-sa.com', 'Autonera main'); 
        
        // Add a recipient 
        $mail->addAddress('info@autonera-sa.com'); 
        
        //$mail->addCC('cc@example.com'); 
        $mail->addBCC('ragi@autonera-sa.com'); 
        
        // Set email format to HTML 
        $mail->isHTML(true); 
        
        // Mail subject 
        $mail->Subject = 'New customer'; 
        
        // Mail body content 
        $bodyContent = '<h1>A new customer </h1>'; 
        $bodyContent .= '<p>Name: '.$fName.' '.$lName.'</b></p>'; 
        $bodyContent .= '<p>Company: '.$company.'</b></p>'; 
        $bodyContent .= '<p>Email: '.$email.'</b></p>'; 
        $bodyContent .= '<p>Number: '.$number.'</b></p>'; 
        $bodyContent .= '<p>City: '.$city.'</b></p>'; 
        $bodyContent .= '<p>Sector: '.$sector.'</b></p>'; 
        $bodyContent .= '<p>Subject: '.$subject.'</b></p>'; 
        $bodyContent .= '<p>Please get in touch with them as soon as possible.</b></p>'; 
        $mail->Body    = $bodyContent; 
        
        // Send email 
        if(!$mail->send()) { 
            echo 'تعذر إرسال الرسالة.';// Mailer Error: '.$mail->ErrorInfo; 
        } else { 
            echo '<div style="margin-top: 20px;">شكر لتواصلك معنا. سيتواصل معك فريقنا قريبًا.<br></div><div style="margin-top: 20px;"><a style="text-decoration: none; margin-top: 20px;" href="/arabic.html"><u style="color: black; text-decoration: underline;">العودة إلى الصفحة الرئيسية.</u></a></div>'; 
        } 
    } else {
        echo '<div style="margin-top: 20px;">Sorry! I think you\'re lost.<br></div><div style="margin-top: 20px;"><a style="text-decoration: none; margin-top: 20px;" href="/index.html"><u style="color: black; text-decoration: underline;">Go back to the home page</u></a></div>'; 
    }

?>