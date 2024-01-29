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
            <Link className="navbar-brand" to="/">
            <img src={user.logo} alt="" className="logo-img" />
            </Link>
            <button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><img src="https://exodus.b-cdn.net/exodus/home/menu/icon-2.svg" alt="" width="45px"/></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link nav_link under-blue home" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-blue somos" href="/#about">Quienes Somos</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link nav_link under-blue dropdown-toggle destinos" data-toggle="dropdown" href="/" id="navbarDropdown" role="button">Destinos</a>
                        <ul className="dropdown-menu megamenu">
                            <div className="row">
                                <li className="col-md-3">
                                    <ul>
                                        
                                        <li>
                                            <Link to="/europa" className="nav_link_sub nav-link-blue">viajes a europa</Link>
                                        </li>
                                        <li>
                                            <Link to="/canada" className="nav_link_sub nav-link-blue">canadá</Link>
                                        </li>
                                        <li>
                                            <Link to="/estados-unidos" className="nav_link_sub nav-link-blue">estados unidos</Link>
                                        </li>
                                        <li>
                                            <Link to="/mexico" className="nav_link_sub nav-link-blue">méxico</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        <li>
                                        <Link to="/sudamerica" className="nav_link_sub nav-link-blue">sudamérica</Link>
                                        </li>
                                        <li>
                                            <Link to="/centroamerica" className="nav_link_sub nav-link-blue">centroamérica</Link>
                                        </li>
                                        <li>
                                            <Link to="/pacifico" className="nav_link_sub nav-link-blue">pacífico</Link>
                                        </li>
                                        <li>
                                            <Link to="/medio-oriente" className="nav_link_sub nav-link-blue">medio oriente</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                    
                                    <li>
                                            <Link to="/asia" className="nav_link_sub nav-link-blue">asia</Link>
                                        </li>
                                        <li>
                                            <Link to="/africa" className="nav_link_sub nav-link-blue">africa</Link>
                                        </li>
                                        <li>
                                            <Link to="/eventos" className="nav_link_sub nav-link-blue">eventos</Link>
                                        </li>
                                        <li>
                                            <Link to="/cruceros" className="nav_link_sub nav-link-blue">cruceros</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="col-md-3">
                                    <ul>
                                        
                                    <li>
                                            <Link to="/juvi" className="nav_link_sub nav-link-blue">#juvi</Link>
                                        </li>
                                        <li>
                                            <Link to="/promociones" className="nav_link_sub nav-link-blue">Mejores Ofertas</Link>
                                        </li>
                                        <li>
                                            <Link to="/exoticos" className="nav_link_sub nav-link-blue">exoticos</Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                            
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-blue contacto" href="#contact">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_link under-blue promociones" href="/ofertas">Ofertas y Promociones</a>
                    </li>
                    <li className="nav-item">
                     {tc == '' ? '' : <a className="nav-link nav_link under-blue promociones"><i className="far fa-money-bill-alt"></i> MXN {tc}</a> }   
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
