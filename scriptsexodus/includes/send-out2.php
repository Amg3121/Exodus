<?php
ob_start("ob_gzhandler");
include ('mainfx.php');
include ('../adodb/adodb.inc.php');
include "exodus.inc.php";
$db->EXECUTE("set names 'utf8'");


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
  $mail->AddAddress($mail_contacto, $Ncomercial);
  //$mail->AddBCC("li.luisgarcia@gmail.com", "Luis García");
  $mail->AddBCC("info@exodus.mx", "Exodus Travel");
  //$mail->AddBCC("zcruz@meca.mx", $Ncomercial);
  
  $email="zcruz@meca.mx";
  $mail_contacto="zcruz@meca.mx";
  
#  $mail->AddReplyTo('name@yourdomain.com', 'First Last');
  $mail->Subject = "Contacto desde su página Exodus " . date('d-m-Y');
  $mail->AltBody = 'El correo no puede ser desplegado correctamente'; // optional - MsgHTML will create an alternate automatically
	
#  $mail->MsgHTML(file_get_contents('contents.php'));
$mail->Body  =  '<font face="Arial">

<p>Mensaje recibido a trav&eacute;s de su página web Exodus</p>

<a href="mailto:'.$email.'" style="background-color:#7ad800; color:#FFFFFF; padding:10px 20px 10px 20px; text-decoration:none;"> Responder </a>  
<br />
<strong>Nombre:</strong> ' . $nombre . ' <br />
<strong>Email:</strong> <a href="'.$email.'">'.$email.'</a><br />
<strong>Tel&eacute;fono:</strong> ' . $phone .' <br />

_____________________________________________________________________________<br>
<p><strong>Comentarios:</strong> <br />
' . $message.'</p>';

if( $mail->Send() ){
    #echo "Envio ok</p>\n";

#Insert MSJ
//$qry_insert= "INSERT INTO contacto_agencias (id_agencia, N_agencia, Nombre, Email, Telefono, Mensaje, fenvio)
	//		               VALUES ($agency, '$Ncomercial', '$nombre', '$email', '$phone', '$message', now() );";
}

//$rs = $db->Execute($qry_insert) or die("Error in query: $qry_insert. <br /><br />" . $db->ErrorMsg());


} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}


$txt= "Tu mensaje ha sido enviado, en breve te responderemos. Gracias."; 
emensaje($txt);
ira($URL_Final);
exit;

#Salir
?>