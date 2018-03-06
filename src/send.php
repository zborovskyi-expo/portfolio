<?php

function result($status) {
  $result['status'] = $status;
  echo(json_encode($result));
  exit;
}

require_once 'class.phpmailer.php';

$mail = new PHPMailer(true);

$mail->IsHTML(true);
$mail->Subject = 'Message from the website: portfolio';
$content = '<p><strong>Phone number: </strong>'.$_POST['contact_phone'].'</p><p><strong>Message content: </strong>'.$_POST['contact_body'].'</p>';

$mail->Body = $content;
$mail->CharSet = 'UTF-8';
$mail->SetFrom($_POST['contact_email'], $_POST['contact_name']);

$mail->AddAddress('bohdan.zborovskyi@gmail.com');

try {
  $mail->Send();
  result(true);
} catch (phpmailerException $e) {
  result(false);
}

?>
