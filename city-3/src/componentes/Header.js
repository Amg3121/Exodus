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
            <img src={user.logo}  alt="" className="logo-img" />
            </a>
            <button className="navbar-toggler navbar-toggler-menu" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><i className="fas fa-bars" aria-hidden="true"></i></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav_link  nav-link-red" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link  nav-link-red" href="/#about">Quienes Somos</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link nav_link  dropdown-toggle destinos nav-link-red" data-toggle="dropdown" href="/" id="navbarDropdown" role="button">Destinos</a>
                        <ul className="dropdown-menu megamenu">
                            <div className="row">
                                <li className="col-md-3">
                                    <ul>
                                        
                                        <li>
                                            <a href="/europa" className="nav_link_sub nav-link-red">viajes a europa</a>
                                        </li>
                                        <li>
                                            <a href="/medio-oriente" className="nav_link_sub nav-link-red">medio oriente</a>
                                        </li>
                                        <li>
                                            <a href="/asia" className="nav_link_sub nav-link-red">asia</a>
                                        </li>
                                        <li>
                                            <a href="/africa" className="nav_link_sub nav-link-red">africa</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                            <a href="/canada" className="nav_link_sub nav-link-red">canadá</a>
                                        </li>
                                        <li>
                                            <a href="/estados-unidos" className="nav_link_sub nav-link-red">estados unidos</a>
                                        </li>
                                        <li>
                                            <a href="/mexico" className="nav_link_sub nav-link-red">méxico</a>
                                        </li>
                                       
                                       
                                        
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                            <a href="/sudamerica" className="nav_link_sub nav-link-red">sudamérica</a>
                                        </li>
                                        <li>
                                            <a href="/centroamerica" className="nav_link_sub nav-link-red">centroamérica</a>
                                        </li>
                                        <li>
                                            <a href="/pacifico" className="nav_link_sub nav-link-red">pacífico</a>
                                        </li>
                                        <li>
                                            <a href="/caribe" className="nav_link_sub nav-link-red">caribe</a>
                                        </li>
                                       
                                        
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                       {/*  <li>
                                            <a href="/juvi" className="nav_link_sub nav-link-red">#juvi</a>
                                        </li>*/}
                                        <li>
                                            <a href="/eventos" className="nav_link_sub nav-link-red">eventos</a>
                                        </li>
                                        <li>
                                            <a href="/cruceros" className="nav_link_sub nav-link-red">cruceros</a>
                                        </li>
                                        <li>
                                            <a href="/promociones" className="nav_link_sub nav-link-red">Mejores Ofertas</a>
                                        </li>
                                    </ul>
                                </li>
                            
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-red" href="#contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-red" href="/ofertas">Ofertas y Promociones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link nav-link-red" href="/"><i className="far fa-money-bill-alt" aria-hidden="true"></i> MXN {tc}</a>
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
