import React from 'react'


function Footer({user}) {

    return (
        <>
    <footer>

        
        <section className="contacto back__fresa" id="contacto">
            <h3 className="contacto__title">contactanos <div className="contacto__contaner-img contacto__contaner-fresa"><img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/fresa3.png" alt=""/></div> </h3>
            <h4 className="contacto__subtitle">Por favor llena el formulario con tus planes de viaje. ¡Nosotros lo hacemos por ti!</h4>
            <div className="contacto__form">
                <form method="post" action="https://www.exodus.mx/includes/send-template.php" className="formulario">
                    <input type="text" name="email" className="text__formulario"  placeholder="Email*" required/>
                    <input type="text" name="asunto" className="text__formulario"  placeholder="Asunto*" required/>
                    <input type="text" name="telefono" className="text__formulario"  placeholder="Telefono*" required/>
                    <input type="text" name="mensaje" className="text__formulario"  placeholder="Mensaje*" required/>
                    <input type="hidden" name="agencia" value={user.name_agency}/>
                    <input type="hidden" name="url" value={user.url}/>
                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
                    <button type="submit" className="btn__formulario color__fresa hover__fresa">Enviar</button>
                </form>
            </div>
        </section>
        <section className="dollars">
            <p className="dollars-p">{user.address} #{user.outdoor_number},{user.suburb}, C.P.{user.postal_code} , {user.city_name},  <br/> {user.state_name}</p>
            <ul className="dollars-ul">
                { user.facebook  != null ? <li className="dollars-li"><a href={'https://www.facebook.com/'+user.facebook} target="_blank" className="dollars-a"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> : '' }
                { user.twitter   != null ? <li className="dollars-li"><a href={'https://twitter.com/'+user.twitter} target="_blank" className="dollars-a"><i className="fa fa-twitter" aria-hidden="true"></i></a></li> : '' }
                { user.instagram != null ? <li className="dollars-li"><a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="dollars-a"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> : '' }
            
            </ul>
        </section>
        <section className="meca">
            <p className="meca-p">Sitio desarrollado por Meca Agencia digital y diseño web (c) 2021</p>
        </section>
	</footer>

</>
    )
}

export default Footer