<?
//$db = &ADONewConnection('mysql'); 
$db = ADONewConnection('mysqli'); 
$db-> PConnect('localhost','exodus_add','9PkAqgr-QnTh','exodus_12mt');
$db-> EXECUTE("set names 'utf8'");
?>