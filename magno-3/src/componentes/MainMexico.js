import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom"

function MainMexico({user}) {
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
        
		<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-responsive-orange background-section-orange">
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
											<a href="/europa" className="nav_link_sub nav-link-orange">europa</a>	
											</li>	
											<li>
											<a href="/medio-oriente" className="nav_link_sub nav-link-orange">medio oriente</a>
											</li>
											<li>
											<a href="/asia" className="nav_link_sub nav-link-orange">asia</a>
											</li>
											<li>
											<a href="/africa" className="nav_link_sub nav-link-orange">africa</a>
											</li>
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
											<li>
											<a href="/canada"  className="nav_link_sub nav-link-orange">canadá</a>
											</li>
											<li>
											<a href="/estados-unidos" className="nav_link_sub nav-link-orange">estados unidos</a>
											</li>
											<li>
											<a href="/mexico" className="nav_link_sub nav-link-orange">méxico</a>
											</li>
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
											<li>
											<a href="/sudamerica" className="nav_link_sub nav-link-orange">sudamérica</a>
											</li>
											<li>
											<a href="/centroamerica" className="nav_link_sub nav-link-orange">centroamérica</a>
											</li>
											<li>
											<a href="/pacifico" className="nav_link_sub nav-link-orange">pacífico</a>
											</li>
											<li>
                                            <a href="/caribe" className="nav_link_sub nav-link-orange">caribe</a>
                                        </li>
										</ul>
									</li>
									<li className="col-md-3">
										<ul>
										<li>
                                            <a href="/promociones" className="nav_link_sub nav-link-orange">Mejores Ofertas</a>
                                        </li>
										<li>
											<a href="/eventos" className="nav_link_sub nav-link-orange">eventos</a>
											</li>
											<li>
                                            <a href="/cruceros" className="nav_link_sub nav-link-orange">cruceros</a>
                                        	</li>
											
										</ul>
									</li>
								</div>
							</ul>
						</li>
						<li className="nav-item nav_item">
							<a className="nav-link nav_link nav-link-orange"href="/ofertas">ofertas y promociones</a>
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
        
       
    </header>

    <br/><br/><br/><br/><br/><br/>
            <section className="back-head back-head-orange">
			<div className="container">
				<div className="row">
					<div className="col-md-12 container-main-title">
						<h1 className="text-center main-subtitle mb-1">Viajes México</h1>	
					</div>
				</div>
			</div>
			<div className="filter"></div>
		</section>
        <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                <iframe className="iframe-mega" title="mexico" src="https://www.megatravel.com.mx/tools/vi.php?Dest=11&txtColor=8d151e&aColor=8D151E&ahColor=8D151E&thBG=d9ae2c&thTxColor=8D151E&ff=1" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section> 
        </>
    )
}

export default MainMexico