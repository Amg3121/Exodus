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

  const [ open, setOpen ] = useState(false)

	const [ open2, setOpen2 ] = useState(false)

  return (
    <>
      <header>
      
        
      <nav className={ open ? "sidebar show" : "sidebar"}>
      

        <div className="aside__icon">
        <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "aside__icon-a" : "aside__icon-a"}
      onClick={ () => setOpen(!open) }>
    <i class="fa fa-bars" aria-hidden="true"></i>
       </a>

       <h1 className="aside__brand">{user.name_agency}</h1>
       
        </div>

        <ul>
          <li className="active">
            <a href="/promociones">
              ofertas y <br /> promociones
            </a>
          </li>
          <li>
            <a  aria-expanded={open2 === true ? "true" : "false"}
      className={open2 === true ? "feat-btn" : "feat-btn"}
      onClick={ () => setOpen2(!open2) }>
              destinos <br /> de viaje
              <span className="fas fa-chevron-circle-down first"></span>
            </a>
            <ul className={ open2 ? "feat-show show" : "feat-show"}>
              <li>
                <a href="/europa">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/viajes-a-europa.jpg" alt="" />
                  <span className="span__submenu">viajes a europa</span>
                </a>
              </li>
              <li>
                <a href="/canada">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/canada.jpg" alt="" />
                  <span className="span__submenu white">canadá</span>
                </a>
              </li>
              <li>
                <a href="/estados-unidos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/estados-unidos.jpg" alt="" />
                  <span className="span__submenu">estados unidos</span>
                </a>
              </li>
              <li>
                <a href="/mexico">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/mexico.jpg" alt="" />
                  <span className="span__submenu white">méxico</span>
                </a>
              </li>
              <li>
                <a href="/sudamerica">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/sudamerica.jpg" alt="" />
                  <span className="span__submenu">sudamérica</span>
                </a>
              </li>
              <li>
                <a href="/centroamerica">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/centroamerica.jpg" alt="" />
                  <span className="span__submenu font">centroamérica</span>
                </a>
              </li>
              <li>
                <a href="/pacifico">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/pacifico.jpg" alt="" />
                  <span className="span__submenu">pacífico</span>
                </a>
              </li>
              <li>
                <a href="/medio-oriente">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/medio-oriente.jpg" alt="" />
                  <span className="span__submenu">medio oriente</span>
                </a>
              </li>
              <li>
                <a href="/asia">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/asia.jpg" alt="" />
                  <span className="span__submenu white">asia</span>
                </a>
              </li>
              <li>
                <a href="/africa">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/africa.jpg" alt="" />
                  <span className="span__submenu">africa</span>
                </a>
              </li>
              <li>
                <a href="/eventos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/eventos.jpg" alt="" />
                  <span className="span__submenu white">eventos</span>
                </a>
              </li>
              <li>
                <a href="/cruceros">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/cruceros.jpg" alt="" />
                  <span className="span__submenu">cruceros</span>
                </a>
              </li>

              <li>
                <a href="/juvi">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/juvi.jpg" alt="" />
                  <span className="span__submenu">#juvi</span>
                </a>
              </li>

              <li>
                <a href="/exoticos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/menu/grupos-y-fits.jpg" alt="" />
                  <span className="span__submenu">Exoticos</span>
                </a>
              </li>



              
            </ul>
          </li>

          <li>
            
            <a href="#somos">quienes somos</a>
          </li>
          <li>
            <a href="#contacto">contacto</a>
          </li>
        </ul>
      </nav>
      
    </header>
    
    

  <aside className="aside">
     
      <div className="aside__icon">

  

       <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "aside__icon-a" : "aside__icon-a"}
      onClick={ () => setOpen(!open) }>
    <i class="fa fa-bars" aria-hidden="true"></i>
       </a>

       <h1 className="aside__brand">{user.name_agency}</h1>

      </div>
     
   <div className="aside__container-info">
       
       <a href="/" className="aside__logotipo">
           <img src={user.logo} alt="" className="responsive__img"/>
       </a>

       <p className="aside__agency">agencia <br/> de viajes</p>
       <p className="aside__country">en {user.city_name}, {user.state_name}</p>

       <div className="aside__about-balloon" href="#somos">
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/quienes-somos.png" alt="" className="responsive__img"/>
       </div>
       <p className="aside__about-p" dangerouslySetInnerHTML={{__html: user.description}}></p>
       <a href="#contacto" className="aside__about-a back__fresa hover__fresa">contacto</a>
       <hr />

       <div className="aside__networks-balloon">
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/comunicate.png" alt="" className="responsive__img"/>
       </div>
       <div className="aside__networks-communicate">
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/comunicate2.png" alt="" className="responsive__img"/>
       </div>

       <a href={'tel:'+user.phone} className="aside__networks-a">{user.phone}</a>
       <a href={'mailto:'+user.agency_mail} className="aside__networks-email">
     {user.agency_mail}
       </a>
       <ul className="aside__networks-ul">
           <li className="aside__networks-li aside__link-whatsapp">
               <a target="_blank" href={'https://api.whatsapp.com/send?phone=+'+user.whatsapp+'&text=Hola '+user.name_agency+''} className="aside__networks-link">
                   <i className="fa fa-whatsapp" aria-hidden="true"></i>
               </a>
           </li>
           <li className="aside__networks-li aside__link-facebook">
           
               <a href="https://m.me/123506734415493" target="_blank" className="aside__networks-link">
                   <i className="fab fa-facebook-messenger"></i>
               </a>
           </li>
           
           <li className="aside__networks-li aside__link-email">
               <a href={'mailto:'+user.agency_mail} target="_blank" className="aside__networks-link">
                   <i className="fa fa-envelope-o" aria-hidden="true"></i>
               </a>
           </li>
       </ul>
       <hr className="section__hidden" />

       <div className="section__hidden">

       <div className="aside__map-balloon">
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/visitanos.png" alt="" className="responsive__img"/>
       </div>
       <div className="aside__map-icon">
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/ubicacion.png" alt="" className="responsive__img ubicacion-img" />
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
           <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/megatv-1.png" alt="" className="responsive__img"/>
       </div>
       <p className="aside__tv-title">mega</p>
       <p className="aside__tv-title">tv</p>
       <p className="aside__tv-subtitle">videos que inspiran</p>
       <p className="aside__tv-p">
   Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br/>¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
       </p>
       
   </div>

   <div className="aside__tv-phone section__hidden">
      <video className="" muted="muted" loop="loop" width="100%"  height="310">
          <source src="https://mecamx.net/exodus2020/frutas/fresa/video/video-mega-tv.mp4" type="video/mp4" />
      </video>
   </div>
   

  </aside>
    </>
  );
}

export default Header;
