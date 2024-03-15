/**
 * Component Section Networks
 * Developed by David Marin
 */
import React from 'react'
function SectionNetwork({ user }) {
	return (
		<>
			<section className="networks">
				<h3 className="text-center title-section mb-4">Llámanos</h3>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/call-us.webp" alt="" />
							<h4 className="networks-title color-yellow">llamanos</h4>
							<p className="text-networks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia eveniet quo delect.</p>
							<span className="text-networks">
								{user.map((dato, index) => {
									return <strong key={index}>{dato.phone}</strong>;
								})}
							</span>
						</div>
						<div className="col-md-4">
							<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/networks.webp" alt="" />
							<h4 className="networks-title color-yellow">redes sociales</h4>
							<p className="text-networks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, molestias modi! Nulla sunt.</p>
							<ul>
								<li>
									{user.map((dato, index) => {
										return <a key={index} href={dato.facebook} className="under-yellow networks-link"><i className="fab fa-facebook networks-icon"></i>{dato.facebook}</a>;
									})}
								</li>
								<li>
									{user.map((dato, index) => {
										return <a key={index} href={dato.instagram} className="under-yellow networks-link"><i className="fab fa-instagram networks-icon"></i>{dato.facebook}</a>;
									})}
								</li>
								<li>
									{user.map((dato, index) => {
										return <a key={index} href={dato.twitter} className="under-yellow networks-link"><i className="fab fa-twitter-square networks-icon"></i>{dato.twitter}</a>;
									})}
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/chat.webp" alt="" />
							<h4 className="networks-title color-yellow">chatea con nosotros</h4>
							<p className="text-networks">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, aperiam natus magni non aliq.</p>
							<ul>
								<li>
									{user.map((dato, index) => {
										return <a href="/" key={index} className="under-yellow networks-link"><i className="fab fa-whatsapp-square networks-icon"></i>{dato.whatsapp}</a>;
									})}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default SectionNetwork
