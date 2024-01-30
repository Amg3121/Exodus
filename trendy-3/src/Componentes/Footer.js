import React from 'react'


function Footer({user}) {

    return (
        <>

<footer>
<section class="my-map" id="contacto">
			<iframe class="map" src={user.google_map} allowfullscreen="" aria-hidden="false" width="100%" height="400" ></iframe>
					
		</section>
		<section class="section-form">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" class="form-contacto">
							<div class="row">
							<div class="col-md-6">	
							<div class="form-group">
							  <input type="email" name="email" class="form-control" placeholder="Email*" required/>
							</div>
							<div class="form-group">
								<input type="text" name="asunto" class="form-control" placeholder="Asunto*" required/>
							  </div>
							  <div class="form-group">
								<input type="text" name="telefono" class="form-control" placeholder="Telefono / Celular" required/>
							  </div>
							<div class="form-group">
							  
							</div>

							</div>
							<div class="col-md-6">
							<div class="form-group">
								<textarea class="form-control" name="mensaje"  placeholder="Mensaje*"  rows="5"></textarea>
							</div>
                            <input type="hidden" name="agencia" value={user.agency_mail}/>
                        <input type="hidden" name="url" value={user.url}/>
                        <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
							<div class="form-group text-right ">
								<button type="submit" class="btn form-button-boton">Enviar Mensaje</button>
							</div>
							</div>	
							
							</div>
						  </form>
					</div>
					<div class="col-md-4 pl-5">
						<div class="logo-footer mb-4">
							<img src={user.logo} alt=""/>
						</div>
						<h5>Telefonos</h5>
						<p><i class="fas fa-phone color-phone"></i> <a href={'tel:'+user.phone}> {user.phone}</a></p>
						{ user.other_phone  != null ? <p><i class="fas fa-phone color-phone"></i> <a href={'tel:'+user.other_phone}> {user.other_phone}</a></p>: '' }

						<h5 class="mt-4">E-mail</h5>
						<p><i class="far fa-envelope color-mail"></i> <a href={'mailto:'+user.agency_mail} target="_blank">{user.agency_mail}</a></p>
						{ user.other_agency_mail  != null ?<p><i class="far fa-envelope color-mail"></i> <a href={'mailto:'+user.other_agency_mail} target="_blank">{user.other_agency_mail}</a></p>: '' }

						<h5 class="mt-4 mb-4">Sociales</h5>
						<div class="d-flex flex-row bd-highlight">
                        { user.facebook  != null ? <div class="bd-highlight">
                                <a href={'https://www.facebook.com/'+user.facebook} className="link__networks-footer" target="_blank"><i class="fab fa-facebook-f color-sociales"></i></a></div> : '' }
						{ user.messenger  != null ? <div class="pl-4 bd-highlight">
                            	<a href={'https://m.me/'+user.messenger} className="link__networks-footer" target="_blank"><i class="fab fa-facebook-messenger color-sociales"></i></a></div> : '' }
								
                { user.whatsapp   != null ? <div class="pl-4 bd-highlight">
                                <a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank" className="link__networks-footer"><i className="fab fa-whatsapp color-sociales"></i></a>
                                </div>: '' }
								{ user.twitter != null ? <div class="pl-4 bd-highlight">
		<a href={'https://twitter.com/'+user.twitter} target="_blank" className="link__networks-footer"><i class="fab fa-twitter color-sociales"></i></a>
		</div> : '' }
                        { user.instagram != null ? <div class="pl-4 bd-highlight">
                                <a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="link__networks-footer"><i class="fab fa-instagram color-sociales"></i></a>
                                </div> : '' }
							
						</div>
					</div>
				</div>
			</div>

		</section>
    </footer>


</>
    )
}

export default Footer