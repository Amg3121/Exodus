<?php
#Funciones PHP

#validador de campo lleno
function Fieldneeded ($FieldName, $valor) {

if ($valor== "") {
$txt= "Falta informaci\u00f3n para el campo \u0022" . $FieldName . "\u0022, verifica!";
emensaje($txt);
back();
exit;
}
}

####Alerta
function emensaje($txt){ print "<script> alert(\"$txt\");</script>"; }

####Back
function back() {
print "<script>javascript:history.back()</script>";
 } 

####Redireccionar
function ira($url) {
print "<script>location.href='$url'</script>";
}
 
 
function check_email_address($email) {
// First, we check that there's one @ symbol, and that the lengths are right
if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
// Email invalid because wrong number of characters in one section, or wrong number of @ symbols.
return false;
}
// Split it into sections to make life easier
$email_array = explode("@", $email);
$local_array = explode(".", $email_array[0]);
for ($i = 0; $i < sizeof($local_array); $i++) {
if (!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) {
return false;
}
}
if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) { // Check if domain is IP. If not, it should be valid domain name
$domain_array = explode(".", $email_array[1]);
if (sizeof($domain_array) < 2) {
return false; // Not enough parts to domain
}
for ($i = 0; $i < sizeof($domain_array); $i++) {
if (!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|([A-Za-z0-9]+))$", $domain_array[$i])) {
return false;
}
}
}
return true;
}


#Convierte fecha de normal a mysql


function fechamysql($fecha){
    ereg( "([0-9]{1,2})/([0-9]{1,2})/([0-9]{2,4})", $fecha, $mifecha);
    $lafecha=$mifecha[3]."-".$mifecha[2]."-".$mifecha[1];
    return $lafecha;
} 



##### Seleccionar estado de la republica
function generaEstados()
{
	include ('adodb/adodb.inc.php');
	include "exodus.inc.php";

echo "<select name='Estado' id='estado' onChange='cargaContenido(this.id)'>";
echo "<option value='0'>Elige</option>";

$qry_select= "SELECT  id_estados, estados FROM estados ORDER BY estados";
$rs = $db->Execute($qry_select) or die("Error: $qry_select.<br />" . $db->ErrorMsg());

while (!$rs->EOF) {
		
		$id= $rs->fields['id_estados'];
		$opcion= $rs->fields['estados'];	
		echo "<option value='". $id ."'>". $opcion ."</option>";
		$rs->MoveNext();
		}
	#}
	echo "</select>";


}

function dameestado ($cve_estado, $db) {

$Edo= $db-> GetOne("Select estados from estados WHERE id_estados= '$cve_estado'");
return $Edo;
}

function damemunicipio($cve_mun, $db) {
$Municipio= $db-> GetOne("Select Municipio from  municipios WHERE id_municipio= '$cve_mun'");
return $Municipio;
}



##Validar sesion y rol:
function ValSesionUser($Permitido) {

if ($_SESSION['Rol'] == "" ||  $_SESSION['Rol']!= $Permitido) {
	emensaje("Para acceder debes estar registrado.");
    session_destroy();
	ira(".");
	exit;
	}

}


#Gerna código

function giveacode() {

$random_id_length = 4;
$rnd_id = crypt(uniqid(rand(),1));
$rnd_id = strip_tags(stripslashes($rnd_id));
$rnd_id = str_replace(".","",$rnd_id);
$rnd_id = strrev(str_replace("/","",$rnd_id));
$rnd_id = substr($rnd_id,0,$random_id_length);
$rnd_id= mb_strtoupper($rnd_id);
return $rnd_id;

}

function giveapassword() {

$str = "abcdefghijklmnopqrstuvwxyz1234567890";
$psw = "";
for($i=0;$i<6;$i++) {
$psw .= substr($str,rand(0,34),1);
}
return $psw;
	 
}	 
	 

?>