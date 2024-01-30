
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Footer({user}) {

    return (
        <>
    <footer>
        
        <section className="contacto " id="contacto">
            <h3 className="contacto__title">contáctanos <div className="contacto__contaner-img contacto__contaner-fresa"><img src="https://exodus.b-cdn.net/exodus/frutas/aguacate/img/aguacate3.png" alt=""/></div> </h3>
            <h4 className="contacto__subtitle">Por favor llena el formulario con tus planes de viaje. ¡Nosotros lo hacemos por ti!</h4>
            <div className="contacto__form">
                <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="formulario">
                    <input type="text" name="email" className="text__formulario"  placeholder="Email*" required/>
                    <input type="text" name="asunto" className="text__formulario"  placeholder="Asunto*" required/>
                    <input type="text" name="telefono" className="text__formulario"  placeholder="Telefono*" required/>
                   <textarea type="text" name="mensaje" className="text__formulario1"  placeholder="Mensaje*" required></textarea>
                    <input type="hidden" name="agencia" value={user.agency_mail}/>
                    <input type="hidden" name="url" value={user.url}/>
                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
                    <button type="submit" className="btn__formulario">Enviar</button>
                </form>
            </div>
        </section>
        <section className="dollars">
            <p className="dollars-p">{user.address} #{user.outdoor_number},{user.suburb}, C.P.{user.postal_code} , {user.city_name},  <br/> {user.state_name}</p>
            <ul className="dollars-ul">
                { user.facebook  != null ? <li className="dollars-li"><a href={'https://www.facebook.com/'+user.facebook} target="_blank" className="dollars-a"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> : '' }
                { user.twitter   != null ? <li className="dollars-li"><a href={'https://twitter.com/'+user.twitter} target="_blank" className="dollars-a"><i className="fa fa-twitter" aria-hidden="true"></i></a></li> : '' }
                { user.instagram != null ? <li className="dollars-li"><a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="dollars-a"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> : '' }
                { user.whatsapp != null ? <li className="dollars-li"><a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&text=Hola '+user.name_agency+''} target="_blank" className="dollars-a"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li> : '' }
            
            </ul>
        </section>
        {/*
        <section className="meca">
            <p className="meca-p">Sitio desarrollado por <a href="https://www.meca.mx/" target="_blank">Meca Agencia digital y diseño web</a> &copy; 2021</p>
        </section>
        */}
	</footer>

</>
    )
}

export default Footer