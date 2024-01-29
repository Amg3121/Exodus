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
        
       
    </header>

    <br/><br/><br/><br/><br/><br/>
        <section className="back-head back-head-orange">
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
                 
                <iframe className="iframe-mega" title="juvi" src="https://www.megatravel.com.mx/tools/vi.php?Dest=14&txtColor=8d151e&aColor=8D151E&ahColor=8D151E&thBG=d9ae2c&thTxColor=8D151E&ff=1" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>   
        </>
    )
}

export default MainJuvi
