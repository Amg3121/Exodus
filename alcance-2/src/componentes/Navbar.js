/**
 * Component Navbar
 * Developed by David Marin
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom"

function Navbar({user}) {
    
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
            <img src={user.logo} alt="" className="logo-img" />
            </a>
            <button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><img src="https://exodus.b-cdn.net/exodus/home/menu/icon-2.svg" alt="" width="45px"/></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav_link under-yellow home" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-yellow somos" href="/#about">Quienes Somos</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link nav_link under-yellow dropdown-toggle destinos" data-toggle="dropdown" href="/" id="navbarDropdown" role="button">Destinos</a>
                        <ul className="dropdown-menu megamenu">
                            <div className="row">
                                <li className="col-md-3">
                                    <ul>
                                        
                                        <li>
                                            <a href="/europa" className="nav_link_sub nav-link-yellow"> europa</a>
                                        </li>
                                        <li>
                                            <a href="/medio-oriente" className="nav_link_sub nav-link-yellow">medio oriente</a>
                                        </li>
                                        <li>
                                            <a href="/asia" className="nav_link_sub nav-link-yellow">asia</a>
                                        </li>
                                        <li>
                                            <a href="/africa" className="nav_link_sub nav-link-yellow">africa</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                            <a href="/canada" className="nav_link_sub nav-link-yellow">canadá</a>
                                        </li>
                                        <li>
                                            <a href="/estados-unidos" className="nav_link_sub nav-link-yellow">estados unidos</a>
                                        </li>
                                        <li>
                                            <a href="/mexico" className="nav_link_sub nav-link-yellow">méxico</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                        <a href="/sudamerica" className="nav_link_sub nav-link-yellow">sudamérica</a>
                                        </li>
                                        <li>
                                            <a href="/centroamerica" className="nav_link_sub nav-link-yellow">centroamérica</a>
                                        </li>
                                        <li>
                                            <a href="/pacifico" className="nav_link_sub nav-link-yellow">pacífico</a>
                                        </li>
                                        <li>
                                            <a href="/caribe" className="nav_link_sub nav-link-yellow">caribe</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                            <a href="/cruceros" className="nav_link_sub nav-link-yellow">cruceros</a>
                                        </li>
                                        <li>
                                            <a href="/promociones" className="nav_link_sub nav-link-yellow">Mejores Ofertas</a>
                                        </li>
                                        <li>
                                            <a href="/eventos" className="nav_link_sub nav-link-yellow">eventos</a>
                                        </li>
                                    </ul>
                                </li>
                            
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-yellow contacto" href="#contact">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-yellow promociones" href="/ofertas">Ofertas y Promociones</a>
                    </li>
                    <li className="nav-item">
                     {tc == '' ? '' : <a className="nav-link nav_link under-yellow promociones"><i className="far fa-money-bill-alt"></i> MXN {tc}</a> }   
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
