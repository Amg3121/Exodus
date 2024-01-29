

<?php 
$db = &ADONewConnection('mysql'); 
$db->PConnect('megatravel.com.mx','megatrav_select','f9gx3q7tx2','megatrav_el') or die("No se pudo realizar la conexion");
$db->EXECUTE("set names 'utf8'");
?>