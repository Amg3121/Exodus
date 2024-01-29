<?php
#echo "V2.0";

$objDOM = new DOMDocument();
 $objDOM->load( 'https://www.megatravel.com.mx/xml/tipo-cambio.xml' ); //make sure path is correct
 $megatc = $objDOM->getElementsByTagName("Megatc");
  // for each note tag, parse the document and get values for
  // tasks and details tag.

  foreach( $megatc as $value )
  {
    $dolares = $value->getElementsByTagName("dolar");
    $dolar  = $dolares->item(0)->nodeValue;
	
	$fechas = $value->getElementsByTagName("fecha");
    $fecha_tc  = $fechas->item(0)->nodeValue;
	
	$hoy = date('Y-m-d');
	if ( $fecha_tc == $hoy) {
	setlocale(LC_MONETARY, 'es_MX');
	echo "<strong>" . money_format('%i', $dolar) . "</strong>";
	}
  } 	
  
?>