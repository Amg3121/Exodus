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
            <header class="header">
        
		<nav class="navbar navbar-expand-lg navbar-light main fixed-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
                    <img src={user.logo} alt="agencia de viajes"/>
                </a>
				<button class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item nav_item">
							<a class="nav-link nav_link" href="/promociones">Ofertas de viaje</a>
						</li>
						
						<li class="nav-item nav_item dropdown position-static">
							<a class="nav-link dropdown-toggle nav_link" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">destinos</a>
							<ul class="dropdown-menu megamenu">
								<div class="row">
									<li class="col-md-3">
										<ul>
										<li>
                                            <a href="/europa" class="nav_link_sub nav-link-purple">viajes a europa</a>
                                        </li>
                                        <li>
                                            <a href="/canada" class="nav_link_sub nav-link-purple">canadá</a>
                                        </li>
                                        <li>
                                            <a href="/estados-unidos" class="nav_link_sub nav-link-purple">estados unidos</a>
                                        </li>
                                        <li>
                                            <a href="/mexico" class="nav_link_sub nav-link-purple">méxico</a>
                                        </li>
										</ul>
									</li>
									<li class="col-md-3">
										<ul>
											
										<li>
                                            <a href="/sudamerica" class="nav_link_sub nav-link-purple">sudamérica</a>
                                        </li>
                                        <li>
                                            <a href="/centroamerica" class="nav_link_sub nav-link-purple">centroamérica</a>
                                        </li>
                                        <li>
                                            <a href="/pacifico" class="nav_link_sub nav-link-purple">pacífico</a>
                                        </li>
                                        <li>
                                            <a href="/medio-oriente" class="nav_link_sub nav-link-purple">medio oriente</a>
                                        </li>
										</ul>
									</li>
									<li class="col-md-3">
										<ul>

										<li>
                                            <a href="/asia" class="nav_link_sub nav-link-purple">asia</a>
                                        </li>
                                        <li>
                                            <a href="/africa" class="nav_link_sub nav-link-purple">africa</a>
                                        </li>
                                        <li>
                                            <a href="/eventos" class="nav_link_sub nav-link-purple">eventos</a>
                                        </li>
                                        <li>
                                            <a href="/cruceros" class="nav_link_sub nav-link-purple">cruceros</a>
                                        </li>
										
											
										</ul>
									</li>
									<li class="col-md-3">
										<ul>
											
										<li>	
                                            <a href="/juvi" class="nav_link_sub nav-link-purple">#juvi</a>
                                        </li>
                                        <li>
                                            <a href="/ofertas" class="nav_link_sub nav-link-purple">Mejores Ofertas</a>
                                        </li>
                                        <li>
                                            <a href="/exoticos" class="nav_link_sub nav-link-purple">exoticos</a>
                                        </li>
											
										</ul>
									</li>
								</div>
							</ul>
						</li>
						<li class="nav-item nav_item">
							<a class="nav-link nav_link" href="/#somos">quienes somos</a>
                        </li>
                        <li class="nav-item nav_item">
							<a class="nav-link nav_link" href="#contacto">contacto</a>
                        </li>
                      {/*  <li class="nav-item nav_item">
	<a class="btn-menu btn-back-azul" href="#">Tel. {user.phone}</a>
						</li>*/}
                        <li class="nav-item nav_item">
                            <a href="" class="nav-link nav_link">
                                tipo de cambio MXN {tc}
                            </a>
                        </li>
					</ul>
				</div>
			</div>
		</nav>
        
    </header> 
        </>
    )
}

export default Header
