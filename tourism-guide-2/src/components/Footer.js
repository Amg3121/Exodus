import React from 'react'
function Footer({ user }) {
	return (
		<>
			<footer>
				<section className="footer" id="contact">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<h3 className="title-footer mb-4 text-center">Ubicacion</h3>
								<p className="text-footer">{user.address} No. {user.outdoor_number} <br />Col. {user.suburb} - C.P. {user.postal_code} <br />{user.city_name}, {user.state_name} <br />
									<a href={'tel:' + user.phone}>Tel: {user.phone}</a>
									{user.other_phone == null ? '' : <a href={'tel:' + user.other_phone}>Tel: {user.other_phone}</a>}
									<br /> <a href={'mailto:' + user.agency_mail}>{user.agency_mail}</a>
									{user.other_agency_mail == null ? '' : <a href={'mailto:' + user.other_agency_mail}>{user.other_agency_mail}</a>}</p>
								<div className="d-flex justify-content-start">
									{user.twitter == null ? '' : <a href={'https://twitter.com/' + user.twitter} target="_blank" className="p-1 icon-footer icon-footer-blue"><i className="fab fa-twitter"></i></a>}
									{user.facebook == null ? '' : <a href={'https://www.facebook.com/' + user.facebook} target="_blank" className="p-1 icon-footer icon-footer-blue"><i className="fab fa-facebook-f"></i></a>}
									{user.instagram == null ? '' : <a href={'http://instagram.com/' + user.instagram} target="_blank" className="p-1 icon-footer icon-footer-blue"><i class="fab fa-instagram" aria-hidden="true"></i></a>}
									{user.whatsapp == null ? '' : <a href={'https://api.whatsapp.com/send/?phone=52' + user.whatsapp} target="_blank" className="p-1 icon-footer icon-footer-blue"><i className="fab fab fa-whatsapp" aria-hidden="true"></i></a>}
								</div>
							</div>
							<div className="col-md-4">
								<h4 className="escribenos color-blue mb-4">Escribenos</h4>
								<form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php">
									<div className="form-group">
										<input type="email" name="email" className="form-control input_form" placeholder="Email*" required />
									</div>
									<div className="form-group">
										<input type="text" name="asunto" className="form-control input_form" placeholder="Asunto*" required />
									</div>
									<div className="form-group">
										<input type="text" name="telefono" className="form-control input_form" placeholder="Telefono*" required />
									</div>
									<div className="form-group">
										<input type="text" name="mensaje" className="form-control input_form" placeholder="Mensaje*" required />
									</div>
									<input type="hidden" name="agencia" value={user.agency_mail} />
									<input type="hidden" name="url" value={user.url} />
									<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
									<button type="submit" className="btn-back-blue btn-enviar mt-4">Enviar Ahora</button>
								</form>
							</div>
							<div className="col-md-4">
								<h4 className="color-blue text-center mb-4 mapa-title">Mapa</h4>
								<iframe className="map" title="mapagoogle" src={user.google_map} width="100%" height="200" aria-hidden="false"></iframe>
							</div>
						</div>
					</div>
				</section>
			</footer>
		</>
	)
}
export default Footer
