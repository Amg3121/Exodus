<?php
$db = &ADONewConnection('mysql'); 
#$db->PConnect('localhost','root','','exodus12mt')

#Server;
#$db->PConnect('exodus12mt.db.5419924.hostedresource.com','exodus12mt','df78ttR44!','exodus12mt');
$db->PConnect('localhost','exodus_12mt','df78ttR44!','exodus_12mt');
$db->EXECUTE("set names 'utf8'");
?>