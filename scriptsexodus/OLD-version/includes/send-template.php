<?php
ob_start("ob_gzhandler");
include ('mainfx.php');
include ('../adodb/adodb.inc.php');
include "exodus.inc.php";

$asunto = $_POST['asunto'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$message = $_POST['mensaje'];
$emailAgencia = $_POST['agencia'];
//$url = $_POST['url'];


$FieldName= "Asunto";
Fieldneeded ($FieldName, $asunto);
$FieldName= "email";
Fieldneeded ($FieldName, $email);
$FieldName= "Tel\u00e9fono";
Fieldneeded ($FieldName, $telefono);
$FieldName= "Comentarios";
Fieldneeded ($FieldName, $message);

#Validar que el email sea correcto
if (check_email_address($email) == FALSE) { 
	
	$txt= "El email es incorrecto, verifica por favor";
	emensaje($txt);
	back();
	exit;
}

if (isset($_POST['action']) && ($_POST['action'] == 'process')) {

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify'; 
$recaptcha_secret = '6Le9Ue0ZAAAAACb6DxPxzGhh5H9ocQRjfFl0UIHx'; 
$recaptcha_response = $_POST['recaptcha_response']; 
$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response); 
$recaptcha = json_decode($recaptcha); 

if($recaptcha->score >= 0.7){

    // código para procesar los campos y enviar el form

    echo 'true';

} else {

    // código para lanzar aviso de error en el envío
    echo 'false';

}

}

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
  $mail->AddAddress($emailAgencia, 'Contacto sitio web');
  $mail->AddBCC("info@exodus.mx", "Exodus Travel");
  $mail->AddBCC("dmarin@meca.mx", 'David Marin');
  $mail->AddBCC("aguzman@megatravel.com.mx", 'Arturo Guzmán');
  
  
#  $mail->AddReplyTo('name@yourdomain.com', 'First Last');
$mail->Subject = "Contacto desde su página Exodus " . date('d-m-Y');
$mail->AltBody = 'El correo no puede ser desplegado correctamente'; // optional - MsgHTML will create an alternate automatically
	
#  $mail->MsgHTML(file_get_contents('contents.php'));
$mail->Body  =  '<font face="Arial">

<p>Mensaje recibido a trav&eacute;s de su página web Exodus</p>

<a href="mailto:'.$email.'" style="background-color:#7ad800; color:#FFFFFF; padding:10px 20px 10px 20px; margin-bottom:15px; text-decoration:none; text-align:center; display:block; width:250px;"> Responder </a>  
<br>
<strong>Asunto:</strong> ' . $asunto . ' <br />
<strong>Email:</strong> <a href="'.$email.'">'.$email.'</a><br />
<strong>Tel&eacute;fono:</strong> ' . $telefono .' <br />
_____________________________________________________________________________<br>
<p><strong>Comentarios:</strong> <br />
' . $message.'</p>';

if( $mail->Send() ){
    echo "Envio ok</p>\n";

#Insert MSJ


}


} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}

$txt= "Tu mensaje ha sido enviado, en breve te responderemos. Gracias."; 
emensaje($txt);
ira($url);
exit;





?>