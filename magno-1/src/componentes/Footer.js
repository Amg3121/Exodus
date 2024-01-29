import React from 'react'

function Footer({user}) {
    return (
        <>
                <footer className="footer">
                <section className="footer-template" id="contacto">	
        <div className="container-template">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="title-footer color-purple">información de contacto</h3>
                    <p className="paragraph-footer">
                        <span className="span-market"><i className="fas fa-map-marker-alt color-purple"></i></span>
                        {user.address}, No.{user.outdoor_number}<br />
                        Col. {user.suburb} <br />
                        C.P. {user.postal_code}, {user.state_name}, {user.city_name}
                    </p>
                    <iframe className="iframe" src={user.google_map} width="432" height="200" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="col-md-6">
                   <p className="paragraph-envelope"> <span className="span-envelope"><i className="fas fa-envelope-open color-purple"></i></span> <a href={'mailto:'+user.agency_mail} target='_blank'> {user.agency_mail} </a> </p>
                   <p className="paragraph-mobile"> <span className="span-mobile"><i className="fas fa-mobile-alt color-purple"></i></span>  <a href={'tel:'+user.phone} target='_blank'> {user.phone} </a>   </p>
                   
                   <ul className="group-xs group-middle social-icons-list">
                    
                   { user.facebook  != null ? <li className="footer-redes-li">
                <a className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-facebook footer-redes-a" href={'https://www.facebook.com/'+user.facebook} target="_blank" >
                <i className="fab fa-facebook"></i>
                </a>
                
            </li> : '' }
            
            { user.twitter != null ? <li className="footer-redes-li">
                
                <a className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-twitter footer-redes-a" href={'https://twitter.com/'+user.twitter} target="_blank" >
                <i className="fab fa-twitter"></i>
                </a>
            </li> : '' }
                        { user.instagram != null ? <li className="footer-redes-li">
                
                <a  className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-instagram footer-redes-a" href={'https://www.instagram.com/'+user.instagram} target="_blank" >
                <i className="fab fa-instagram"></i>
                </a>
                
            </li> : '' }

            { user.whatsapp != null ? <li className="footer-redes-li">
                
                <a  className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-whatsapp footer-redes-a" href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp} target="_blank" >
                <i className="fab fa-whatsapp"></i>
                </a>
                
            </li> : '' }
            { user.messenger != null ? <li className="footer-redes-li">
                
                <a  className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-messenger footer-redes-a" href={'https://m.me/'+user.messenger} target="_blank" >
                <i className="fab fa-facebook-messenger"></i>
                </a>
                
            </li> : '' }
     </ul>
                   
                   <h5 className="title-form color-purple">Escríbenos</h5>
                   <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="form-footer">
                    <div className="form-group form-group-footer row">
                        <label for="" className="col-sm-2 col-form-label label-footer ">Nombre</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control input-footer purple-input" placeholder="Nombre*" required/>
                        </div>
                      </div>
                      <div className="form-group form-group-footer row">
                        <label for="" className="col-sm-2 col-form-label label-footer">Asunto</label>
                        <div className="col-sm-10">
                          <input type="text" name="asunto" className="form-control input-footer purple-input"  placeholder="Asunto*" required/>
                        </div>
                      </div>
                      <div className="form-group form-group-footer row">
                        <label for="" className="col-sm-2 col-form-label label-footer">E-mail</label>
                        <div className="col-sm-10">
                          <input type="email" name="email" className="form-control input-footer purple-input"  placeholder="Email*" required/>
                        </div>
                      </div>
                      <div className="form-group form-group-footer row">
                        <label for="" className="col-sm-2 col-form-label label-footer">Tel:</label>
                        <div className="col-sm-10">
                          <input type="text" name="telefono" className="form-control input-footer purple-input"  placeholder="telefono*" required/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-footer">Mensaje</label>
                        <textarea name="mensaje" className="form-control textarea-footer"  required></textarea>
                      </div>
                      <div className="buttons-see text-right">
                      <input type="hidden" name="agencia" value={user.agency_mail} />
							<input type="hidden" name="url" value={user.url} />
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
							<button type="submit" className="button-template button-purple">Enviar Ahora</button>
                      
                      </div>
                   </form> 
                </div>
               
                <div className="col-md-12">
                    <p className="meca">2021 all rights reserved</p>
                </div>
            </div>
        </div>
     {/*  <a href={'https://api.whatsapp.com/send?phone=+52'+user.whatsapp} target="_blank">
        <div className="writing"> Escríbenos por WhatsApp </div>
        <img className="icon-whats" src="https://exodus.b-cdn.net/exodus/magno/03/img/whatsapp.png" />
    </a>*/} 
        </section>
        
    </footer>
        </>
    )
}

export default Footer