import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom"

function MainJuvi({user}) {
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
        
		<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-responsive-green background-section-green">
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
											<a href="/canada"  className="nav_link_sub nav-link-green">canadá</a>
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
        
       
    </header>

    <br/><br/><br/><br/><br/><br/>
        <section className="back-head back-head-green">
			<div className="container">
				<div className="row">
					<div className="col-md-12 container-main-title">
						<h1 className="text-center main-subtitle mb-1">Viajes Juventud Viajera</h1>	
					</div>
				</div>
			</div>
			<div className="filter"></div>
		</section>
        <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                 
                <iframe className="iframe-mega" title="juvi" src="https://www.megatravel.com.mx/tools/vi.php?Dest=14&txtColor=13547e&aColor=13547e&ahColor=28cec4&thBG=28cec4&thTxColor=13547e&ff=1" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>   
        </>
    )
}

export default MainJuvi
