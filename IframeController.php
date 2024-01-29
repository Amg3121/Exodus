<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\HomeController;
use App\Http\Controllers\DestinationsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use App\Http\ControllersIframe\Travel;
use App\Http\ControllersIframe\Airline;
use App\Http\ControllersIframe\Country;
use App\Http\ControllersIframe\City;
use App\Http\ControllersIframe\Department;
use App\Http\ControllersIframe\Season;
use App\Http\ControllersIframe\SeasonTravel;
use App\Http\ControllersIframe\Visa;
use App\Http\Controllers\Controller;

class IframeController extends Controller
{

  /*******************************************************************************
   *
   *Función para la conexion de la api y traer bloqueos
   *
   *******************************************************************************/
  public function get_data($url)
  {
    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
  }







    /*Cache destinos programas regulares*/
    public function CreaCacheRegularesIframe($Dest)
    {

        return Cache::remember('postsiframe-'.$Dest, 480, function() use ($Dest) {

            return Department::where('id', '=', $Dest)->first();
        });
    }







    /*Cache destinos programas regulares*/
    public function CreaCacheSeasonTravelProIframe()
    {
        return Cache::remember('posts_season_travel_iframe', 480, function() {

            return SeasonTravel::where('active_item', 1)
                    ->where('season_code_season', 'PRO')
                    ->orderBy('order_item')
                    ->get();

        });
    }





  /*******************************************************************************
   *
   *Recibe las promociones, temporadas, por default muestra promociones
   *
   *******************************************************************************/
  /*******************************************************************************
   *Aqui recibe los Destinos, las temporadas y las ciudades
   *******************************************************************************/
  public function vi(Request $request)
  {
    $Dest         = $request['Dest'];
    $Country      = $request['Country'];
    $temporada    = $request['temporada'];
    $lmiel        = $request['lmiel'];
    $Dominio      = $request['domi'];
    $Dominioviaja = $request['domiviaja'];
    $fontId       = $request['ff'];
    if (!$fontId) {
      $fontId = 1;
    }
    $fontKind = array(
      "", "Arial, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif",
      "Gill Sans, sans-serif",  "Georgia, sans-serif", "Comic Sans MS, sans-serif",
      "Lucida Sans Unicode, sans-serif", "Times New Roman, sans-serif",
      "'Century Gothic', sans-serif", "'Coustard', serif", "'Roboto', sans-serif", "'Roboto Slab', serif"
    );
    $fontFamily   = $fontKind[$fontId];
    $txtColor     = $request['txtColor'];
    $aColor       = $request['aColor'];
    $ahColor      = $request['ahColor'];
    $thBG         = $request['thBG'];
    $thTxColor    = $request['thTxColor'];
    if ($thBG == "") {
      $thBG = "666666";
    }
    if ($thTxColor == "") {
      $thTxColor = "CCCCCC";
    }
    $colectionMainCarousel = [];


    $colectionProCarousel  = [];
    $colectionTempCarousel = [];
    $colectionBlqCarousel  = [];
    $colectionFavCarousel  = [];

    $cad_items_main        = "";
    $cad_items_pro         = "";
    $cad_items_temp        = "";
    $cad_items_blo         = "";
    $cad_items_fav         = "";

    /*******************************************************************************
     *modelo de temporada
     *******************************************************************************/

    /*******************************************************************************
     *Cuando no reciben nada muestra el listado de promociones
     *******************************************************************************/
    if (empty($temporada) && empty($lmiel)) {



      /****** OBTENER PAQUETES DEL CARRUSEL MEGA OFERTAS Y PROMOS VIGENTES ******/
      /*$season_travel_pro = SeasonTravel::where('active_item', 1)
        ->where('season_code_season', 'PRO')
        ->orderBy('order_item')
        ->get();*/


      //consulta cahe de bloqueos
      if ( Cache::has('posts_season_travel_iframe') == true )
      {
          //si, existe cache,  solo lo obtiene
          $season_travel_pro = Cache::get('posts_season_travel_iframe', 'alterno');
      }
      else
      {
          //si, no existe cache, lo crea y lo obtiene
          $season_travel_pro       = $this->CreaCacheSeasonTravelProIframe();
          $season_travel_pro       = Cache::get('posts_season_travel_iframe', 'alterno');
      }









      foreach ($season_travel_pro as $pro) {

        if ($pro->bloqueo_mt != null) {
          $cad_items_pro .= "mts[]=" . $pro->bloqueo_mt . "&";
        }

        if ($pro->travel_mt != null && $pro->travels->status == 1) {

          /*añade a la colección programas regulares*/
          $colectionProCarousel[$pro->travels->mt] = [
            "mt"          => $pro->travels->mt,
            "name"        => $pro->travels->name,
            "days"        => $pro->travels->days,
            "price_from"  => number_format($pro->travels->price_from),
            "currency"    => $pro->travels->currency,
            "type"        => "regular",
          ];
        }
      }

      //limpia último & de la cadena de bloqueos
      $cad_items_pro = substr($cad_items_pro, 0, -1);

      /*** API Bloqueos Carousel****/
      $api_pro_carousel = $this->get_data(url('https://www.megatravel.com.mx/tester/mts/' . $cad_items_pro . ''));
      $api_pro_carousel = json_decode($api_pro_carousel, true);

      if (!isset($api_pro_carousel['data'])) {
        $api_pro_carousel = "";
      } else {

        /*rellena colección con bloqueos*/
        foreach ($api_pro_carousel['data'] as $api_pro_carousel) {

          $colectionProCarousel[$api_pro_carousel['clv']] = [
            "mt"          => $api_pro_carousel['clv'],
            "name"        => $api_pro_carousel['name'],
            "days"        => $api_pro_carousel['days'],
            "price_from"  => number_format($api_pro_carousel['from']),
            "currency"    => $api_pro_carousel['currency_code'],
            "type"        => "bloqueo",
          ];
        }
      }

      if ($colectionProCarousel != "") {
        $collection_vi = [];
        $contador = 0;

        foreach ($colectionProCarousel as $pro) {
          $collection_vi[] = "<tr data-price='" . $pro['price_from'] . "' data-duration='" . $pro['days'] . "'>
                                          <td>
                                          <div class='nom_paquete'>
                                          <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $pro['mt'] . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $pro['mt'] . " " . $pro['name'] . "</a>
                                          </div>
                                          </td>" .
            "<td>" . $pro['days'] . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>";

          $collection_vi[] = "</div></td><td>" . $pro['price_from'] . "<small>" . " " . $pro['currency'] . "</small></td></tr>";

          $contador++;
        }
      }
    }

    /*******************************************************************************
     *Si recibe lmiel y temporada esta vacio muestra sus respectivos programas
     *******************************************************************************/
    if (empty($temporada) && !empty($lmiel)) {

      /****** OBTENER PAQUETES DEL CARRUSEL MEGA OFERTAS Y PROMOS VIGENTES ******/
      $season_travel_pro = SeasonTravel::where('active_item', 1)
        ->where('season_code_season', $lmiel)
        ->orderBy('order_item')
        ->get();

      foreach ($season_travel_pro as $pro) {

        if ($pro->bloqueo_mt != null) {
          $cad_items_pro .= "mts[]=" . $pro->bloqueo_mt . "&";
        }

        if ($pro->travel_mt != null && $pro->travels->status == 1) {

          /*añade a la colección programas regulares*/
          $colectionProCarousel[$pro->travels->mt] = [
            "mt"          => $pro->travels->mt,
            "name"        => $pro->travels->name,
            "days"        => $pro->travels->days,
            "price_from"  => number_format($pro->travels->price_from),
            "currency"    => $pro->travels->currency,
            "type"        => "regular",
          ];
        }
      }

      //limpia último & de la cadena de bloqueos
      $cad_items_pro = substr($cad_items_pro, 0, -1);

      /*** API Bloqueos Carousel****/
      $api_pro_carousel = $this->get_data(url('https://www.megatravel.com.mx/tester/mts/' . $cad_items_pro . ''));
      $api_pro_carousel = json_decode($api_pro_carousel, true);

      if (!isset($api_pro_carousel['data'])) {
        $api_pro_carousel = "";
      } else {

        /*rellena colección con bloqueos*/
        foreach ($api_pro_carousel['data'] as $api_pro_carousel) {

          $colectionProCarousel[$api_pro_carousel['clv']] = [

            "mt"          => $api_pro_carousel['clv'],
            "name"        => $api_pro_carousel['name'],
            "days"        => $api_pro_carousel['days'],
            "price_from"  => number_format($api_pro_carousel['from']),
            "currency"    => $api_pro_carousel['currency_code'],
            "type"        => "bloqueo",
          ];
        }
      }

      if ($colectionProCarousel != "") {
        $collection_vi = [];
        $contador = 0;

        foreach ($colectionProCarousel as $pro) {
          $collection_vi[] = "<tr data-price='" . $pro['price_from'] . "' data-duration='" . $pro['days'] . "'>
                                            <td>
                                            <div class='nom_paquete'>
                                            <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $pro['mt'] . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $pro['mt'] . " " . $pro['name'] . "</a>
                                            </div>
                                            </td>" .
            "<td>" . $pro['days'] . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>";

          $collection_vi[] = "</div></td><td>" . $pro['price_from'] . "<small>" . " " . $pro['currency'] . "</small></td></tr>";

          $contador++;
        }
      }
    }

    /*******************************************************************************
     *Si recibe temporada y lmiel esta vacio muestra sus respectivos programas
     *******************************************************************************/
    if (!empty($temporada) && empty($lmiel)) {

      /****** OBTENER PAQUETES DEL CARRUSEL MEGA OFERTAS Y PROMOS VIGENTES ******/
      $season_travel_pro = SeasonTravel::where('active_item', 1)
        ->where('season_code_season', $temporada)
        ->orderBy('order_item')
        ->get();

      foreach ($season_travel_pro as $pro) {

        if ($pro->bloqueo_mt != null) {
          $cad_items_pro .= "mts[]=" . $pro->bloqueo_mt . "&";
        }

        if ($pro->travel_mt != null && $pro->travels->status == 1) {

          /*añade a la colección programas regulares*/
          $colectionProCarousel[$pro->travels->mt] = [
            "mt"          => $pro->travels->mt,
            "name"        => $pro->travels->name,
            "days"        => $pro->travels->days,
            "price_from"  => number_format($pro->travels->price_from),
            "currency"    => $pro->travels->currency,
            "type"        => "regular",
          ];
        }
      }

      //limpia último & de la cadena de bloqueos
      $cad_items_pro = substr($cad_items_pro, 0, -1);

      /*** API Bloqueos Carousel****/
      $api_pro_carousel = $this->get_data(url('https://www.megatravel.com.mx/tester/mts/' . $cad_items_pro . ''));
      $api_pro_carousel = json_decode($api_pro_carousel, true);

      if (!isset($api_pro_carousel['data'])) {
        $api_pro_carousel = "";
      } else {

        /*rellena colección con bloqueos*/
        foreach ($api_pro_carousel['data'] as $api_pro_carousel) {

          $colectionProCarousel[$api_pro_carousel['clv']] = [

            "mt"          => $api_pro_carousel['clv'],
            "name"        => $api_pro_carousel['name'],
            "days"        => $api_pro_carousel['days'],
            "price_from"  => number_format($api_pro_carousel['from']),
            "currency"    => $api_pro_carousel['currency_code'],
            "type"        => "bloqueo",
          ];
        }
      }

      if ($colectionProCarousel != "") {
        $collection_vi = [];
        $contador = 0;

        foreach ($colectionProCarousel as $pro) {
          $collection_vi[] = "<tr data-price='" . $pro['price_from'] . "' data-duration='" . $pro['days'] . "'>
                                          <td>
                                          <div class='nom_paquete'>
                                          <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $pro['mt'] . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $pro['mt'] . " " . $pro['name'] . "</a>
                                          </div>
                                          </td>" .
            "<td>" . $pro['days'] . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>";

          $collection_vi[] = "</div></td><td>" . $pro['price_from'] . "<small>" . " " . $pro['currency'] . "</small></td></tr>";

          $contador++;
        }
      }
    }

    /*******************************************************************************
     *Si recibe temporada y lmiel esta vacio muestra sus respectivos programas
     *******************************************************************************/
    if (!empty($temporada) && !empty($lmiel)) {
      /****** OBTENER PAQUETES DEL CARRUSEL MEGA OFERTAS Y PROMOS VIGENTES ******/
      $season_travel_pro = SeasonTravel::where('active_item', 1)
        ->where('season_code_season', "PRO")
        ->orderBy('order_item')
        ->get();






      foreach ($season_travel_pro as $pro) {

        if ($pro->bloqueo_mt != null) {
          $cad_items_pro .= "mts[]=" . $pro->bloqueo_mt . "&";
        }

        if ($pro->travel_mt != null && $pro->travels->status == 1) {

          /*añade a la colección programas regulares*/
          $colectionProCarousel[$pro->travels->mt] = [
            "mt"          => $pro->travels->mt,
            "name"        => $pro->travels->name,
            "days"        => $pro->travels->days,
            "price_from"  => number_format($pro->travels->price_from),
            "currency"    => $pro->travels->currency,
            "type"        => "regular",
          ];
        }
      }

      //limpia último & de la cadena de bloqueos
      $cad_items_pro = substr($cad_items_pro, 0, -1);

      /*** API Bloqueos Carousel****/
      $api_pro_carousel = $this->get_data(url('https://www.megatravel.com.mx/tester/mts/' . $cad_items_pro . ''));
      $api_pro_carousel = json_decode($api_pro_carousel, true);

      if (!isset($api_pro_carousel['data'])) {
        $api_pro_carousel = "";
      } else {

        /*rellena colección con bloqueos*/
        foreach ($api_pro_carousel['data'] as $api_pro_carousel) {

          $colectionProCarousel[$api_pro_carousel['clv']] = [

            "mt"          => $api_pro_carousel['clv'],
            "name"        => $api_pro_carousel['name'],
            "days"        => $api_pro_carousel['days'],
            "price_from"  => number_format($api_pro_carousel['from']),
            "currency"    => $api_pro_carousel['currency_code'],
            "type"        => "bloqueo",
          ];
        }
      }

      if ($colectionProCarousel != "") {
        $collection_vi = [];
        $contador = 0;

        foreach ($colectionProCarousel as $pro) {
          $collection_vi[] = "<tr data-price='" . $pro['price_from'] . "' data-duration='" . $pro['days'] . "'>
                                          <td>
                                          <div class='nom_paquete'>
                                          <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $pro['mt'] . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $pro['mt'] . " " . $pro['name'] . "</a>
                                          </div>
                                          </td>" .
            "<td>" . $pro['days'] . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>";

          $collection_vi[] = "</div></td><td>" . $pro['price_from'] . "<small>" . " " . $pro['currency'] . "</small></td></tr>";

          $contador++;
        }
      }
    }
    /*******************************************************************************
     *
     *Recibe el destino y muestra sus programas
     *
     *******************************************************************************/
    /*******************************************************************************
     *Si existe  la variable Destino
     *******************************************************************************/
    if (isset($Dest)) {




      /*******************************************************************************
       *Compara el id recibido y trae el code del department para concatenar con la url
       *******************************************************************************/
      $api = Department::select('id', 'code')->get();
      foreach ($api as $a) {
        if ($a->id == $Dest) {
          if ($a->code == 'camerica') {
            $code                = 'Centroamerica';
            $find_api_department =  $code;
          } else {
            $find_api_department =  $a->code;
          }
        }
      }



      /*******************************************************************************
       *Conecta con api de bloqueos
       *******************************************************************************/
      if (!empty($find_api_department)) {

        
        //$api_dest = $this->get_data(url('tester/destination/' . $find_api_department . ''));
        //$api_dest = json_decode($api_dest, true);
        if($find_api_department === "edeportivo"){
          $find_api_department = "eespeciales";
        }
        //return $find_api_department;
        //consulta cahe de bloqueos
        if ( Cache::has('postsblq-'.$find_api_department) == true )
        {
            //si, existe cache,  solo lo obtiene
            $api_dest = Cache::get('postsblq-'.$find_api_department, 'alterno');
        }
        else
        {
            //si, no existe cache, lo crea y lo obtiene
            $DestController = new DestinationsController();
            $api_dest       = $DestController->CreaCacheBloqueos($find_api_department);
            $api_dest       = Cache::get('postsblq-'.$find_api_department, 'alterno');
        }



        $collection_vi      = [];
        $colectionDestinblq = [];
        $colectionDestinreg = [];


        /*******************************************************************************
         *Inicializa vars para filtros range
         *******************************************************************************/
        $min_price       = 0;
        $max_price       = 0;
        $min_duration    = 0;
        $max_duration    = 0;
        $array_duration  = [];
        $array_price     = [];


        if( !isset($api_dest['data']) )
        {
            $api_dest = "";
            $colectionDestinblq = [];
        }
        else
        {
        /*******************************************************************************
         *Rellena colección con bloqueos
         *******************************************************************************/
        foreach ($api_dest['data'] as $api_travel) {

          /*******************************************************************************
           *Genera cadena con coleccion de ciudades
           *******************************************************************************/
          //cadena cities
          $collection_cities_cad = "";

          if (is_array($api_travel['cities'])) {

            foreach ($api_travel['cities'] as $api_city) {
              $collection_cities_cad .= $api_city['name'] . ", ";
            }
            //limpia último & de la cadena de bloqueos
            $collection_cities_cad = substr($collection_cities_cad, 0, -2);
          } else {
            //genera cadena con coleccion de ciudades
            $collection_cities_array = explode(" – ", $api_travel['cities']);
            foreach ($collection_cities_array as $api_city) {
              $search  = array(' - ', ' -', '- ');
              $replace = array(', ', ', ', ', ');
              $api_city = str_replace($search, $replace, $api_city);

              $api_city = ucwords($api_city);
              $collection_cities_cad .= $api_city . ", ";
            }
            $collection_cities_cad = substr($collection_cities_cad, 0, -2);
          }




          $collection_cities_cad = substr($collection_cities_cad, 0, -2);

          /*******************************************************************************
           *Genera cadena con coleccion de imagen
           *******************************************************************************/
          $collection_images_cad = '<img class="img-fluid" src="https://one.cdnmega.com/images/viajes/covers/siena-fachada-de-la-catedral.jpg" title="' . $api_travel['name'] . '">';

          /*******************************************************************************
           *Arreglo colección de bloqueos
           *******************************************************************************/
          $colectionDestinblq[] = [
            "mt"          => $api_travel['clv'],
            "name"        => $api_travel['name'],
            "days"        => $api_travel['days'],
            "price_from"  => $api_travel['from'],
            "currency"    => $api_travel['currency_code'],
            "cities"      => $collection_cities_cad,
            "img"         => $collection_images_cad,
            "type"        => ".",
          ];
        }
      }

        /*******************************************************************************
         *Ejecuta consulta de regulares
         *******************************************************************************/
        //$depto = Department::where('id', '=', $Dest)->first();


        //consulta cahe de regulares
        if ( Cache::has('postsiframe-'.$Dest) == true )
        {
            //si, existe cache,  solo lo obtiene
            $depto = Cache::get('postsiframe-'.$Dest, 'alterno');
        }
        else
        {
            //si, no existe cache, lo crea y lo obtiene
            $this->CreaCacheRegularesIframe($Dest);
            $depto = Cache::get('postsiframe-'.$Dest, 'alterno');
        }








        if (!empty($depto)) {
          $collection_vi = [];
          $contador = 0;
          $collection_depto = $depto->name;
          foreach ($depto->travels as $via) {
            if ($via->status == 1) {

              $collection_cities_reg = "";
              foreach ($via->cities as $ci) {
                $collection_cities_reg .= $ci->name . ", ";
              }

              $collection_cities_reg = substr($collection_cities_reg, 0, -2);

              $colectionDestinreg[] = [
                "mt"          => $via->mt,
                "name"        => $via->name,
                "days"        => $via->days,
                "price_from"  => $via->price_from,
                "currency"    => $via->currency,
                "cities"      => $collection_cities_reg,
                "type"        => "",
                "status"      => $via->status,
              ];
            }
          }




          /*******************************************************************************
           *une las dos colecciones de arreglos regulares/bloqueos
           *******************************************************************************/
          $colectionDestinDuo = array_collapse([$colectionDestinblq, $colectionDestinreg]);

          foreach ($colectionDestinDuo as $via) {

            /*******************************************************************************
             *une las dos colecciones de arreglos regulares/bloqueos
             *******************************************************************************/
            $array_price[]    = $via['price_from'];
            $array_duration[]    = $via['days'];

            $collection_vi[$via['mt']] = "<tr data-price='" . number_format($via['price_from']) . "' data-duration='" . $via['days'] . "'>
                                   <td>
                                   <div class='nom_paquete'>
                                   <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $via['mt'] . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $via['mt'] . " " . $via['name'] . " <span style='font-size:10px'>" . $via['type'] . "</span></a>
                                   </div>
                                   </td>" .
              "<td>" . $via['days'] . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>" . $via['cities'] . "</div></td><td>" . number_format($via['price_from']) . "<small>" . " " . $via['currency'] . "</small></td></tr>";
            $contador++;
          }

          /*******************************************************************************
           *muestra sus respectivas precios conforme a su departamento
           *******************************************************************************/

          if (!empty($array_price) && !empty($array_duration)) {
            $minDias    = min($array_duration);
            $maxDias    = max($array_duration);
            $minFare    = min($array_price);
            $maxFare    = max($array_price);
          }

          /*if(isset($Dest)){
                if ($Dest==1) {
                  $maxFare = Travel::where('department', '=', 'europa')->max('price_from');
                  $minFare = Travel::where('department', '=', 'europa')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'europa')->max('days');
                  $minDias = Travel::where('department', '=', 'europa')->min('days');
                }
                if ($Dest==2) {
                  $maxFare = Travel::where('department', '=', 'moriente')->max('price_from');
                  $minFare = Travel::where('department', '=', 'moriente')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'moriente')->max('days');
                  $minDias = Travel::where('department', '=', 'moriente')->min('days');
                }
                if ($Dest==7) {
                  $maxFare = Travel::where('department', '=', 'sudamerica')->max('price_from');
                  $minFare = Travel::where('department', '=', 'sudamerica')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'sudamerica')->max('days');
                  $minDias = Travel::where('department', '=', 'sudamerica')->min('days');
                }
                if ($Dest==9) {
                  $maxFare = Travel::where('department', '=', 'camerica')->max('price_from');
                  $minFare = Travel::where('department', '=', 'camerica')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'camerica')->max('days');
                  $minDias = Travel::where('department', '=', 'camerica')->min('days');
                }
                if ($Dest==3) {
                  $maxFare = Travel::where('department', '=', 'canada')->max('price_from');
                  $minFare = Travel::where('department', '=', 'canada')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'canada')->max('days');
                  $minDias = Travel::where('department', '=', 'canada')->min('days');
                }
                if ($Dest==8) {
                  $maxFare = Travel::where('department', '=', 'usa')->max('price_from');
                  $minFare = Travel::where('department', '=', 'usa')->min('price_from');
                  $maxDias = Travel::where('department', '=', 'usa')->max('days');
                  $minDias = Travel::where('department', '=', 'usa')->min('days');
                }
              }*/

          /*******************************************************************************
           *Cambiar cuando este campo de promociones.
           *******************************************************************************/
          if (!empty($Dest)) {
            switch ($Dest) {
              case 1:
                $Destino_tipo = "europa";
                $Paises_Filtro = array("Alemania", "Austria", "Bélgica", "España", "Francia", "Holanda", "Hungría", "Inglaterra", "Italia", "Rusia", "República Checa", "Suiza");
                $Paises_Acento = array("Alemania", "Austria", "Bélgica", "España", "Francia", "Holanda", "Hungría", "Inglaterra - Reino Unido", "Italia", "Rusia", "República Checa", "Suiza");
                break;

              case 2:
                $Destino_tipo = "moriente";
                $Paises_Filtro = array("Armenia", "Egipto", "Grecia", "Iran", "Israel", "Jordania", "Líbano", "Siria", "Tunez", "Turquía");
                $Paises_Acento = array("Armenia", "Egipto", "Grecia", "Iran", "Israel", "Jordania", "Líbano", "Siria", "Tunez", "Turquía");
                break;

              case 3:
                $Destino_tipo = "canada";
                break;

              case 4:
                $Destino_tipo = "asia";
                break;

              case 5:
                $Destino_tipo = "africa";
                break;

              case 6:
                $Destino_tipo = "pacifico";
                break;

              case 7:
                $Destino_tipo = "sudamerica";
                $Paises_Filtro = array("Argentina", "Brasil", "Colombia", "Chile", "Perú", "Uruguay");
                $Paises_Acento = array("Argentina", "Brasil", "Colombia", "Chile", "Perú", "Uruguay");
                break;

              case 8:
                $Destino_tipo = "usa";
                break;

              case 9:
                $Destino_tipo = "camerica";
                $Paises_Filtro = array("Colombia", "Costa Rica",  "Guatemala", "Panamá");
                $Paises_Acento = array("Colombia", "Costa Rica",  "Guatemala",  "Panamá");
                break;

              case 10:
                $Destino_tipo = "caribe";
                break;

              case 11:
                $Destino_tipo = "mexico";
                break;

              case 12:
                $Destino_tipo = "edeportivo";
                break;

              case 13:
                $Destino_tipo = "cruceros";
                break;
            }

            /*******************************************************************************
             *Si hay algo en la variable $Country realiza su respectiva consulta
             *******************************************************************************/
            if (!empty($Country)) {





              //dd($Country);

              $country = Country::where('name_country', '=', $Country)->first();

              $collection_vi = [];
              $contador = 0;

              foreach ($country->travels as $coutra) {
                if ($Destino_tipo == $coutra->department && $coutra->status == 1) {
                  $collection_vi[] = "<tr data-price='" . $coutra->price_from . "' data-duration='" . $coutra->days . "'>
                                           <td>
                                           <div class='nom_paquete'>
                                           <a href='circuito.php?domi=" . $Dominio . "&domiviaja=" . $Dominioviaja . "&viaje=" . $coutra->mt . "&txtColor=" . $txtColor . "&thBG=" . $thBG . "&thTxColor=" . $thTxColor . "&ff=" . $fontId . "'>" . "MT-" . $coutra->mt . " " . $coutra->name . "</a>
                                           </div>
                                           </td>" .
                    "<td>" . $coutra->days . " Días" . "</td><td id='ciudades'><div class='nom_paquete'>";
                  foreach ($coutra->cities as $ci) {
                    $collection_vi[] = "<span class='city_iframe'>" . $ci->name . " - " . "</span>";
                  }
                  $collection_vi[] = "</div></td><td>" . $coutra->price_from . "<small>" . " " . $coutra->currency . "</small></td></tr>";

                  $contador++;
                }
              }
            }
          }
        }
      } else {
        return "<p> Esta sección se encuentra en mantenimiento, vuelve pronto</p>";
      }
    }

    return view('admin.tools.vi', compact('collection_vi', 'contador', 'collection_depto', 'Dominio', 'Dominioviaja', 'Country', 'collection_dep', 'Paises_Filtro', 'Paises_Acento', 'sqlrange', 'collection_dep', 'fontFamily', 'Dest', 'ahColor', 'aColor', 'thBG', 'fontId', 'txtColor', 'thTxColor', 'maxFare', 'minFare', 'maxDias', 'minDias'));
  }

  /*******************************************************************************
   *
   *Muestra el detalle de cada programa
   *
   *******************************************************************************/
  public function circuito(Request $request)
  {
    //return $request->all();
    $CLV          = $request['viaje'];
    $Dominio      = $request['domi'];
    $Dominioviaja = $request['domiviaja'];
    $fontId       = $request['ff'];
    if (!$fontId) {
      $fontId = 1;
    }
    $fontKind = array(
      "", "Arial, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif",
      "Gill Sans, sans-serif",  "Georgia, sans-serif", "Comic Sans MS, sans-serif",
      "Lucida Sans Unicode, sans-serif", "Times New Roman, sans-serif",
      "'Century Gothic', sans-serif", "'Coustard', serif", "'Roboto', sans-serif",
      "'Roboto Slab', sans-serif"
    );
    $fontFamily   = $fontKind[$fontId];
    $agencid      = $request['agencid'];
    $txtColor     = $request['txtColor'];
    $thBG         = $request['thBG'];
    if ($thBG == "") {
      $thBG = "666666";
    }
    $thTxColor    = $request['thTxColor'];
    $fontf        =  $request['font'];
    if ($thTxColor == "") {
      $thTxColor = "CCCCCC";
    }

    /*******************************************************************************
     *Si existe la variable $CLV, muestra su respectiva consulta
     *******************************************************************************/
    if (isset($CLV)) {

      $viajeblq               = [];
      $viajem                 = [];
      $cad_countries          = "";
      $cad_visas              = "";
      $cad_dates              = "";
      $cad_hotels             = "";
      $cad_hotels_comp        = "";
      $cad_cities             = "";
      $cad_airlines           = "";
      $cad_departures         = "";
      $array_imagen           = [];


      $viaje         = Travel::where([['mt', '=', $CLV], ['status', '=', 1]])->first();



      $airlines_gral = Airline::all();
      $visas_gral    = Visa::all();


      //COnvierte fechas mes
      /*function smartdate($fecha)
      {
        if ($fecha) {
          $f = explode("-", $fecha);
          $nummes = (int) $f[1];
          $mes1 = "0-Ene.-Feb.-Mar.-Abr.-May.-Jun.-Jul.-Ago.-Sept.-Oct.-Nov.-Dic.";
          $mes1 = explode("-", $mes1);
          $desfecha = "$mes1[$nummes] $f[2]";
          return $desfecha;
        }
      }*/

      function smartdate($fecha)
        {
           if ($fecha)
           {
              $f=explode("-",$fecha);
              $nummes=(int)$f[1];
              $mes1="0-Ene.-Feb.-Mar.-Abr.-May.-Jun.-Jul.-Ago.-Sept.-Oct.-Nov.-Dic.";
              $mes1=explode("-", $mes1);
              $desfecha = "$mes1[$nummes] $f[2]. $f[0]";
              return $desfecha;
           }
        }



      if ($viaje != null) {

        //arma cadena de paises regular
        foreach ($viaje->countries as $countri) {
          $cad_countries .= $countri->name_country . ", ";

          //arma cadena de visas por pais regular
          foreach ($countri->visas as $visa) {
            if (count($countri->visas) != 0) {
              $cad_visas .= $visa->description;
            }
          }
        }
        $cad_countries = substr($cad_countries, 0, -2);


        //arma cadena de ciudades regular
        foreach ($viaje->cities as $city) {
          $cad_cities .= $city->name . ", ";
        }
        $cad_cities = substr($cad_cities, 0, -2);


        //arma cadena de aerolineas regular
        foreach ($viaje->airlines as $airline) {
          $cad_airlines .= '<img class="img-fluid lazyload" src="https://one.cdnmega.com/images/aerolineas/iata/' . $airline->code_iata . '.png" alt="' . $airline->airline . '">';
        }


        //arma cadena de imagenes
        foreach ($viaje->multimedia as $imagen) {

          if ($imagen->video_type == 2) {
            $array_imagen = ['<div style="padding:56.25% 0 0 0;position:relative;">
                 <iframe src="https://player.vimeo.com/video/' . $imagen->url . '?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                 <script src="https://player.vimeo.com/api/player.js"></script>
                 </div>'];
          } elseif ($imagen->video_type == 1) {
            $array_imagen = ['<div class="embed-responsive embed-responsive-16by9" id="cont_video">
         <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/' . $imagen->url . '?rel=0"  width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
         </div>'];
          } elseif ($imagen->type == 1) {
            $array_imagen = ['<div>
             <a class="blq_img">
                 <img src="https://one.cdnmega.com/images/viajes/covers/' . $imagen->name . '" alt="' . $imagen->description . '" title="' . $imagen->description . '" width="50%">
             </a>
             </div>'];
          }
        }

        $viajem = [
          "mt"             => $viaje['mt'],
          "name"           => $viaje['name'],
          "days"           => $viaje['days'],
          "nights"         => $viaje['nights'],
          "taxes"          => number_format($viaje['taxes']),
          "departure_date" => $viaje['departure_date'],
          "include"        => $viaje['include'],
          "not_include"    => $viaje['not_include'],
          "itinerary"      => $viaje['itinerary'],
          "currency"       => $viaje['currency'],
          "room_type"      => $viaje['room_type'],
          "image"          => $array_imagen,
          "price_from"     => number_format($viaje['price_from']),
          "price_table"    => $viaje['price_table'],
          "hotels_table"   => $viaje['hotels_table'],
          "operator"       => $viaje['operator'],
          "circuit"        => $viaje['circuit'],
          "array_cities"   => $viaje->cities,
          "cities"         => $cad_cities,
          "array_countries" => $viaje->countries,
          "countries"      => $cad_countries,
          "airlines"       => $cad_airlines,
          "validity"       => $viaje['validity'],
          "status"         => $viaje['status'],
          "type"           => "regular",
        ];
      } elseif ($viaje == null) {

        // API Bloqueo
        $viajeblq = $this->get_data(url('/tester/detail/' . $CLV));
        $viajeblq = json_decode($viajeblq, true);

        if (isset($viajeblq['code'])) {
          return "MT Inactivo";
        } else {

          // --- FECHAS
          //$date_item_departure = [];
          //---------

          // --- FECHAS
          $year_now       = date('Y');
          $year_sig       = date("Y",strtotime($year_now."+ 1 year"));
          $year_sig2       = date("Y",strtotime($year_now."+ 2 year"));
          $date_valid_y   = "";
          $date_item_departure     = [];
          $date_item_departure_sig = [];
          $date_item_departure_sig2 = [];
          $cad_departures_now = "";
          $cad_departures_sig = "";
          $cad_departures_sig2 = "";
          $cad_departures     = "";

          //carga en array fechas del año actual
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_valid_y = implode("-", $date_departure);
            $date_valid_y = substr($date_valid_y, 0, 4);

            if( $date_valid_y == $year_now ){
                $date_item_departure[] = smartdate($date_departure['date']);
            }
        }

        //carga en array fechas del año siguiente
        foreach ($viajeblq['departures'] as $date_departure) {
          $date_valid_y = implode("-", $date_departure);
          $date_valid_y = substr($date_valid_y, 0, 4);

          if( $date_valid_y == $year_sig ){
              $date_item_departure_sig[] = smartdate($date_departure['date']);
          }
      }

      //se formatean los arrays de las fechas del año actual y el año siguiente
      $cad_departures_now = $this->OrderDates($date_item_departure);
      $cad_departures_sig = $this->OrderDates($date_item_departure_sig);
      $cad_departures_sig2 = $this->OrderDates($date_item_departure_sig2);

      if($cad_departures_sig != "" && $cad_departures_sig2 == ""){
        $cad_departures = $cad_departures_now."<br><br><strong>Salidas para el año ".$year_sig.":</strong>".$cad_departures_sig;
    }
    elseif($cad_departures_sig != "" && $cad_departures_sig2 != ""){
        $cad_departures = $cad_departures_now."<br><br><strong>Salidas para el año ".$year_sig.":</strong>".$cad_departures_sig."<br><br><strong>Salidas para el año ".$year_sig2.":</strong>".$cad_departures_sig2;
    }
    else
    {
        $cad_departures = $cad_departures_now;
    }


    //fechas de tabla bloqueos
    foreach ($viajeblq['bloqueos'] as $date_blq) {
      $date_item = smartdate($date_blq['date']);
      $cad_dates .= $date_item.', ';
  }

        /*
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_item_departure[] = smartdate($date_departure['date']);
          }
        */
/*
          $date_item_departure2 = [];
          foreach ($date_item_departure as $item_departure) {
            $date_item_departure2[] = explode(".", $item_departure);
          }
*/
          //Cadenas de mes
        
        /*  $cad_ene = "";
          $cad_feb = "";
          $cad_mar = "";
          $cad_abr = "";
          $cad_may = "";
          $cad_jun = "";
          $cad_jul = "";
          $cad_ago = "";
          $cad_sep = "";
          $cad_oct = "";
          $cad_nov = "";
          $cad_dic = "";
*/

          //recorre arreglo de fechas y crea una cadena para cada mes
       /*   foreach ($date_item_departure2 as $item_departure2) {

            if ($item_departure2[0] == "Ene") {
              $cad_ene .= $item_departure2[1] . ", ";
            } elseif ($item_departure2[0] == "Feb") {
              $cad_feb .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Mar") {
              $cad_mar .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Abr") {
              $cad_abr .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "May") {
              $cad_may .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Jun") {
              $cad_jun .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Jul") {
              $cad_jul .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Ago") {
              $cad_ago .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Sept") {
              $cad_sep .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Oct") {
              $cad_oct .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Nov") {
              $cad_nov .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Dic") {
              $cad_dic .= $item_departure2[1] . ", ";
            }
          }
*/
          //valida que cadena de mes tienen no esta vacío y lo guarda en cadena general
        /*  if ($cad_ene != "") {
            $cad_departures .= "<br>Enero: " . $cad_ene;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_feb != "") {
            $cad_departures .= "<br>Febrero: " . $cad_feb;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_mar != "") {
            $cad_departures .= "<br>Marzo: " . $cad_mar;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_abr != "") {
            $cad_departures .= "<br>Abril: " . $cad_abr;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_may != "") {
            $cad_departures .= "<br>Mayo: " . $cad_may;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_jun != "") {
            $cad_departures .= "<br>Junio: " . $cad_jun;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_jul != "") {
            $cad_departures .= "<br>Julio: " . $cad_jul;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_ago != "") {
            $cad_departures .= "<br>Agosto: " . $cad_ago;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_sep != "") {
            $cad_departures .= "<br>Septiembre: " . $cad_sep;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_oct != "") {
            $cad_departures .= "<br>Octubre: " . $cad_oct;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_nov != "") {
            $cad_departures .= "<br>Noviembre: " . $cad_nov;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_dic != "") {
            $cad_departures .= "<br>Diciembre: " . $cad_dic;
            $cad_departures = substr($cad_departures, 0, -2);
          }

          foreach ($viajeblq['bloqueos'] as $date_blq) {
            $date_item = smartdate($date_blq['date']);
            $cad_dates .= $date_item . ', ';
          }
*/
          //cadena cities
          if (is_array($viajeblq['cities'])) {
            //dd($viajeblq['cities']);
            foreach ($viajeblq['cities'] as $item_city) {
              $cad_cities .= $item_city['name'] . ", ";
            }
            //limpia último & de la cadena de bloqueos
            $cad_cities = substr($cad_cities, 0, -2);
          } else {
            //dd($viajeblq['cities']);
            $cad_cities     = $viajeblq['cities'];
            $search_guion   = array(' - ', ' -', '- ');
            $replace_guion  = array(', ', ', ', ', ');
            $cad_cities     = str_replace($search_guion, $replace_guion, $cad_cities);
          }
          //cadena countries
          foreach ($viajeblq['countries'] as $country) {

            $cad_countries .= $country['name'] . ", ";

            //recorre catalogo general de visas
            foreach ($visas_gral as $cat_visas) {
              if ($cat_visas->country_code == strtolower($country['code'])) {
                //arma cadena de visas blqueo
                $cad_visas .= $cat_visas->description;
              }
            }
          }
          $cad_countries = substr($cad_countries, 0, -2);

          if (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == true) {
            //cadena hotels
            foreach ($viajeblq['hotels'] as $hotel_blq) {
              $cad_hotels .= '<tr>
                          <td>' . $hotel_blq['name'] . '</td>
                          <td>' . $hotel_blq['city'] . '</td>
                          <td>' . $hotel_blq['type'] . '</td>
                          <td>' . $hotel_blq['country'] . '</td>
                          </tr>';
            }
            $cad_hotels_comp .= '<table width="100%"><thead><td>Hotel</td><td>Ciudad</td><td>Tipo</td><td>Pais</td></thead>' . $cad_hotels . '</table>';
          } elseif (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == false) {
            $cad_hotels_comp = $viajeblq['hotels'];
          }

          //cadena imagen
          $array_imagen = ['<div>
          <a class="blq_img">
              <img src="' . $viajeblq["image"] . '" alt="' . $viajeblq['name'] . '" title="' . $viajeblq['name'] . '" width="50%">
          </a>
          </div>'];

          //vigencia
          $cad_vigencia = "Precios vigentes hasta el " . $viajeblq["expire"];

          //recorre catalogo general de aerolineas
          foreach ($airlines_gral as $cat_airlines) {

            if ($cat_airlines->code_iata == $viajeblq['airline_code']) {
              //arma cadena de aerolineas blqueo
              $cad_airlines .= '<img class="img-fluid lazyload" src="https://one.cdnmega.com/images/aerolineas/iata/' . $cat_airlines->code_iata . '.png" alt="' . $cat_airlines->airline . '">';
            }
          }

          $viajem = [
            "mt"                    => $viajeblq['clv'],
            "name"                  => $viajeblq['name'],
            "days"                  => $viajeblq['days'],
            "nights"                => $viajeblq['nights'],
            "price_from"            => number_format($viajeblq['from']),
            "taxes"                 => number_format($viajeblq['taxes']),
            "departure_date"        => $cad_departures,
            "bloqueos"              => $cad_dates,
            "include"               => $viajeblq['include_yes'],
            "not_include"           => $viajeblq['include_not'],
            "itinerary"             => $viajeblq['itinerary'],
            "currency"              => $viajeblq['currency_code'],
            "room_type"             => $viajeblq['room_type'],
            "image"                 => $array_imagen,
            "price_table"           => $viajeblq['list_prices'],
            "hotels_table"          => $cad_hotels_comp,
            "operator"              => "",
            "circuit"               => "",
            "array_cities"          => $viajeblq['cities'],
            "cities"                => $cad_cities,
            "array_countries"       => $viajeblq['countries'],
            "countries"             => $cad_countries,
            "validity"              => $cad_vigencia,
            "airlines"              => $cad_airlines,
            "price_table"           => $viajeblq['list_prices'],
            "department"            => $viajeblq['destination'],
            "status"                => 1,
            "type"                  => "bloqueo",
          ];
        }
      }
    } else {
      return "No existe MT";
    }

    return view('admin.tools.circuito', compact('viajem', 'fontFamily', 'Dominio', 'Dominioviaja', 'txtColor', 'thBG', 'thTxColor'));
  
  }

  public function circuito2(Request $request)
  {
    //return $request->all();
    $CLV          = $request['viaje'];
    $Dominio      = $request['domi'];
    $Dominioviaja = $request['domiviaja'];
    $fontId       = $request['ff'];
    if (!$fontId) {
      $fontId = 1;
    }
    $fontKind = array(
      "", "Arial, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif",
      "Gill Sans, sans-serif",  "Georgia, sans-serif", "Comic Sans MS, sans-serif",
      "Lucida Sans Unicode, sans-serif", "Times New Roman, sans-serif",
      "'Century Gothic', sans-serif", "'Coustard', serif", "'Roboto', sans-serif",
      "'Roboto Slab', sans-serif"
    );
    $fontFamily   = $fontKind[$fontId];
    $agencid      = $request['agencid'];
    $txtColor     = $request['txtColor'];
    $thBG         = $request['thBG'];
    if ($thBG == "") {
      $thBG = "666666";
    }
    $thTxColor    = $request['thTxColor'];
    $fontf        =  $request['font'];
    if ($thTxColor == "") {
      $thTxColor = "CCCCCC";
    }

    /*******************************************************************************
     *Si existe la variable $CLV, muestra su respectiva consulta
     *******************************************************************************/
    if (isset($CLV)) {

      $viajeblq               = [];
      $viajem                 = [];
      $cad_countries          = "";
      $cad_visas              = "";
      $cad_dates              = "";
      $cad_hotels             = "";
      $cad_hotels_comp        = "";
      $cad_cities             = "";
      $cad_airlines           = "";
      $cad_departures         = "";
      $array_imagen           = [];


      $viaje         = Travel::where([['mt', '=', $CLV], ['status', '=', 1]])->first();



      $airlines_gral = Airline::all();
      $visas_gral    = Visa::all();


      //COnvierte fechas mes
      /*function smartdate($fecha)
      {
        if ($fecha) {
          $f = explode("-", $fecha);
          $nummes = (int) $f[1];
          $mes1 = "0-Ene.-Feb.-Mar.-Abr.-May.-Jun.-Jul.-Ago.-Sept.-Oct.-Nov.-Dic.";
          $mes1 = explode("-", $mes1);
          $desfecha = "$mes1[$nummes] $f[2]";
          return $desfecha;
        }
      }*/

      function smartdate($fecha)
        {
           if ($fecha)
           {
              $f=explode("-",$fecha);
              $nummes=(int)$f[1];
              $mes1="0-Ene.-Feb.-Mar.-Abr.-May.-Jun.-Jul.-Ago.-Sept.-Oct.-Nov.-Dic.";
              $mes1=explode("-", $mes1);
              $desfecha = "$mes1[$nummes] $f[2]. $f[0]";
              return $desfecha;
           }
        }



      if ($viaje != null) {

        //arma cadena de paises regular
        foreach ($viaje->countries as $countri) {
          $cad_countries .= $countri->name_country . ", ";

          //arma cadena de visas por pais regular
          foreach ($countri->visas as $visa) {
            if (count($countri->visas) != 0) {
              $cad_visas .= $visa->description;
            }
          }
        }
        $cad_countries = substr($cad_countries, 0, -2);


        //arma cadena de ciudades regular
        foreach ($viaje->cities as $city) {
          $cad_cities .= $city->name . ", ";
        }
        $cad_cities = substr($cad_cities, 0, -2);


        //arma cadena de aerolineas regular
        foreach ($viaje->airlines as $airline) {
          $cad_airlines .= '<img class="img-fluid lazyload" src="https://one.cdnmega.com/images/aerolineas/iata/' . $airline->code_iata . '.png" alt="' . $airline->airline . '">';
        }


        //arma cadena de imagenes
        foreach ($viaje->multimedia as $imagen) {

          if ($imagen->video_type == 2) {
            $array_imagen = ['<div style="padding:56.25% 0 0 0;position:relative;">
                 <iframe src="https://player.vimeo.com/video/' . $imagen->url . '?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                 <script src="https://player.vimeo.com/api/player.js"></script>
                 </div>'];
          } elseif ($imagen->video_type == 1) {
            $array_imagen = ['<div class="embed-responsive embed-responsive-16by9" id="cont_video">
         <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/' . $imagen->url . '?rel=0"  width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
         </div>'];
          } elseif ($imagen->type == 1) {
            $array_imagen = ['<div>
             <a class="blq_img">
                 <img src="https://one.cdnmega.com/images/viajes/covers/' . $imagen->name . '" alt="' . $imagen->description . '" title="' . $imagen->description . '" width="50%">
             </a>
             </div>'];
          }
        }

        $viajem = [
          "mt"             => $viaje['mt'],
          "name"           => $viaje['name'],
          "days"           => $viaje['days'],
          "nights"         => $viaje['nights'],
          "taxes"          => number_format($viaje['taxes']),
          "departure_date" => $viaje['departure_date'],
          "include"        => $viaje['include'],
          "not_include"    => $viaje['not_include'],
          "itinerary"      => $viaje['itinerary'],
          "currency"       => $viaje['currency'],
          "room_type"      => $viaje['room_type'],
          "image"          => $array_imagen,
          "price_from"     => number_format($viaje['price_from']),
          "price_table"    => $viaje['price_table'],
          "hotels_table"   => $viaje['hotels_table'],
          "operator"       => $viaje['operator'],
          "circuit"        => $viaje['circuit'],
          "array_cities"   => $viaje->cities,
          "cities"         => $cad_cities,
          "array_countries" => $viaje->countries,
          "countries"      => $cad_countries,
          "airlines"       => $cad_airlines,
          "validity"       => $viaje['validity'],
          "status"         => $viaje['status'],
          "type"           => "regular",
        ];
      } elseif ($viaje == null) {

        // API Bloqueo
        $viajeblq = $this->get_data(url('/tester/detail/' . $CLV));
        $viajeblq = json_decode($viajeblq, true);

        if (isset($viajeblq['code'])) {
          return "MT Inactivo";
        } else {

          // --- FECHAS
          //$date_item_departure = [];
          //---------

          // --- FECHAS
          $year_now       = date('Y');
          $year_sig       = date("Y",strtotime($year_now."+ 1 year"));
          $year_sig2       = date("Y",strtotime($year_now."+ 2 year"));
          $date_valid_y   = "";
          $date_item_departure     = [];
          $date_item_departure_sig = [];
          $date_item_departure_sig2 = [];
          $cad_departures_now = "";
          $cad_departures_sig = "";
          $cad_departures_sig2 = "";
          $cad_departures     = "";

          //carga en array fechas del año actual
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_valid_y = implode("-", $date_departure);
            $date_valid_y = substr($date_valid_y, 0, 4);

            if( $date_valid_y == $year_now ){
                $date_item_departure[] = smartdate($date_departure['date']);
            }
        }

        //carga en array fechas del año siguiente
        foreach ($viajeblq['departures'] as $date_departure) {
          $date_valid_y = implode("-", $date_departure);
          $date_valid_y = substr($date_valid_y, 0, 4);

          if( $date_valid_y == $year_sig ){
              $date_item_departure_sig[] = smartdate($date_departure['date']);
          }
      }

      //se formatean los arrays de las fechas del año actual y el año siguiente
      $cad_departures_now = $this->OrderDates($date_item_departure);
      $cad_departures_sig = $this->OrderDates($date_item_departure_sig);
      $cad_departures_sig2 = $this->OrderDates($date_item_departure_sig2);

      if($cad_departures_sig != "" && $cad_departures_sig2 == ""){
        $cad_departures = $cad_departures_now."<br><hr><strong>Salidas para el año ".$year_sig.":</strong>".$cad_departures_sig;
    }
    elseif($cad_departures_sig != "" && $cad_departures_sig2 != ""){
        $cad_departures = $cad_departures_now."<br><hr><strong>Salidas para el año ".$year_sig.":</strong>".$cad_departures_sig."<br><hr><strong>Salidas para el año ".$year_sig2.":</strong>".$cad_departures_sig2;
    }
    else
    {
        $cad_departures = $cad_departures_now;
    }


    //fechas de tabla bloqueos
    foreach ($viajeblq['bloqueos'] as $date_blq) {
      $date_item = smartdate($date_blq['date']);
      $cad_dates .= $date_item.', ';
  }

        /*
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_item_departure[] = smartdate($date_departure['date']);
          }
        */
/*
          $date_item_departure2 = [];
          foreach ($date_item_departure as $item_departure) {
            $date_item_departure2[] = explode(".", $item_departure);
          }
*/
          //Cadenas de mes
        
        /*  $cad_ene = "";
          $cad_feb = "";
          $cad_mar = "";
          $cad_abr = "";
          $cad_may = "";
          $cad_jun = "";
          $cad_jul = "";
          $cad_ago = "";
          $cad_sep = "";
          $cad_oct = "";
          $cad_nov = "";
          $cad_dic = "";
*/

          //recorre arreglo de fechas y crea una cadena para cada mes
       /*   foreach ($date_item_departure2 as $item_departure2) {

            if ($item_departure2[0] == "Ene") {
              $cad_ene .= $item_departure2[1] . ", ";
            } elseif ($item_departure2[0] == "Feb") {
              $cad_feb .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Mar") {
              $cad_mar .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Abr") {
              $cad_abr .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "May") {
              $cad_may .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Jun") {
              $cad_jun .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Jul") {
              $cad_jul .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Ago") {
              $cad_ago .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Sept") {
              $cad_sep .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Oct") {
              $cad_oct .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Nov") {
              $cad_nov .= $item_departure2[1] . ", ";
            } else if ($item_departure2[0] == "Dic") {
              $cad_dic .= $item_departure2[1] . ", ";
            }
          }
*/
          //valida que cadena de mes tienen no esta vacío y lo guarda en cadena general
        /*  if ($cad_ene != "") {
            $cad_departures .= "<br>Enero: " . $cad_ene;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_feb != "") {
            $cad_departures .= "<br>Febrero: " . $cad_feb;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_mar != "") {
            $cad_departures .= "<br>Marzo: " . $cad_mar;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_abr != "") {
            $cad_departures .= "<br>Abril: " . $cad_abr;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_may != "") {
            $cad_departures .= "<br>Mayo: " . $cad_may;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_jun != "") {
            $cad_departures .= "<br>Junio: " . $cad_jun;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_jul != "") {
            $cad_departures .= "<br>Julio: " . $cad_jul;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_ago != "") {
            $cad_departures .= "<br>Agosto: " . $cad_ago;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_sep != "") {
            $cad_departures .= "<br>Septiembre: " . $cad_sep;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_oct != "") {
            $cad_departures .= "<br>Octubre: " . $cad_oct;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_nov != "") {
            $cad_departures .= "<br>Noviembre: " . $cad_nov;
            $cad_departures = substr($cad_departures, 0, -2);
          }
          if ($cad_dic != "") {
            $cad_departures .= "<br>Diciembre: " . $cad_dic;
            $cad_departures = substr($cad_departures, 0, -2);
          }

          foreach ($viajeblq['bloqueos'] as $date_blq) {
            $date_item = smartdate($date_blq['date']);
            $cad_dates .= $date_item . ', ';
          }
*/
          //cadena cities
          if (is_array($viajeblq['cities'])) {
            //dd($viajeblq['cities']);
            foreach ($viajeblq['cities'] as $item_city) {
              $cad_cities .= $item_city['name'] . ", ";
            }
            //limpia último & de la cadena de bloqueos
            $cad_cities = substr($cad_cities, 0, -2);
          } else {
            //dd($viajeblq['cities']);
            $cad_cities     = $viajeblq['cities'];
            $search_guion   = array(' - ', ' -', '- ');
            $replace_guion  = array(', ', ', ', ', ');
            $cad_cities     = str_replace($search_guion, $replace_guion, $cad_cities);
          }
          //cadena countries
          foreach ($viajeblq['countries'] as $country) {

            $cad_countries .= $country['name'] . ", ";

            //recorre catalogo general de visas
            foreach ($visas_gral as $cat_visas) {
              if ($cat_visas->country_code == strtolower($country['code'])) {
                //arma cadena de visas blqueo
                $cad_visas .= $cat_visas->description;
              }
            }
          }
          $cad_countries = substr($cad_countries, 0, -2);

          if (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == true) {
            //cadena hotels
            foreach ($viajeblq['hotels'] as $hotel_blq) {
              $cad_hotels .= '<tr>
                          <td>' . $hotel_blq['name'] . '</td>
                          <td>' . $hotel_blq['city'] . '</td>
                          <td>' . $hotel_blq['type'] . '</td>
                          <td>' . $hotel_blq['country'] . '</td>
                          </tr>';
            }
            $cad_hotels_comp .= '<table width="100%"><thead><td>Hotel</td><td>Ciudad</td><td>Tipo</td><td>Pais</td></thead>' . $cad_hotels . '</table>';
          } elseif (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == false) {
            $cad_hotels_comp = $viajeblq['hotels'];
          }

          //cadena imagen
          $array_imagen = ['<div>
          <a class="blq_img">
              <img src="' . $viajeblq["image"] . '" alt="' . $viajeblq['name'] . '" title="' . $viajeblq['name'] . '" width="50%">
          </a>
          </div>'];

          //vigencia
          $cad_vigencia = "Precios vigentes hasta el " . $viajeblq["expire"];

          //recorre catalogo general de aerolineas
          foreach ($airlines_gral as $cat_airlines) {

            if ($cat_airlines->code_iata == $viajeblq['airline_code']) {
              //arma cadena de aerolineas blqueo
              $cad_airlines .= '<img class="img-fluid lazyload" src="https://one.cdnmega.com/images/aerolineas/iata/' . $cat_airlines->code_iata . '.png" alt="' . $cat_airlines->airline . '">';
            }
          }

          $viajem = [
            "mt"                    => $viajeblq['clv'],
            "name"                  => $viajeblq['name'],
            "days"                  => $viajeblq['days'],
            "nights"                => $viajeblq['nights'],
            "price_from"            => number_format($viajeblq['from']),
            "taxes"                 => number_format($viajeblq['taxes']),
            "departure_date"        => $cad_departures,
            "bloqueos"              => $cad_dates,
            "include"               => $viajeblq['include_yes'],
            "not_include"           => $viajeblq['include_not'],
            "itinerary"             => $viajeblq['itinerary'],
            "currency"              => $viajeblq['currency_code'],
            "room_type"             => $viajeblq['room_type'],
            "image"                 => $array_imagen,
            "price_table"           => $viajeblq['list_prices'],
            "hotels_table"          => $cad_hotels_comp,
            "operator"              => "",
            "circuit"               => "",
            "array_cities"          => $viajeblq['cities'],
            "cities"                => $cad_cities,
            "array_countries"       => $viajeblq['countries'],
            "countries"             => $cad_countries,
            "validity"              => $cad_vigencia,
            "airlines"              => $cad_airlines,
            "price_table"           => $viajeblq['list_prices'],
            "department"            => $viajeblq['destination'],
            "status"                => 1,
            "type"                  => "bloqueo",
          ];
        }
      }
    } else {
      return "No existe MT";
    }

    return view('admin.tools.circuito', compact('viajem', 'fontFamily', 'Dominio', 'Dominioviaja', 'txtColor', 'thBG', 'thTxColor'));
  
  }



  /*******************************************************************************
   *
   *Muestra el detalle de cada programa con formato de template mega travel
   *
   *******************************************************************************/
  public function CircuitoFormat(Request $request)
  {
    $CLV          = $request['viaje'];

    /*******************************************************************************
     *Si existe la variable $CLV, muestra su respectiva consulta
     *******************************************************************************/
    if (isset($CLV)) {

      $viajeblq               = [];
      $viajem                 = [];
      $cad_countries          = "";
      $cad_visas              = "";
      $cad_dates              = "";
      $cad_hotels             = "";
      $cad_hotels_comp        = "";
      $cad_cities             = "";
      $cad_airlines           = "";
      $cad_departures         = "";
      $cad_tours              = "";
      $array_imagen           = [];


      $viaje = Travel::where([['mt', '=', $CLV], ['status', '=', 1]])->first();

      $airlines_gral = Airline::all();
      $visas_gral    = Visa::all();


      //COnvierte fechas mes
      function smartdate($fecha)
      {
        if ($fecha) {
          $f = explode("-", $fecha);
          $nummes = (int) $f[1];
          $mes1 = "0-Ene.-Feb.-Mar.-Abr.-May.-Jun.-Jul.-Ago.-Sept.-Oct.-Nov.-Dic.";
          $mes1 = explode("-", $mes1);
          $desfecha = "$mes1[$nummes] $f[2]";
          return $desfecha;
        }
      }



      if ($viaje != null) {

        //arma cadena de paises regular
        foreach ($viaje->countries as $countri) {
          $cad_countries .= $countri->name_country . ", ";

          //arma cadena de visas por pais regular
          foreach ($countri->visas as $visa) {
            if (count($countri->visas) != 0) {
              $cad_visas .= $visa->description;
            }
          }
        }
        $cad_countries = substr($cad_countries, 0, -2);


        //arma cadena de ciudades regular
        foreach ($viaje->cities as $city) {
          $cad_cities .= $city->name . ", ";
        }
        $cad_cities = substr($cad_cities, 0, -2);


        //arma cadena de aerolineas regular
        foreach ($viaje->airlines as $airline) {
          $cad_airlines .= '<img class="img-fluid lazyload" src="https://one.cdnmega.com/images/aerolineas/iata/' . $airline->code_iata . '.png" alt="' . $airline->airline . '">';
        }


        //arma cadena de imagenes
        foreach ($viaje->multimedia as $imagen) {

          if ($imagen->video_type == 2) {
            $array_imagen = ['<div style="padding:56.25% 0 0 0;position:relative;">
                 <iframe src="https://player.vimeo.com/video/' . $imagen->url . '?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                 <script src="https://player.vimeo.com/api/player.js"></script>
                 </div>'];
          } elseif ($imagen->video_type == 1) {
            $array_imagen = ['<div class="embed-responsive embed-responsive-16by9" id="cont_video">
         <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/' . $imagen->url . '?rel=0"  width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
         </div>'];
          } elseif ($imagen->type == 1) {
            $array_imagen = ['<div>
             <a class="blq_img">
                 <img src="https://one.cdnmega.com/images/viajes/covers/' . $imagen->name . '" alt="' . $imagen->description . '" title="' . $imagen->description . '" width="100%">
             </a>
             </div>'];
          }
        }




        /*Cadena con liga de la seccion*/
        switch ($viaje->department) {
          case "europa":
            $cad_destination = "viajes-europa";
            $name_destination = "Europa";
            $cad_contrato_ad = "05-europa-salidas-regulares.pdf";
            $cad_contrato_ex = "10-ex-europa-salidas-regulares.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel Europa</a>";
            break;
          case "sudamerica":
            $cad_destination = "viajes-sudamerica";
            $name_destination = "Sudamérica";
            $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
            $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel Sudamérica</a>";
            break;
          case "camerica":
            $cad_destination = "viajes-centroamerica";
            $name_destination = "Centroamérica";
            $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
            $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel CEntroámerica</a>";
            break;
          case "usa":
            $cad_destination = "viajes-estados-unidos";
            $name_destination = "Estados Unidos";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Estados Unidos</a>";
            break;
          case "caribe":
            $cad_destination = "viajes-al-caribe";
            $name_destination = "Caribe";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "";
            break;
          case "moriente":
            $cad_destination = "viajes-medio-oriente";
            $name_destination = "Medio Oriente";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Medio Oriente</a>";
            break;
          case "canada":
            $cad_destination = "viajes-canada";
            $name_destination = "Canadá";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Canadá</a>";
            break;
          case "asia":
            $cad_destination = "viajes-asia";
            $name_destination = "Asia";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Asia</a>";
            break;
          case "mexico":
            $cad_destination = "viajes-por-mexico";
            $name_destination = "México";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel México</a>";
            break;
          case "pacifico":
            $cad_destination = "viajes-pacifico";
            $name_destination = "Pacífico";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Pacífico</a>";
            break;
          case "africa":
            $cad_destination = "viajes-africa";
            $name_destination = "África";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel África</a>";
            break;
          case "cruceros":
            $cad_destination = "cruceros";
            $name_destination = "Cruceros";
            $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
            $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
            $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Cruceros</a>";
            break;
          case "edeportivo":
            $cad_destination = "eventos-especiales";
            $name_destination = "Eventos especiales";
            $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
            $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
            $cad_formas_pago = "";
            break;
          case "exoticos":
            $cad_destination = "viajes-exoticos-y-a-la-medida";
            $name_destination = "Exóticos";
            $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
            $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
            $cad_formas_pago = "";
            break;
          case "jviajera":
            $cad_destination = "juventud-viajera";
            $name_destination = "Juventud viajera";
            $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
            $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
            $cad_formas_pago = "";
            break;
        }





        $incluye    = $this->nl2li($viaje['include']);
        $no_incluye = $this->nl2li($viaje['not_include']);

        $cad_vigencia = "Precios vigentes hasta el " . $viaje->validity;

        $cad_additional_notes = $viaje['additional_notes'];

        //arma cadena de tours regular
        foreach ($viaje->tours as $tours) {
          $cad_tours .= '<strong>' . $tours->title . '</strong><br>' . $tours->especial_itinerary . '<br>';
        }


        $viajem = [
          "mt"             => $viaje['mt'],
          "name"           => $viaje['name'],
          "days"           => $viaje['days'],
          "nights"         => $viaje['nights'],
          "taxes"          => number_format($viaje['taxes']),
          "departure_date" => $viaje['departure_date'],
          "bloqueos"       => "",
          "include"        => $incluye,
          "not_include"    => $no_incluye,
          "itinerary"      => $viaje['itinerary'],
          "currency"       => $viaje['currency'],
          "room_type"      => $viaje['room_type'],
          "image"          => $array_imagen,
          "price_from"     => number_format($viaje['price_from']),
          "price_table"    => $viaje['price_table'],
          "hotels_table"   => $viaje['hotels_table'],
          "operator"       => $viaje['operator'],
          "circuit"        => $viaje['circuit'],
          "array_cities"   => $viaje->cities,
          "cities"         => $cad_cities,
          "array_countries" => $viaje->countries,
          "countries"      => $cad_countries,
          "airlines"       => $cad_airlines,
          "airlines_secun" => "",
          "tours"          => $cad_tours,
          "additional_notes" => $cad_additional_notes,
          "department"     => $viaje->department,
          "name_destination" => $name_destination,
          "destination"    => $cad_destination,
          "contrato_ad"    => $cad_contrato_ad,
          "contrato_ex"    => $cad_contrato_ex,
          "vigencia"       => $cad_vigencia,
          "status"         => $viaje['status'],
          "type"           => "regular",
        ];
      } elseif ($viaje == null) {

        // API Bloqueo
        $viajeblq = $this->get_data(url('/tester/detail/' . $CLV));
        $viajeblq = json_decode($viajeblq, true);

        if (isset($viajeblq['code'])) {
          return "MT Inactivo";
        } else {



          // --- FECHAS
          $year_now       = date('Y');
          $year_sig       = date("Y", strtotime($year_now . "+ 1 year"));
          $date_valid_y   = "";
          $date_item_departure     = [];
          $date_item_departure_sig = [];
          $cad_departures_now = "";
          $cad_departures_sig = "";
          $cad_departures     = "";

          //carga en array fechas del año actual
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_valid_y = implode("-", $date_departure);
            $date_valid_y = substr($date_valid_y, 0, 4);

            if ($date_valid_y == $year_now) {
              $date_item_departure[] = smartdate($date_departure['date']);
            }
          }

          //carga en array fechas del año siguiente
          foreach ($viajeblq['departures'] as $date_departure) {
            $date_valid_y = implode("-", $date_departure);
            $date_valid_y = substr($date_valid_y, 0, 4);

            if ($date_valid_y == $year_sig) {
              $date_item_departure_sig[] = smartdate($date_departure['date']);
            }
          }

          //se formatean los arrays de las fechas del año actual y el año siguiente
          $cad_departures_now = $this->OrderDates($date_item_departure);
          $cad_departures_sig = $this->OrderDates($date_item_departure_sig);

          /*if($cad_departures_sig != ""){
                $cad_departures = $cad_departures_now."<br><hr><strong>Salidas para el año ".$year_sig.":</strong>".$cad_departures_sig;
            }
            else
            {
                $cad_departures = $cad_departures_now;
            }*/

          $cad_departures_separate = [];
          $cad_departures_separate =  [
            'anio_actual' => $cad_departures_now,
            'anio_sig'    => $cad_departures_sig
          ];

          //dd($cad_departures_separate);
          // --- FECHAS


          //fechas de la tabla bloqueos
          foreach ($viajeblq['bloqueos'] as $date_blq) {
            $date_item = smartdate($date_blq['date']);
            $cad_dates .= $date_item . ', ';
          }






          //cadena cities
          if (is_array($viajeblq['cities'])) {
            //dd($viajeblq['cities']);
            foreach ($viajeblq['cities'] as $item_city) {
              $cad_cities .= $item_city['name'] . ", ";
            }
            //limpia último & de la cadena de bloqueos
            $cad_cities = substr($cad_cities, 0, -2);
          } else {
            //dd($viajeblq['cities']);
            $cad_cities     = $viajeblq['cities'];
            $search_guion   = array(' - ', ' -', '- ');
            $replace_guion  = array(', ', ', ', ', ');
            $cad_cities     = str_replace($search_guion, $replace_guion, $cad_cities);
          }
          //cadena countries
          foreach ($viajeblq['countries'] as $country) {

            $cad_countries .= $country['name'] . ", ";

            //recorre catalogo general de visas
            foreach ($visas_gral as $cat_visas) {
              if ($cat_visas->country_code == strtolower($country['code'])) {
                //arma cadena de visas blqueo
                $cad_visas .= $cat_visas->description;
              }
            }
          }
          $cad_countries = substr($cad_countries, 0, -2);

          if (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == true) {
            //cadena hotels
            foreach ($viajeblq['hotels'] as $hotel_blq) {
              $cad_hotels .= '<tr>
                          <td>' . $hotel_blq['name'] . '</td>
                          <td>' . $hotel_blq['city'] . '</td>
                          <td>' . $hotel_blq['type'] . '</td>
                          <td>' . $hotel_blq['country'] . '</td>
                          </tr>';
            }
            $cad_hotels_comp .= '<table width="100%" border="1"><thead><td>Hotel</td><td>Ciudad</td><td>Tipo</td><td>Pais</td></thead>' . $cad_hotels . '</table>';
          } elseif (!empty($viajeblq['hotels']) && is_array($viajeblq['hotels']) == false) {
            $cad_hotels_comp = $viajeblq['hotels'];
          }

          //cadena imagen
          $array_imagen = ['<div>
          <a class="blq_img">
              <img src="' . $viajeblq["image"] . '" alt="' . $viajeblq['name'] . '" title="' . $viajeblq['name'] . '" width="100%">
          </a>
          </div>'];

          //vigencia
          $cad_vigencia = "Precios vigentes hasta el " . $viajeblq["expire"];


          /*Cadena con liga de la seccion*/
          switch ($viajeblq['destination']) {
            case "Europa":
              $cad_destination = "viajes-europa";
              $name_destination = "Europa";
              $cad_contrato_ad = "03-europa-bloqueos-gral.pdf";
              $cad_contrato_ex = "08-ex-europa-bloqueos-gral.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel Europa</a>";
              break;
            case "Sudamerica":
              $cad_destination = "viajes-sudamerica";
              $name_destination = "Sudamérica";
              $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
              $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel Sudamérica</a>";
              break;
            case "Centroamerica":
              $cad_destination = "viajes-centroamerica";
              $name_destination = "Centroamérica";
              $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
              $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/mgop'>Consulta nuestras opciones de pago para viajes Mega Travel Centroamérica</a>";
              break;
            case "Usa":
              $cad_destination = "viajes-estados-unidos";
              $name_destination = "Estados Unidos";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Estados Unidos</a>";
              break;
            case "Caribe":
              $cad_destination = "viajes-al-caribe";
              $name_destination = "Caribe";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              break;
            case "MOriente":
              $cad_destination = "viajes-medio-oriente";
              $name_destination = "Medio Oriente";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Medio Oriente</a>";
              break;
            case "Canada":
              $cad_destination = "viajes-canada";
              $name_destination = "Canadá";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "";
              break;
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Canadá</a>";
            case "Asia":
              $cad_destination = "viajes-asia";
              $name_destination = "Asia";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Asia</a>";
              break;
            case "Mexico":
              $cad_destination = "viajes-por-mexico";
              $name_destination = "México";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel México</a>";
              break;
            case "Pacifico":
              $cad_destination = "viajes-pacifico";
              $name_destination = "Pacífico";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Pacífico</a>";
              break;
            case "Africa":
              $cad_destination = "viajes-africa";
              $name_destination = "África";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel África</a>";
              break;
            case "cruceros":
              $cad_destination = "cruceros";
              $name_destination = "Cruceros";
              $cad_contrato_ad = "01-bloqueos-astromundo.pdf";
              $cad_contrato_ex = "06-ex-bloqueos-astromundo.pdf";
              $cad_formas_pago = "<a href='https://megatravel.com.mx/info/formas-de-pago/astro'>Consulta nuestras opciones de pago para viajes Mega Travel Cruceros</a>";
              break;
            case "Edeportivo":
              $cad_destination = "eventos-especiales";
              $name_destination = "Eventos especiales";
              $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
              $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
              $cad_formas_pago = "";
              break;
            case "Exoticos":
              $cad_destination = "viajes-exoticos-y-a-la-medida";
              $name_destination = "Exóticos";
              $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
              $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
              $cad_formas_pago = "";
              break;
            case "Juvi":
              $cad_destination = "juventud-viajera";
              $name_destination = "Juventud viajera";
              $cad_contrato_ad = "02-bloqueos-mega-travel-operadora.pdf";
              $cad_contrato_ex = "07-ex-bloqueos-mega-travel-operadora.pdf";
              $cad_formas_pago = "";
              break;
          }

          //contrato y extracto 12059 y 12159
          if ($viajeblq['clv'] == 12059 || $viajeblq['clv'] == 12159) {
            $cad_contrato_ad  = "12-mt12059-mt12159.pdf";
            $cad_contrato_ex  = "11-ex-mt12059-mt12159.pdf";
          }

          //contrato y extracto Quinceañeras de europa
          if ($viajeblq['clv'] == 12115 || $viajeblq['clv'] == 12118) {
            $cad_contrato_ad  = "04-europa-quinceaneras.pdf";
            $cad_contrato_ex  = "09-ex-europa-quinceaneras.pdf";
          }



          $cad_airlines_secun = "";
          //recorre catalogo general de aerolineas
          foreach ($airlines_gral as $cat_airlines) {

            //arma cadena de aerolineas blqueo campo principal  airline_code
            if ($cat_airlines->code_iata == $viajeblq['airline_code'] && $viajeblq['airline_code'] != "TRR" && $viajeblq['airline_code'] != "SC") {
              $cad_airlines = '<img src="https://one.cdnmega.com/images/aerolineas/iata/' . $cat_airlines->code_iata . '.png" alt="' . $cat_airlines->airline . '" title="' . $cat_airlines->airline . '" width="130" />';
            } elseif ($cat_airlines->code_iata == $viajeblq['airline_code'] && $viajeblq['airline_code'] == "TRR" || $viajeblq['airline_code'] == "TR") {
              $cad_airlines = 'Solo Terrestre';
            } elseif ($cat_airlines->code_iata == $viajeblq['airline_code'] && $viajeblq['airline_code'] == "SC") {
              $cad_airlines = 'solo crucero';
            }

            foreach ($viajeblq['airlines'] as $airline_sec) {

              if ($cat_airlines->code_iata == $airline_sec['code']) {
                $cad_airlines_secun .= '<img src="https://one.cdnmega.com/images/aerolineas/iata/' . $cat_airlines->code_iata . '.png" alt="' . $cat_airlines->airline . '" title="' . $cat_airlines->airline . '" width="130" />';
              }
            }
          }



          $incluye    = $this->nl2li($viajeblq['include_yes']);
          $no_incluye = $this->nl2li($viajeblq['include_not']);

          $cad_vigencia = "Precios vigentes hasta el " . $viajeblq["expire"];

          $cad_tours_comp = "";
          if (!empty($viajeblq['tours']) && is_array($viajeblq['tours']) == true) {

            foreach ($viajeblq['tours'] as $tour) {
              $cad_tours_comp .= '<p>' . $tour['name'] . '</p>' .
                $tour['description'];
            }
          } elseif (!empty($viajeblq['tours']) && is_array($viajeblq['tours']) == false) {
            $cad_tours_comp = $viajeblq['tours'];
          }


          $viajem = [
            "mt"                    => $viajeblq['clv'],
            "name"                  => $viajeblq['name'],
            "days"                  => $viajeblq['days'],
            "nights"                => $viajeblq['nights'],
            "price_from"            => number_format($viajeblq['from']),
            "taxes"                 => number_format($viajeblq['taxes']),
            "departure_date"        => $cad_departures_separate,
            "bloqueos"              => $cad_dates,
            "include"               => $incluye,
            "not_include"           => $no_incluye,
            "itinerary"             => $viajeblq['itinerary'],
            "currency"              => $viajeblq['currency_code'],
            "room_type"             => $viajeblq['room_type'],
            "image"                 => $array_imagen,
            "price_table"           => $viajeblq['list_prices'],
            "hotels_table"          => $cad_hotels_comp,
            "operator"              => "",
            "circuit"               => "",
            "array_cities"          => $viajeblq['cities'],
            "cities"                => $cad_cities,
            "array_countries"       => $viajeblq['countries'],
            "countries"             => $cad_countries,
            "vigencia"              => $cad_vigencia,
            "airlines"              => $cad_airlines,
            "airlines_secun"        => $cad_airlines_secun,
            "tours"                 => $cad_tours_comp,
            "additional_notes"      => $viajeblq['additional_notes'],
            "price_table"           => $viajeblq['list_prices'],
            "department"            => $viajeblq['destination'],
            "name_destination"      => $name_destination,
            "destination"           => $cad_destination,
            "contrato_ad"           => $cad_contrato_ad,
            "contrato_ex"           => $cad_contrato_ex,
            "status"                => 1,
            "type"                  => "bloqueo",
          ];
        }
      }
    } else {
      return "No existe MT";
    }

    return view('admin.tools.circuitodetailformat', compact('viajem'));
  }









  public function Ofertasblq(Request $request)
  {
    $Dest = $request['Dest'];

    //CSS
    $fontId        = $request['ff'];
    $txtColor     = $request['txtColor'];
    $lblTPaq      = $request['lblTPaq'];
    $lblTRange    = $request['lblTRange'];
    $lblNumRange  = $request['lblNumRange'];
    $itemBack      = $request['ItemBack'];
    $itemHov      = $request['ItemHov'];
    $txtColorHov  = $request['txtColorHov'];
    $lblTPaqHov    = $request['lblTPaqHov'];
    $Dominio      = $request['domi'];
    $Dominioviaja = $request['domiviaja'];


    $thBG         = $request['thBG'];
    $thTxColor    = $request['thTxColor'];


    //Font
    if (!$fontId) {
      $fontId = 1;
    }
    $fontKind = array(
      "", "Arial, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif",
      "Gill Sans, sans-serif",  "Georgia, sans-serif", "Comic Sans MS, sans-serif",
      "Lucida Sans Unicode, sans-serif", "Times New Roman, sans-serif",
      "'Century Gothic', sans-serif", "'Coustard', serif", "'Roboto', sans-serif", "'Roboto Slab', sans-serif"
    );
    $fontFamily = $fontKind[$fontId];


    //Defaults
    if ($txtColor    == "") {
      $txtColor = "ffffff";
    }
    if ($lblTPaq     == "") {
      $lblTPaq = "00b3ff";
    }
    if ($lblTRange   == "") {
      $lblTRange = "00b3ff";
    }
    if ($lblNumRange == "") {
      $lblNumRange = "ff7200";
    }
    if ($itemBack    == "") {
      $itemBack = "2c3e50";
    }
    if ($itemHov     == "") {
      $itemHov = "eeeeee";
    }
    if ($txtColorHov == "") {
      $txtColorHov = "000000";
    }
    if ($lblTPaqHov  == "") {
      $lblTPaqHov = $lblTPaq;
    }

    $ofertasblq             = [];
    $viajeoferta            = [];
    $cad_cities             = "";
    $cad_airlines           = "";
    $array_imagen           = [];
    $min_price              = 0;
    $max_price              = 0;
    $min_duration           = 0;
    $max_duration           = 0;
    $array_duration         = [];
    $array_price            = [];


    $viajeoferta = $this->get_data(url('/tester'));
    $viajeoferta = json_decode($viajeoferta, true);


    /*rellena colección con bloqueos*/
    foreach ($viajeoferta['data'] as $viajeoferta) {

      //cadena cities
      $cad_cities = "";

      if (is_array($viajeoferta['cities'])) {

        foreach ($viajeoferta['cities'] as $api_city) {
          $cad_cities .= $api_city['name'] . ", ";
        }
        //limpia último & de la cadena de bloqueos
        $cad_cities = substr($cad_cities, 0, -2);
      } else {
        //genera cadena con coleccion de ciudades
        $collection_cities_array = explode(" – ", $viajeoferta['cities']);
        foreach ($collection_cities_array as $api_city) {
          $search  = array(' - ', ' -', '- ');
          $replace = array(', ', ', ', ', ');
          $api_city = str_replace($search, $replace, $api_city);

          $api_city = ucwords($api_city);
          $cad_cities .= $api_city . ", ";
        }
        $cad_cities = substr($cad_cities, 0, -2);
      }

      //cadena imagen
      $array_imagen = ['<div>
                <a class="blq_img">
                    <img src="' . $viajeoferta["image"] . '" alt="' . $viajeoferta['name'] . '" title="' . $viajeoferta['name'] . '">
                </a>
                </div>'];


      $ofertasblq[$viajeoferta['clv']] = [
        "mt"                    => $viajeoferta['clv'],
        "name"                  => $viajeoferta['name'],
        "days"                  => $viajeoferta['days'],
        "nights"                => $viajeoferta['nights'],
        "price_from"            => $viajeoferta['from'],
        "taxes"                 => number_format($viajeoferta['taxes']),
        "currency"              => $viajeoferta['currency_code'],
        "array_cities"          => $viajeoferta['cities'],
        "cities"                => $cad_cities,
        "image"                 => $array_imagen,
        "status"                => 1,
        "type"                  => "bloqueo",
      ];
    }

    foreach ($ofertasblq as $viajeoferta) {
      $array_price[]    = $viajeoferta['price_from'];
      $array_duration[]    = $viajeoferta['days'];
    }

    if (!empty($array_price) && !empty($array_duration)) {
      $minDias    = min($array_duration);
      $maxDias    = max($array_duration);
      $minFare    = min($array_price);
      $maxFare    = max($array_price);
    }



    /*******************************************************************************
     *Compara el id recibido y trae el code del department para concatenar con la url
     *******************************************************************************/
    if (isset($Dest)) {

      $ofertasblq             = [];
      $viajeoferta            = [];
      $cad_cities             = "";
      $cad_airlines           = "";
      $array_imagen           = [];
      $min_price              = 0;
      $max_price              = 0;
      $min_duration           = 0;
      $max_duration           = 0;
      $array_duration         = [];
      $array_price            = [];

      /*******************************************************************************
       *Compara el id recibido y trae el code del department para concatenar con la url
       *******************************************************************************/
      $api = Department::select('id', 'code')->get();
      foreach ($api as $a) {
        if ($a->id == $Dest) {
          $find_api_department =  $a->code;

          $find_api_department = ($find_api_department == 'camerica' ? 'centroamerica' : $find_api_department);
        }
      }

      /*******************************************************************************
       *Conecta con api de bloqueos
       *******************************************************************************/
      $viajeoferta = $this->get_data(url('/tester/destination/' . $find_api_department . ''));
      $viajeoferta = json_decode($viajeoferta, true);

      /*rellena colección con bloqueos*/
      foreach ($viajeoferta['data'] as $viajeoferta) {

        //cadena cities
        $cad_cities = "";

        if (is_array($viajeoferta['cities'])) {

          foreach ($viajeoferta['cities'] as $api_city) {
            $cad_cities .= $api_city['name'] . ", ";
          }
          //limpia último & de la cadena de bloqueos
          $cad_cities = substr($cad_cities, 0, -2);
        } else {
          //genera cadena con coleccion de ciudades
          $collection_cities_array = explode(" – ", $viajeoferta['cities']);
          foreach ($collection_cities_array as $api_city) {
            $search  = array(' - ', ' -', '- ');
            $replace = array(', ', ', ', ', ');
            $api_city = str_replace($search, $replace, $api_city);

            $api_city = ucwords($api_city);
            $cad_cities .= $api_city . ", ";
          }
          $cad_cities = substr($cad_cities, 0, -2);
        }

        //cadena imagen
        $array_imagen = ['<div>
              <a class="blq_img">
                  <img src="' . $viajeoferta["image"] . '" alt="' . $viajeoferta['name'] . '" title="' . $viajeoferta['name'] . '">
              </a>
              </div>'];


        $ofertasblq[] = [
          "mt"                    => $viajeoferta['clv'],
          "name"                  => $viajeoferta['name'],
          "days"                  => $viajeoferta['days'],
          "nights"                => $viajeoferta['nights'],
          "price_from"            => $viajeoferta['from'],
          "taxes"                 => number_format($viajeoferta['taxes']),
          "currency"              => $viajeoferta['currency_code'],
          "array_cities"          => $viajeoferta['cities'],
          "cities"                => $cad_cities,
          "image"                 => $array_imagen,
          "status"                => 1,
          "type"                  => "bloqueo",
        ];
      }

      foreach ($ofertasblq as $viajeoferta) {
        $array_price[]    = $viajeoferta['price_from'];
        $array_duration[]    = $viajeoferta['days'];
      }

      if (!empty($array_price) && !empty($array_duration)) {
        $minDias    = min($array_duration);
        $maxDias    = max($array_duration);
        $minFare    = min($array_price);
        $maxFare    = max($array_price);
      }
    }

    return view('admin.tools.ofertas-viaje', compact('ofertasblq', 'Dest', 'thBG', 'thTxColor', 'fontFamily', 'fontId', 'txtColor', 'itemBack', 'lblTPaq', 'lblTRange', 'lblNumRange', 'itemHov', 'txtColorHov', 'lblTPaqHov', 'Dominio', 'Dominioviaja', 'maxFare', 'minFare', 'maxDias', 'minDias'));
  }

  public function Megatraveler()
  {
    return view('admin.tools.megatraveler');
  }








  //Convierte saltos de línea en listas
  public function nl2li($str, $ordered = 0, $type = "1")
  {

    //check if its ordered or unordered list, set tag accordingly
    if ($ordered) {
      $tag = "ol";

      //specify the type
      $tag_type = "type=$type";
    } else {
      $tag = "ul";

      //set $type as NULL
      $tag_type = NULL;
    }



    // add ul / ol tag
    // add tag type
    // add first list item starting tag
    // add last list item ending tag
    $str = "<$tag $tag_type><li>" . $str . "</li></$tag>";


    //replace /n with adding two tags
    // add previous list item ending tag
    // add next list item starting tag
    $str = str_replace("\n", "</li>\n<li>", $str);

    //spit back the modified string
    return $str;
  }



  public function OrderDates($date_item_departure)
  {

    $cad_departures = "";

    //separación por meses
    $date_item_departure2 = [];
    foreach ($date_item_departure as $item_departure) {
      $date_item_departure2[] = explode(".", $item_departure);
    }

    //FECHAS
    //Cadenas de mes
    $cad_ene = "";
    $cad_feb = "";
    $cad_mar = "";
    $cad_abr = "";
    $cad_may = "";
    $cad_jun = "";
    $cad_jul = "";
    $cad_ago = "";
    $cad_sep = "";
    $cad_oct = "";
    $cad_nov = "";
    $cad_dic = "";


    //recorre arreglo de fechas y crea una cadena para cada mes
    foreach ($date_item_departure2 as $item_departure2) {

      if ($item_departure2[0] == "Ene") {
        $cad_ene .= $item_departure2[1] . ", ";
      } elseif ($item_departure2[0] == "Feb") {
        $cad_feb .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Mar") {
        $cad_mar .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Abr") {
        $cad_abr .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "May") {
        $cad_may .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Jun") {
        $cad_jun .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Jul") {
        $cad_jul .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Ago") {
        $cad_ago .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Sept") {
        $cad_sep .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Oct") {
        $cad_oct .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Nov") {
        $cad_nov .= $item_departure2[1] . ", ";
      } else if ($item_departure2[0] == "Dic") {
        $cad_dic .= $item_departure2[1] . ", ";
      }
    }

    //valida que cadena de mes tienen no esta vacío y lo guarda en cadena general
    if ($cad_ene != "") {
      $cad_departures .= "<br>Enero: " . $cad_ene;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_feb != "") {
      $cad_departures .= "<br>Febrero: " . $cad_feb;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_mar != "") {
      $cad_departures .= "<br>Marzo: " . $cad_mar;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_abr != "") {
      $cad_departures .= "<br>Abril: " . $cad_abr;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_may != "") {
      $cad_departures .= "<br>Mayo: " . $cad_may;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_jun != "") {
      $cad_departures .= "<br>Junio: " . $cad_jun;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_jul != "") {
      $cad_departures .= "<br>Julio: " . $cad_jul;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_ago != "") {
      $cad_departures .= "<br>Agosto: " . $cad_ago;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_sep != "") {
      $cad_departures .= "<br>Septiembre: " . $cad_sep;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_oct != "") {
      $cad_departures .= "<br>Octubre: " . $cad_oct;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_nov != "") {
      $cad_departures .= "<br>Noviembre: " . $cad_nov;
      $cad_departures = substr($cad_departures, 0, -2);
    }
    if ($cad_dic != "") {
      $cad_departures .= "<br>Diciembre: " . $cad_dic;
      $cad_departures = substr($cad_departures, 0, -2);
    }

    return $cad_departures;
  }
  // fin function OrderDates








}
