/**
 * Component Navbar
 * Developed by David Marin
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Link
} from "react-router-dom"
function Navbar({ user }) {
	const [tc, setTC] = useState([]);
	useEffect(() => {
		axios.get('https://www.megatravel.com.mx/developers/tc/now').then(res => {
			const tc = res.data;
			setTC(tc);
		});
	}, [])
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-light main fixed-top back-verde-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img src={user.logo} alt="" className="logo-img" />
						</a>
						<button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><i className="fas fa-bars" aria-hidden="true"></i></button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link nav_link link-verde-menu" href="/#about">Nosotros</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav_link link-verde-menu" href="/ofertas">Ofertas y Promociones</a>
								</li>
								<li className="nav-item dropdown position-static">
									<a className="nav-link nav_link link-verde-menu dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">Destinos</a>
									<ul className="dropdown-menu megamenu back-verde-dark">
										<div className="row">
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/europa" className="nav_link_sub color-verde-dark submenu-verde-hover">europa</a>
													</li>
													<li>
														<a href="/medio-oriente" className="nav_link_sub color-verde-dark submenu-verde-hover">medio oriente</a>
													</li>
													<li>
														<a href="/asia" className="nav_link_sub color-verde-dark submenu-verde-hover">asia</a>
													</li>
													<li>
														<a href="/africa" className="nav_link_sub color-verde-dark submenu-verde-hover">africa</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/canada" className="nav_link_sub color-verde-dark submenu-verde-hover">canadá</a>
													</li>
													<li>
														<a href="/estados-unidos" className="nav_link_sub color-verde-dark submenu-verde-hover">estados unidos</a>
													</li>
													<li>
														<a href="/mexico" className="nav_link_sub color-verde-dark submenu-verde-hover">méxico</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/sudamerica" className="nav_link_sub color-verde-dark submenu-verde-hover">sudamérica</a>
													</li>
													<li>
														<a href="/centroamerica" className="nav_link_sub color-verde-dark submenu-verde-hover">centroamérica</a>
													</li>
													<li>
														<a href="/pacifico" className="nav_link_sub color-verde-dark submenu-verde-hover">pacífico</a>
													</li>
													<li>
														<a href="/caribe" className="nav_link_sub color-verde-dark submenu-verde-hover">caribe</a>
													</li>
												</ul>
											</li>
											<li className="col-md-3">
												<ul>
													<li>
														<a href="/eventos" className="nav_link_sub color-verde-dark submenu-verde-hover">eventos</a>
													</li>
													<li>
														<a href="/cruceros" className="nav_link_sub color-verde-dark submenu-verde-hover">cruceros</a>
													</li>
													<li>
														<a href="/promociones" className="nav_link_sub color-verde-dark submenu-verde-hover">Mejores Ofertas</a>
													</li>
												</ul>
											</li>
										</div>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link nav_link link-verde-menu" href="#contacto">Contacto</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav_link link-verde-menu" href="/"><i className="far fa-money-bill-alt" aria-hidden="true"></i> {tc} MXN </a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}
export default Navbar
