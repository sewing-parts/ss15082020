<?php

if($_POST)
{
    require_once 'vendor/autoload.php';

    $subject = 'Stay in touch '.$_POST["user_name"];

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    $text = "Name: ".$name.". Email Address: ".$email;

    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl'))
        ->setUsername ('___@gmail.com')
        ->setPassword ('6hWTfGugcuwLKR9m');

    $mailer = new Swift_Mailer($transport);

    $message = (new Swift_Message($subject))
     ->setFrom(['___@gmail.com'])
     ->setTo(['my@gmail.com'])
     ->setBody($text, 'text/html');

     for ($i=0; $i < count($_FILES['file']); $i++) { 
        $target_path = "uploads/" . basename($_FILES['file']['name'][$i]);
        if( move_uploaded_file($_FILES['file']['tmp_name'][$i], $target_path) ) {
            $message->attach(Swift_Attachment::fromPath($target_path));
    
                    //if we don't want to keep the image
                    unlink($target_path);
        }
    }

    if(!$mailer->send($message))
    {
        $servReturn = json_encode(array('text' => 'Can\'t send mail! Please check your PHP mail settings.'));
        die($servReturn);
    }else{
        $servReturn = json_encode(array('text' => 'Thank you! '.$user_Name .', your message has been sent.'));
        die($servReturn);
    }
}

?>