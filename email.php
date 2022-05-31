<?php 

    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $sector = $_POST['sector'];
    $subject = $_POST['subject'];

    // Import PHPMailer classes into the global namespace 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    
    
    $mail = new PHPMailer(); 
    
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
    $bodyContent .= '<p>Sector: '.$sector.'</b></p>'; 
    $bodyContent .= '<p>Subject: '.$subject.'</b></p>'; 
    $bodyContent .= '<p>Please get in touch with them as soon as possible.</b></p>'; 
    $mail->Body    = $bodyContent; 
    
    // Send email 
    if(!$mail->send()) { 
        echo 'Message could not be sent.';// Mailer Error: '.$mail->ErrorInfo; 
    } else { 
        echo '<div style="margin-top: 20px;">Thank you for reaching out to us. Our team will be in touch with you shortly.<br></div><div style="margin-top: 20px;"><a style="text-decoration: none; margin-top: 20px;" href="/index.html"><u style="color: black; text-decoration: underline;">Go back to the home page</u></a></div>'; 
    } 
 

?>