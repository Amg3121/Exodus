<div id="menu">
<ul class="menu">
<?php
if ($section == 1 ) {  echo '<li class="desactivados">Cat&aacute;logo</li>'; }
	else { echo '<li><a href="cpanel.php">Cat&aacute;logo</a></li>'; }

if ($section == 2 ) {  echo '<li class="desactivados">Reservar</li>'; }
	else { echo '<li><a href="Reservar.php">Reservar</a></li>'; }

if ($section == 3 ) {  echo '<li class="desactivados">Servicios</li>'; }
	else { echo '<li><a href="Servicios.php">Servicios</a></li>'; }

if ($section == 4 ) {  echo '<li class="desactivados">Mi Web</li>'; }
	else { echo '<li><a href="PagWeb.php">Crear Web</a></li>'; }

if ($section == 5 ) {  echo '<li class="desactivados">Usuarios</li>'; }
	else { echo '<li><a href="Usuarios.php">Usuarios</a></li>'; }	
?>

<li><a href="Contacto.php">Contacto</a></li>
<li><a href="logout.php">Salir</a></li>
</ul>
</div>