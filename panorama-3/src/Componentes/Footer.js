import React from 'react'


function Footer({user}) {

    return (
        <>

<section className="footer container-fluid container__padding red__strong" id="contacto">
        <div className="padding__rem footer__container">
            <div className="row">
                <div className="col-md-6">
                 
                    <p className="footer__agencia color__red">
                    Agencia de Viajes - {user.name_agency}
                    </p>
                    <p className="footer__direccion">    
                    {user.address}, {user.outdoor_number}
                    </p>
                    <p className="footer__colonia">    
                    {user.suburb}
                    </p>
                    <p className="footer__postal">    
                    CP. {user.postal_code} {user.city_name}, {user.state_name}
                    </p>
                    <h3 className="footer__h3 color__red">    
                    Contacto
                    </h3>
                    <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="footer__form">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control footer__input red__strong" placeholder="Email*" required/>
                          </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            
                            <input type="text" name="asunto" className="form-control footer__input red__strong" placeholder="Asunto*" required/>
                          </div>
                          <div className="form-group col-md-6">
                            
                            <input type="text" name="telefono" className="form-control footer__input red__strong" placeholder="Telefono / Celular" required/>
                          </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="footer__label">Mensaje</label>
                          <textarea name="mensaje" id="" cols="10" rows="" className="form-control footer__area"></textarea>
                           
                        </div>

                        <input type="hidden" name="agencia" value={user.agency_mail}/>
                        <input type="hidden" name="url" value={user.url}/>
                        <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
                        
                        <button type="submit" className="footer__btn red red__button">Enviar</button>

                      </form>
                </div>
                <div className="col-md-6">
                    <p className="footer__phone">
                    <a href={'tel:'+user.phone}> {user.phone}</a> /
		   { user.other_phone  != null ? <a href={'tel:'+user.other_phone}> {user.other_phone}</a>: '' }
                    </p>
                    <p className="footer__correo ">
                        <a href={'mailto:'+user.agency_mail} className="footer__link color__red" target="_blank">    
                        {user.agency_mail}
                </a>
                { user.other_agency_mail  != null ? <a href={'mailto:'+user.other_agency_mail} className="footer__link color__red" target="_blank"> {user.other_agency_mail}</a>: '' }
                <br/>
                </p>    
                    <ul className="list-inline footer__ul">
                    { user.facebook  != null ? <li className="list-inline-item footer__li">
                            <a href={'https://www.facebook.com/'+user.facebook} target="_blank" className="footer__a">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li> : '' }
                        { user.messenger   != null ? <li className="list-inline-item footer__li">
                            <a href={'https://m.me/'+user.messenger+''} target="_blank" className="footer__a">
                                <i className="fab fa-facebook-messenger"></i>
                            </a>
                        </li> : '' }
                { user.whatsapp   != null ? <li className="list-inline-item footer__li">
                            <a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank" className="footer__a">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li> : '' }
                { user.twitter != null ? <li className="list-inline-item footer__li">
                            <a href={'https://twitter.com/'+user.twitter} target="_blank" className="footer__a">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li> : '' }
                        { user.instagram != null ? <li className="list-inline-item footer__li">
                            <a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="footer__a">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li> : '' }
            
                        

                        
                    </ul>
                    <iframe className="footer__iframe" src={user.google_map} width="431" height="258" aria-hidden="false"></iframe>
                </div>
                
            </div>
        </div>
          <a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank">
        <div className="writing"> Escríbenos por WhatsApp </div>
        <img className="icon-whats" src="https://exodus.b-cdn.net/exodus/magno/03/img/whatsapp.png" />
    </a>
    </section>

    <section className="meca">
        <p className="text-center meca__p">
      Sitio desarrollado por Meca Agencia digital y diseño web &copy; 2021</p>  
    </section>


    

</>
    )
}

export default Footer