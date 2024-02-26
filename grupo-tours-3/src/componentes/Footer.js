import React from 'react'
function Footer({ user }) {
	return (
		<>
			<footer>
				<section className="section1">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="banner-headding div1">
									<h3 className=" title-template">
										Escribenos                         </h3>
									<h3 className=" title-section  mb-4 seleccion-viajes">
										contacto                          </h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="footer-template" id="contacto">
					<div className="container">
						<div className="row">
							<div className="st-contact--info wpb_column column_container col-md-6"><div className="vc_column-inner wpb_wrapper">
								<div className="wpb_text_column wpb_content_element ">
									<div className="wpb_wrapper">
										<p className="p2">
											<strong>Por favor llena el formulario con tus planes de viaje. ¡Nosotros lo hacemos por ti!</strong>
										</p>
										<p className="p3">
											<span className="span1">Telefono:</span> <a href={'tel:' + user.phone} target="_blank">&nbsp;<span className="span2">{user.phone}</span></a>
										</p>
										<p className="p4">
											<span className="span1">Correo:&nbsp;</span> <a href={'mailto:' + user.agency_mail} target="_blank"><span className="span3">{user.agency_mail}</span></a>
										</p>
									</div>
								</div>
								<div className="wpb_text_column wpb_content_element  vc_custom_1587722966970 st-contact--social">
									<div className="wpb_wrapper">
										<div className="d-flex justify-content-start">
											{user.twitter == null ? '' : <a href={'https://twitter.com/' + user.twitter} target="_blank" className="p-1 icon-footer icon-footer-green"><i className="fab fa-twitter"></i></a>}
											{user.facebook == null ? '' : <a href={'https://www.facebook.com/' + user.facebook} target="_blank" className="p-1 icon-footer icon-footer-green"><i className="fab fa-facebook"></i></a>}
											{user.instagram == null ? '' : <a href={'http://instagram.com/' + user.instagram} target="_blank" className="p-1 icon-footer icon-footer-green"><i className="fab fa-instagram" aria-hidden="true"></i></a>}
											{user.whatsapp == null ? '' : <a href={'https://api.whatsapp.com/send?phone=52' + user.whatsapp} target="_blank" className="p-1 icon-footer icon-footer-green"><i className="fab fab fa-whatsapp" aria-hidden="true"></i></a>}
										</div>
									</div>
								</div>
							</div>
							</div>
							<div className="st-contact--form wpb_column column_container col-md-6">
								<div className="vc_column-inner wpb_wrapper">
									<div className="wpb_text_column wpb_content_element ">
										<div className="wpb_wrapper sociales-redes">
											<div role="form" className="wpcf7" id="wpcf7-f8405-p8088-o1" lang="en-US" dir="ltr">
												<form action="https://www.scriptsexodus.exodus.mx/send-template.php" method="post" className="wpcf7-form init">
													<div className="div3">
														<div className="form-group">
															<p>Contacto</p>
															<input type="email" name="email" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required your-name" placeholder="Email*" required="" />
														</div>
														<div className="form-group">
															<input type="text" name="asunto" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required your-name" placeholder="Asunto*" required="" />
														</div>
														<div className="form-group">
															<input type="text" name="telefono" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required your-name" placeholder="Telefono*" required="" />
														</div>
														<div className="form-group">
															<textarea name="mensaje" id="" cols="30" rows="10" className="wpcf7-form-control wpcf7-textarea your-message" placeholder="Mensaje*" required=""></textarea>
														</div>
														<input type="hidden" name="agencia" value={user.agency_mail} />
														<input type="hidden" name="url" value={user.url} />
													</div>
													<p><input type="submit" value="Enviar" className="wpcf7-form-control wpcf7-submit" /><span className="ajax-loader"></span></p>
													<div className="wpcf7-response-output" aria-hidden="true"></div>
												</form>
											</div>
										</div>
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
