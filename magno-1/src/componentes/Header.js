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
        <header className="header header-purple">
        
		<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-responsive-purple">
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
							<a className="nav-link nav_link nav-link-purple" href="/">home</a>
						</li>
						<li className="nav-item nav_item dropdown position-static">
							<a className="nav-link nav_link nav-link-purple dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">destinos</a>
							<ul className="dropdown-menu megamenu">
								<div className="row">
									<li className="col-md-3">
										<ul>
											
											<li>
											<a href="/europa" className="nav_link_sub nav-link-purple">viajes a europa</a>
												
											</li>
											<li>
											<a href="/canada"  className="nav_link_sub nav-link-purple">canadá</a>
											</li>
											<li>
											<a href="/estados-unidos" className="nav_link_sub nav-link-purple">estados unidos</a>
											</li>
											<li>
												<a href="/mexico" className="nav_link_sub nav-link-purple">méxico</a>
											</li>
											
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<a href="/sudamerica" className="nav_link_sub nav-link-purple">sudamérica</a>
											</li>
											<li>
											<a href="/centroamerica" className="nav_link_sub nav-link-purple">centroamérica</a>
											</li>
											<li>
											<a href="/pacifico" className="nav_link_sub nav-link-purple">pacífico</a>
											</li>
											<li>
											<a href="/medio-oriente" className="nav_link_sub nav-link-purple">medio oriente</a>
											</li>
											
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<a href="/asia" className="nav_link_sub nav-link-purple">asia</a>
											</li>
											<li>
											<a href="/africa" className="nav_link_sub nav-link-purple">africa</a>
											</li>
											<li>
											<a href="/eventos" className="nav_link_sub nav-link-purple">eventos</a>
											</li>
											<li>
                                            <a href="/cruceros" className="nav_link_sub nav-link-purple">cruceros</a>
                                        </li>
											
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
											<a href="/juvi" className="nav_link_sub nav-link-purple">#juvi</a>
											</li>
											<li>
                                            <a href="/promociones" className="nav_link_sub nav-link-purple">Mejores Ofertas</a>
                                        </li>
                                        <li>
                                            <a href="/exoticos" className="nav_link_sub nav-link-purple">exoticos</a>
                                        </li>
									
											
										</ul>
									</li>
								</div>
							</ul>
						</li>
						<li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-purple"href="/ofertas">ofertas y promociones</a>
                        </li>
                        <li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-purple" href="#contacto">contacto</a>
                        </li>
                        <li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-purple" href="#">T.C. {tc} MXN</a>
                        </li>
         
						
					</ul>
				</div>
			</div>
        </nav>
        
        <section className="main-heading">
            <div className="container" />
              <h1 className="title-template">agencia de viajes</h1>
              <h4 className="subtitle-template">{user.name_agency}</h4>
                <p className="text-title-template">En {user.state_name} / Tel: <a href={'tel:'+user.phone} target='_blank'> {user.phone} </a> 
				{ user.whatsapp != null ? 
                
                <a  className="icon novi-icon icon-md-smaller icon-circle icon-secondary-5-filled mdi mdi-whatsapp footer-redes-a" href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp} target="_blank" >
                <i className="fab fa-whatsapp"></i>
                </a>
                
            : '' }
				</p>
              <div className="group-md button-group">
                  <a className="button-template button-purple" href="#contacto">contacto</a>
              </div>
            
          </section>
    </header>
        </>
    )
}

export default Header