<?php
$db = &ADONewConnection('mysql'); 
#$db->PConnect('localhost','root','','exodus12mt')

#Server;
//$db->PConnect('exodusqry.db.5419924.hostedresource.com','exodusqry','uyT65ss','exodusqry')
$db->PConnect('exodus12mt.db.5419924.hostedresource.com','exodus12mt','df78ttR44!','exodus12mt');

$db->EXECUTE("set names 'utf8'");
?>