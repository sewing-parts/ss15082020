<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

reguire "PHPMailer/src/PHPMailer.php";
reguire "PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UFT-8";

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$body = $name . ' ' . $email . ' ' . $phone . ' ' . $message;
$theme = "[Заявка с формы]";

$mail->addAddress("sewing77parts@gmail.com");

$mail->Subject = $theme;
$mail->Body = $body;

$mail->send();