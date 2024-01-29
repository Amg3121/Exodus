import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom"
function Header({user}) {
    
    const [tc, setTC] = useState([]);
    
    useEffect(() => {
    axios.get('https://www.megatravel.com.mx/developers/tc/now').then(res => {
	const tc = res.data;
    setTC(tc);  
    });
    }, [])

    return (
        <>
        <header className="header header-orange">
        
		<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-responsive-orange">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
                    <img src={user.logo}  alt="" className="img-fluid" />
                </a>
				<button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    
                    <i className="fas fa-bars"></i>
                </button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-orange" href="/">home</a>
						</li>
						<li className="nav-item nav_item dropdown position-static">
							<a className="nav-link nav_link nav-link-orange dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">destinos</a>
							<ul className="dropdown-menu megamenu">
								<div className="row">
									<li className="col-md-3">
										<ul>
											
											<li>
											<Link to="/europa" className="nav_link_sub nav-link-orange">viajes a europa</Link>
												
											</li>
											<li>
											<Link to="/canada"  className="nav_link_sub nav-link-orange">canadá</Link>
											</li>
											<li>
											<Link to="/estados-unidos" className="nav_link_sub nav-link-orange">estados unidos</Link>
											</li>
											<li>
												<Link to="/mexico" className="nav_link_sub nav-link-orange">méxico</Link>
											</li>
											
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<Link to="/sudamerica" className="nav_link_sub nav-link-orange">sudamérica</Link>
											</li>
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">centroamérica</Link>
											</li>
											<li>
											<Link to="/pacifico" className="nav_link_sub nav-link-orange">pacífico</Link>
											</li>
											<li>
											<Link to="/medio-oriente" className="nav_link_sub nav-link-orange">medio oriente</Link>
											</li>
											
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<Link to="/asia" className="nav_link_sub nav-link-orange">asia</Link>
											</li>
											<li>
											<Link to="/africa" className="nav_link_sub nav-link-orange">africa</Link>
											</li>
											<li>
											<Link to="/eventos" className="nav_link_sub nav-link-orange">eventos</Link>
											</li>
											<li>
                                            <Link to="/cruceros" className="nav_link_sub nav-link-orange">cruceros</Link>
                                        </li>
											{/*
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">grupos y fits</Link>
											</li>
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">luna de miel</Link>
											</li>
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">quinceañeras</Link>
											</li>*/}
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<Link to="/juvi" className="nav_link_sub nav-link-orange">#juvi</Link>
											</li>
											<li>
                                            <Link to="/promociones" className="nav_link_sub nav-link-orange">Mejores Ofertas</Link>
                                        </li>
                                        <li>
                                            <Link to="/exoticos" className="nav_link_sub nav-link-orange">exoticos</Link>
                                        </li>
									{/*<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">desde cancún</Link>
											</li>
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">viajes verano 2020</Link>
											</li>
											<li>
											<Link to="/centroamerica" className="nav_link_sub nav-link-orange">viajes invierno 2020</Link>
									</li>*/}
											
										</ul>
									</li>
								</div>
							</ul>
						</li>
						<li className="nav-item nav_item">
							<Link className="nav-link nav_link nav-link-orange"to="/ofertas">ofertas y promociones</Link>
                        </li>
                        <li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-orange" href="#contacto">contacto</a>
                        </li>
                        <li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-orange" href="#">T.C. {tc} MXN</a>
                        </li>
         
						
					</ul>
				</div>
			</div>
        </nav>
        
        <section className="main-heading">
            <div className="container" />
              <h1 className="title-template">agencia de viajes</h1>
              <h4 className="subtitle-template">{user.name_agency}</h4>
                <p className="text-title-template">En {user.state_name} / Tel: <a href={'tel:'+user.phone} target='_blank'> {user.phone} </a> / <a  className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-whatsapp" href={'https://api.whatsapp.com/send?phone=+52'+user.whatsapp} target="_blank" className="footer-redes-a">
                <i className="fab fa-whatsapp"></i>
                </a></p>
              <div className="group-md button-group">
                  <a className="button-template button-orange" href="#contacto">contacto</a>
              </div>
            
          </section>
    </header>
        </>
    )
}

export default Header