/**
 * Component Section Footer
 * Developed by David Marin
 */
import React from 'react'
function Footer({ user }) {
	return (
		<>
			<footer>
				<section className="footer" id="contact">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h4 className="escribenos mb-4">Escríbenos</h4>
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
									<button type="submit" className="btn-back-red btn-enviar mt-4">Enviar Ahora</button>
								</form>
							</div>
							<div className="col-md-6">
								<h4 className="text-center mb-4 mapa-title">Ubicación</h4>
								<iframe className="map" src={user.google_map} width="100%" height="200" aria-hidden="false"></iframe>
								<p className="text-footer">{user.address} No. {user.outdoor_number} <br />Col. {user.suburb} - C.P. {user.postal_code} <br />{user.city_name}, {user.state_name} <br /><a href={'tel:' + user.phone}>Tel.: {user.phone}</a>,<br /> <a href={'mailto:' + user.agency_mail}>{user.agency_mail}</a></p>
							</div>
						</div>
					</div>
				</section>
			</footer>
		</>
	)
}
export default Footer
