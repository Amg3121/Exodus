import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Link
} from "react-router-dom"
function Header({ user }) {

	const [tc, setTC] = useState([]);

	useEffect(() => {
		axios.get('https://www.megatravel.com.mx/developers/tc/now').then(res => {
			const tc = res.data;
			setTC(tc);
		});
	}, [])

	return (
		<>
			<header className="header header-green">

				<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-responsive-green">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img src={user.logo} alt="" className="img-fluid" />
						</a>
						<button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">

							<i className="fas fa-bars"></i>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item nav_item">
									<a className="nav-link nav_link nav-link-green" href="/">home</a>
								</li>
								<li className="nav-item nav_item dropdown position-static">
									<a className="nav-link nav_link nav-link-green dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">destinos</a>
									<ul className="dropdown-menu megamenu">
										<div className="row">
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/europa" className="nav_link_sub nav-link-green">europa</a>
													</li>
													<li>
														<a href="/medio-oriente" className="nav_link_sub nav-link-green">medio oriente</a>
													</li>
													<li>
														<a href="/asia" className="nav_link_sub nav-link-green">asia</a>
													</li>
													<li>
														<a href="/africa" className="nav_link_sub nav-link-green">áfrica</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/canada" className="nav_link_sub nav-link-green">canadá</a>
													</li>
													<li>
														<a href="/estados-unidos" className="nav_link_sub nav-link-green">estados unidos</a>
													</li>
													<li>
														<a href="/mexico" className="nav_link_sub nav-link-green">méxico</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/sudamerica" className="nav_link_sub nav-link-green">sudamérica</a>
													</li>
													<li>
														<a href="/centroamerica" className="nav_link_sub nav-link-green">centroamérica</a>
													</li>
													<li>
														<a href="/pacifico" className="nav_link_sub nav-link-green">pacífico</a>
													</li>
													<li>
														<a href="/caribe" className="nav_link_sub nav-link-green">caribe</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/eventos" className="nav_link_sub nav-link-green">eventos</a>
													</li>
													<li>
														<a href="/cruceros" className="nav_link_sub nav-link-green">cruceros</a>
													</li>
													<li>
														<a href="/promociones" className="nav_link_sub nav-link-green">Mejores Ofertas</a>
													</li>
												</ul>
											</li>
										</div>
									</ul>
								</li>
								<li className="nav-item nav_item">
									<a className="nav-link nav_link nav-link-green" href="/ofertas">ofertas y promociones</a>
								</li>
								<li className="nav-item nav_item">
									<a className="nav-link nav_link nav-link-green" href="#contacto">contacto</a>
								</li>
								<li className="nav-item nav_item">
									<a className="nav-link nav_link nav-link-green" href="#">T.C. {tc} MXN</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<section className="main-heading">
					<div className="container" />
					<h1 className="title-template">agencia de viajes</h1>
					<h4 className="subtitle-template">{user.name_agency}</h4>
					<p className="text-title-template">En {user.state_name} / Tel: <a href={'tel:' + user.phone} target='_blank'> {user.phone} </a>
						{user.whatsapp != null ?

							<a className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-whatsapp footer-redes-a" href={'https://api.whatsapp.com/send?phone=52' + user.whatsapp} target="_blank">
								/ <i className="fab fa-whatsapp"></i>
							</a>
							: ''}</p>
					<div className="group-md button-group">
						<a className="button-template button-green" href="#contacto">contacto</a>
					</div>

				</section>
			</header>
		</>
	)
}

export default Header