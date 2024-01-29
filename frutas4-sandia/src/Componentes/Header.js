import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Header({ user }) {
  const [tc, setTC] = useState([]);

  useEffect(() => {
    axios.get("https://www.megatravel.com.mx/developers/tc/now").then((res) => {
      const tc = res.data;
      setTC(tc);
    });
  }, []);


  return (
    <>
<aside className="aside">
  <div className="aside__icon">
    <a href="/" className="aside__logotipo">
      <img src={user.logo} alt="" className="responsive__img"/>
    </a>
  </div>
  
  <div className="aside__container-info">
    <p className="aside__agency">agencia <br/> de viajes</p>
    <p className="aside__country">en {user.city_name}, {user.state_name}</p>
  </div>
  
  <div className="aside__container-info section__hidden" id="somos">
    <hr/>
    <div className="aside__about-balloon">
      <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/quienes-somos.png" alt="" className="responsive__img"/>
    </div>
    <p><a className="aside__about-p" data-toggle="modal" data-target="#description" > {!!user.description && (<p>{user.description.substr(0, 120)}</p>)} ..Leer más  </a></p>
      <div className="modal fade" id="description" aria-labelledby="exampleModalLabel" aria-hidden="true">
		    <div className="modal-dialog modal-lg">
		    	<div className="modal-content">
			      <div className="modal-header">
			      	<h5 className="modal-title" id="exampleModalLabel">Quienes Somos</h5>
				      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				      <span aria-hidden="true">&times;</span>
				      </button>
		      	</div>
			    <div className="modal-body">
            <div className="container">
              <p className="text-about" dangerouslySetInnerHTML={{__html: user.description}}></p>
            </div>
          </div>
          <div className="modal-footer">
          </div>
		    </div>
      </div>
		  </div>
      <a href="#contacto" className="aside__about-a back__sandia hover__sandia">contacto</a>
      <hr />
    <div className="aside__networks-balloon">
      <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/comunicate.png" alt="" className="responsive__img"/>
    </div>
    <div className="aside__networks-communicate">
      <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/comunicate2.png" alt="" className="responsive__img"/>
    </div>
    
    <a href={'tel:'+user.phone} className="aside__networks-a">{user.phone}</a>
      <ul className="aside__networks-ul">
          { user.whatsapp != null ? 
          <li className="aside__networks-li aside__link-whatsapp">
            <a target="_blank" href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&text=Hola '+user.name_agency+''} className="aside__networks-link">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </li> 
          : '' }
          { user.messenger != null ? 
          <li className="aside__networks-li aside__link-facebook">
            <a href={'https://m.me/'+user.messenger} target="_blank" className="aside__networks-link">
              <i className="fab fa-facebook-messenger"></i>
            </a>
          </li>
          : '' }
          <li className="aside__networks-li aside__link-email">
            <a href={'mailto:'+user.agency_mail} target="_blank" className="aside__networks-link">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </li>
      </ul>
      <hr className="section__hidden" />
      <div className="section__hidden">
       <div className="aside__map-balloon">
           <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/visitanos.png" alt="" className="responsive__img"/>
       </div>
       <div className="aside__map-icon">
           <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/ubicacion.png" alt="" className="responsive__img ubicacion-img" />
       </div>
       <p className="aside__map-p">
        {user.address} #{user.outdoor_number},{user.suburb}, C.P.{user.postal_code} , {user.city_name},  <span className="aside__map-span"> {user.state_name} </span>
       </p>
      </div>
    </div>

   <div className="aside__map section__hidden">
       <iframe title="google" className="not-border" src={user.google_map} width="100%" height="550" aria-hidden="false"></iframe>   
   </div>

   <div className="aside__tv section__hidden">
      <hr />
      <div className="aside__tv-icon">
        <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/megatv-1.png" alt="" className="responsive__img"/>
      </div>
      <p className="aside__tv-title">mega</p>
      <p className="aside__tv-title">tv</p>
      <p className="aside__tv-subtitle">videos que inspiran</p>
      <p className="aside__tv-p">Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br/>¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
      </p>
    </div>
    
    <div className="aside__tv-phone section__hidden">
      <video className="" muted="muted" loop="loop" width="100%"  height="310">
        <source src="https://exodus.b-cdn.net/exodus/frutas/sandia/video/video-mega-tv.mp4" type="video/mp4" />
      </video>
    </div>

  </aside>
    </>
  );
}

export default Header;
