import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Header({ user }) {
  const [tc, setTC] = useState([]);

  useEffect(() => {
    axios.get("https://www.megatravel.com.mx/developers/tc/now").then((res) => {
      const tc = res.data;
      setTC(tc);
    });
  }, []);


  return (
    <>
    
    <header>
        <div class="main__menu container">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light nav__template padding__rem">
           {/**  <a class="navbar-brand menu__brand blue_logo" href="/">
              <img src={user.logo} alt={user.name_agency} class="img-logo" />
              </a>*/}
              <a href="/">
              <img src={user.logo} alt={user.name_agency} class="img-logo" />
              </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link link__menu" href="/">Inicio <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link link__menu dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Destinos
                  </a>
                  <div class="dropdown-menu dropdown-multicol" aria-labelledby="navbarDropdown">
                      <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                    <a class="dropdown-item link__sub" href="/europa">europa</a>
                    <a class="dropdown-item link__sub" href="/canada">canadá</a>
                    <a class="dropdown-item link__sub" href="/estados-unidos">estados unidos</a>
                    <a class="dropdown-item link__sub" href="/mexico">méxico</a>
                    <a class="dropdown-item link__sub" href="/sudamerica">sudamérica</a>
                    <a class="dropdown-item link__sub" href="/centroamerica">centroamérica</a>
                    <a class="dropdown-item link__sub" href="/pacifico">pacífico</a>
                    
                </div>
                <div class="col-md-6">
                    <a class="dropdown-item link__sub" href="/medio-oriente">medio oriente</a>
                    <a class="dropdown-item link__sub" href="/asia">asia</a>
                    <a class="dropdown-item link__sub" href="/africa">africa</a>
                    <a class="dropdown-item link__sub" href="/eventos">eventos</a>
                    <a class="dropdown-item link__sub" href="/cruceros">cruceros</a>
                    <a class="dropdown-item link__sub" href="/caribe">caribe</a>
                    

                </div>
                </div>
            </div>
                    
                  </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link link__menu" href="/promociones">Ofertas y Promociones</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link link__menu" href="/#contacto">Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link__menu" href="https://venaviajarconmigo.com/" target="_blank">Ven a Viajar Conmigo</a>
                </li>
              
                <li class="nav-item">
                    <span class="navbar-text link__menu">
                        T.C. {tc} MXN
                    </span>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
        
    </header>
    
    </>
  );
}

export default Header;
