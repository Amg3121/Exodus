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
            <header>
		
        <nav className="navbar navbar-expand-lg navbar-light main fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">
            <img src={user.logo}  alt="" className="logo-img"/>
            </a>
            <button className="navbar-toggler navbar-toggler-menu" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><i className="fas fa-bars" aria-hidden="true"></i></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav_link  nav-link-orange" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link  nav-link-orange" href="/#about">Quienes Somos</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link nav_link  dropdown-toggle destinos nav-link-orange" data-toggle="dropdown" href="/" id="navbarDropdown" role="button">Destinos</a>
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
                                            <a href="/africa" className="nav_link_sub nav-link-orange">áfrica</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                            <a href="/canada" className="nav_link_sub nav-link-orange">canadá</a>
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
                                            <a href="/eventos" className="nav_link_sub nav-link-orange">eventos</a>
                                        </li>
                                        <li>
                                            <a href="/cruceros" className="nav_link_sub nav-link-orange">cruceros</a>
                                        </li>
                                        <li>
                                            <a href="/promociones" className="nav_link_sub nav-link-orange">Mejores Ofertas</a>
                                        </li>
                                    </ul>
                                </li>
                            
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-orange" href="/#contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-orange" href="/ofertas">Ofertas y Promociones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-orange" href="/"><i className="far fa-money-bill-alt" aria-hidden="true"></i> MXN {tc}</a>
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
