<?php

// Выключить отчеты об ошибках
error_reporting(0);
// Добавлять в отчет все PHP ошибки
error_reporting(E_ALL);
// Аналогично error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);
// Показывать в отчете часть ошибок ошибок
error_reporting(E_ERROR | E_WARNING | E_PARSE);
// Аналогично предыдущему, но будут показываться еще ошибки связанные с перенеменными
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
// Будут показываться все ошибки кроме E_NOTICE
error_reporting(E_ALL & ~E_NOTICE);

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";
    

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);

    $name = $_POST["name"];
    $email = $_POST["email"];
	$phone = $_POST["phone"];
    $message = $_POST["message"];
	$email_template = "template_mail.html";

    $body = file_get_contents($email_template);
	$body = str_replace('%name%', $name, $body);
	$body = str_replace('%email%', $email, $body);
	$body = str_replace('%phone%', $phone, $body);
	$body = str_replace('%message%', $message, $body);

    $mail->addAddress("sewing77parts@gmail.com");   // Здесь введите Email, куда отправлять
	$mail->setFrom($email);
    $mail->Subject = "[Заявка с формы]";
    $mail->MsgHTML($body);

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Данные отправлены!";
    }
	
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);


?>