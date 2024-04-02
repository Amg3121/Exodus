import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom"
function Header({ user }) {
    const [tc, setTC] = useState([]);
    useEffect(() => {
        axios.get('https://www.megatravel.com.mx/developers/tc/now').then(res => {
            const tc = res.data;
            setTC(tc);
        });
    }, [])
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light main fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={user.logo} alt="agencia de viajes" />
                        </a>
                        <button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item nav_item">
                                    <a className="nav-link nav_link" href="/promociones">Ofertas de viaje</a>
                                </li>
                                <li className="nav-item nav_item dropdown position-static">
                                    <a className="nav-link dropdown-toggle nav_link" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">destinos</a>
                                    <ul className="dropdown-menu megamenu">
                                        <div className="row">
                                            <li className="col-md-3">
                                                <ul>
                                                    <li>
                                                        <a href="/europa" className="nav_link_sub nav-link-purple">europa</a>
                                                    </li>
                                                    <li>
                                                        <a href="/medio-oriente" className="nav_link_sub nav-link-purple">medio oriente</a>
                                                    </li>
                                                    <li>
                                                        <a href="/asia" className="nav_link_sub nav-link-purple">asia</a>
                                                    </li>
                                                    <li>
                                                        <a href="/africa" className="nav_link_sub nav-link-purple">africa</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li>
                                                        <a href="/canada" className="nav_link_sub nav-link-purple">canadá</a>
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
                                                        <a href="/caribe" className="nav_link_sub nav-link-purple">caribe</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li>
                                                        <a href="/eventos" className="nav_link_sub nav-link-purple">eventos</a>
                                                    </li>
                                                    <li>
                                                        <a href="/cruceros" className="nav_link_sub nav-link-purple">cruceros</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ofertas" className="nav_link_sub nav-link-purple">Mejores Ofertas</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item nav_item">
                                    <a className="nav-link nav_link" href="/#somos">quienes somos</a>
                                </li>
                                <li className="nav-item nav_item">
                                    <a className="nav-link nav_link" href="#contacto">contacto</a>
                                </li>
                                {/*  <li className="nav-item nav_item">
                                        <a className="btn-menu btn-back-azul" href="#">Tel. {user.phone}</a>
                                    </li>*/}
                                <li class="nav-item nav_item">
                                    <a href="" class="nav-link nav_link">
                                        TC MXN {tc}
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
