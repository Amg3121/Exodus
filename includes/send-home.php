<?php
ob_start("ob_gzhandler");
include ('mainfx.php');
include ('../adodb/adodb.inc.php');
include "exodus.inc.php";
//$db->EXECUTE("set names 'utf8'");

#Obtener Variables
$nombre = $_POST['name'];
$email = $_POST['email'];
$state = $_POST['state'];
$message = $_POST['comments'];

$FieldName= "Nombre";
Fieldneeded ($FieldName, $nombre);
$FieldName= "Email";
Fieldneeded ($FieldName, $email);
$FieldName= "Comentarios";
Fieldneeded ($FieldName, $message);


require_once('class.phpmailer.php');
include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP(); // telling the class to use SMTP

try {
  $mail->Host       = "mail.exodus.mx"; // SMTP server
  #$mail->SMTPDebug = 2;                     // enables SMTP debug information (for testing)
  $mail->CharSet = 'UTF-8'; 
  $mail->SMTPAuth   = true;                  // enable SMTP authentication
  $mail->Port       = 26;                    // set the SMTP port for the GMAIL server
  $mail->Username   = "info@exodus.mx"; // SMTP account username
  $mail->Password   = "uyt65ss";        // SMTP account password

  #Remitente
  $mail->SetFrom('info@exodus.mx', 'Exodus Travel');
  $mail->AddReplyTo('info@exodus.mx', 'Exodus Travel');

  #Destinatario(s)  
  $mail->AddAddress('info@exodus.mx', 'Exodus Travel');
  //$mail->AddBCC("li.luisgarcia@gmail.com", "Luis Garc�a");
  $mail->AddBCC("dmarin@meca.mx", 'Exodus Travel');
  
  
#  $mail->AddReplyTo('name@yourdomain.com', 'First Last');
  $mail->Subject = "Contacto desde  página Exodus " . date('d-m-Y');
  $mail->AltBody = 'El correo no puede ser desplegado correctamente'; // optional - MsgHTML will create an alternate automatically
	
#  $mail->MsgHTML(file_get_contents('contents.php'));
$mail->Body  =  '<font face="Arial">

<p>Mensaje recibido a trav&eacute;s de su página web Exodus</p>

<a href="mailto:'.$email.'" style="background-color:#7ad800; color:#FFFFFF; padding:10px 20px 10px 20px; margin-bottom:15px; text-decoration:none; text-align:center; display:block; width:250px;"> Responder </a>  
<br>
<strong>Nombre:</strong> ' . $nombre . ' <br />
<strong>Email:</strong> <a href="'.$email.'">'.$email.'</a><br />
<strong>Estado:</strong> ' . $state .' <br />

_____________________________________________________________________________<br>
<p><strong>Comentarios:</strong> <br />
' . $message.'</p>';

if( $mail->Send() ){
    #echo "Envio ok</p>\n";
}


} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}

$URL_Final = 'https://www.exodus.mx/';

$txt= "Tu mensaje ha sido enviado, en breve te responderemos. Gracias."; 
emensaje($txt);
ira($URL_Final);
exit;

#Salir
?>