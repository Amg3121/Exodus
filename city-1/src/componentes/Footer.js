import React from 'react'

function Footer({user}) {
    return (
        <>
           <footer>
		<section className="footer" id="contacto">
			<div className="container">
				<div className="row">
					
					<div className="col-md-5">
						<h3 className="title-section color-orange mb-4">Contacto</h3>
						<p className="mb-5">Por favor llena el formulario con tus planes de viaje. ¡Nosotros lo hacemos por ti!</p>
						<form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php">
						<div className="form-group">
							 
							 <input type="email" name="email" className="form-control input_form" placeholder="Email*" required=""/>
						   </div>
							<div className="form-group">
							  
							  <input type="text" name="asunto" className="form-control input_form" placeholder="Asunto*" required=""/>
							</div>
							<div className="form-group">
							  
							  <input type="text" name="telefono" className="form-control input_form" placeholder="Telefono*" required=""/>
							</div>
							
							<div className="form-group">
								<textarea name="mensaje" id="" cols="30" rows="10" className="form-control textarea_form" placeholder="Mensaje*" required=""></textarea>
								
							</div>
							<input type="hidden" name="agencia" value={user.agency_mail} />
							<input type="hidden" name="url" value={user.url} />
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
							<button type="submit" className="btn-back-orange-blue btn-enviar mt-4">Enviar Ahora</button>
						  </form>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-5">
						<img src="https://exodus.b-cdn.net/exodus/city/01/img/contacto.jpg" alt="" className="img-fluid-oferta" />
						
						<div className="info-content info-content-orange">
							<h3>{user.name_agency}</h3>
							<div className="d-flex justify-content-start">

							{ user.twitter == null ? '': <a href={'https://twitter.com/'+user.twitter} target="_blank"  className="p-1 icon-footer icon-footer-green"><i className="fab fa-twitter"></i></a> }
							{ user.facebook == null ? '': <a href={'https://www.facebook.com/'+user.facebook} target="_blank" className="p-1 icon-footer icon-footer-green"><i className="fab fa-facebook-f"></i></a> }
							{ user.instagram == null ? '': <a href={'http://instagram.com/'+user.instagram} target="_blank" className="p-1 icon-footer icon-footer-green"><i class="fab fa-instagram" aria-hidden="true"></i></a> }
							{ user.whatsapp == null ? '': <a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp} target="_blank" className="p-1 icon-footer icon-footer-green"><i class="fab fa-whatsapp-square"></i></a> }
								
							</div>
							<div className="sub">
								<p>Tel.<a href={'tel:'+user.phone}>{user.phone}</a></p>
								
							 	<p>Email. <a href={'mailto:'+user.agency_mail} target="_blank">{user.agency_mail}</a></p>
								<p className="address">{user.address} No. {user.outdoor_number} <br/>Col. {user.suburb} - C.P. {user.postal_code} <br/>{user.city_name}, {user.state_name}</p>
						
					</div>
								</div>
					</div>
				</div>
			</div>
		</section>
		<section className="my-map">
			
			  <iframe className="maps" src={user.google_map} width="100%" height="400" aria-hidden="false"></iframe>
						
		</section>
    </footer> 
        </>
    )
}

export default Footer
