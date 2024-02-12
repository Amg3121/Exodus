/**
 * Component Section Footer
 * Developed by David Marin
 */
import React from 'react'
function Footer({ user }) {
	return (
		<>
			<footer>
				<section className="contacto" id="contacto">
					<div className="container-fluid padding-footer">
						<div className="row no-gutters p-0">
							<div className="col-md-6 margin-top-contacto">
								<section>
									<div className="container">
										<h4 className="title-section-black text-left">Contacto</h4>
										<hr className="divider-contacto color-azul-line" />
										<form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php">
											<div className="form-row">
												<div className="form-group col-md-6">
													<label className="label_form">Email</label>
													<input name="email" type="email" className="form-control input_form" />
												</div>
												<div className="form-group col-md-6">
													<label className="label_form">Asunto</label>
													<input name="asunto" type="text" className="form-control input_form" />
												</div>
											</div>
											<div className="form-row">
												<div className="form-group col-md-6">
													<label className="label_form">Telefono</label>
													<input name="telefono" type="text" className="form-control input_form" />
												</div>
											</div>
											<div className="form-group">
												<label className="label_form">Mensaje</label>
												<textarea name="mensaje" className="form-control textarea_form" id="" rows="3"></textarea>
											</div>
											<input type="hidden" name="agencia" value={user.agency_mail} />
											<input type="hidden" name="url" value={user.url} />
											<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
											<button type="submit" className="btn-enviar btn-azul-purple btn-azul-purple-hover">Enviar</button>
										</form>
									</div>
								</section>
							</div>
							<div className="col-md-6 ">
								<div className="row no-gutters p-0">
									<div className="col-md-6 margin-top-contacto padding-sociales">
										<div className="container-link-contacto">
											<h6 className="link-contacto">
												Telefono
											</h6>
											<p className=""><span className="span-footer color-azul-light"><i className="fas fa-phone"></i></span><a href={'tel:' + user.phone}>{user.phone}</a></p>
										</div>
										<div className="container-link-contacto">
											<h6 className="link-contacto">
												E-mail
											</h6>
											<p className=""><span className="span-footer color-azul-light"><i className="far fa-envelope"></i></span><a href={'mailto:' + user.agency_mail} target="_blank">{user.agency_mail}</a></p>
										</div>
										<div className="container-link-contacto">
											<h6 className="link-contacto">
												Direccion
											</h6>
											<p className=""><span className="span-footer color-azul-light"><i className="fas fa-map-marker-alt"></i></span>Calle: {user.address} #{user.outdoor_number} Colonia: {user.suburb}</p>
										</div>
										<h6 className="link-contacto">
											Sociales
										</h6>
										<p className="">
											{user.facebook == null ? '' : <span className="span-footer color-azul-light"><a href={'https://www.facebook.com/' + user.facebook} target="_blank" ><i className="fab fa-facebook"></i></a></span>
											}
											{user.twitter == null ? '' : <span className="span-footer color-azul-light"><a href={'https://twitter.com/' + user.twitter} target="_blank" ><i className="fab fa-twitter-square"></i></a></span>
											}
											{user.instagram == null ? '' : <span className="span-footer color-azul-light"><a href={'http://instagram.com/' + user.instagram} target="_blank" ><i className="fab fa-instagram" aria-hidden="true"></i></a></span>}
											{user.whatsapp == null ? '' : <span className="span-footer color-azul-light"><a href={'https://api.whatsapp.com/send?phone=52' + user.whatsapp} target="_blank" ><i className="fab fa-whatsapp" aria-hidden="true"></i></a></span>}
										</p>
									</div>
									<div className="col-md-6">
										<iframe className="maps" title="mapa" src={user.google_map} width="100%" height="100%" aria-hidden="false"></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="firma p-3 back-azul-dark text-white">
					<p className="text-center m-0">2021 all rights reserved</p>
				</section>
			</footer>
		</>
	)
}
export default Footer
