import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Header({ user }) {
  const [tc, setTC] = useState([]);

  useEffect(() => {
    axios.get("https://www.megatravel.com.mx/developers/tc/now").then((res) => {
      const tc = res.data;
      setTC(tc);
    });
  }, []);

  const [ open, setOpen ] = useState(false)

  return (
    <>
    
    <header>
        <div class="menu menu--brasil">
            
            <div class="menu__top">
                
                <div class="menu__logo">
                    <a href="/" class="menu__logo-link">
                        <img src={user.logo}class="menu__logo-image"/>
                    </a>
                </div>

                <div class="exchange-rate">

                    <ul class="exchange-rate__list">

                        <li class="exchange-rate__list-item">
                            <a href="" class="exchange-rate__link">
                                <span class="exchange-rate__span exchange-rate__span--home">
                                     <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/header/home.png" alt="" class="exchange-rate__image"/>
                                </span>     
                            </a>
                        </li>
                        <li class="exchange-rate__list-item">
                            <a href="" class="exchange-rate__link">
                                tipo de cambio mxn {tc}
                            </a>
                        </li>
                        <li class="exchange-rate__list-item">
                            <a href="" class="exchange-rate__link">
                                <span class="exchange-rate__span exchange-rate__span--search">
                                    
                                </span>
                            </a>
                        </li>
                    
                    </ul>
                </div>

            </div>

            <nav class="menu__nav">
                
                <li class="menu__nav-item nav-item--pink">
                    <a href="/promociones" class="menu__nav-link">
                        <span class="menu__span"> 
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/menu/ofertas-promociones.png" alt="" class="menu__image"/>
                        </span> ofertas y promociones </a>
                </li>
                <li class="menu__nav-item nav-item--orange">
                    <a  id="sub__menu" aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "menu__nav-link" : "menu__nav-link"}
      onClick={ () => setOpen(!open) }>
                        <span class="menu__span"> 
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/menu/destinos-viaje.png" alt="" class="menu__image"/>
                        </span> destinos de viaje </a>
                </li>
                <li class="menu__nav-item nav-item--yellow">
                    <a href="/#somos" class="menu__nav-link">
                        <span class="menu__span"> 
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/menu/quienes-somos.png" alt="" class="menu__image"/>
                        </span> quienes somos</a>
                </li>
                <li class="menu__nav-item nav-item--green">
                    <a href="#contacto" class="menu__nav-link">
                        <span class="menu__span"> 
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/menu/contacto.png" alt="" class="menu__image"/>
                        </span> contacto</a>
                </li>
            
            </nav>
        </div>

        <div class={ open ? "menu__responsive-container show" : "menu__responsive-container"}>
        <div class="menu__responsive">
            <div class="menu__responsive-colum">
                <ul class="menu__responsive-ul">
                    <li class="menu__responsive-li">
                        <a href="/europa" class="menu__responsive-a">
                            <span class="menu__responsive-span--europa"></span>europa
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/medio-oriente" class="menu__responsive-a">
                            <span class="menu__responsive-span--medio-oriente"></span> medio oriente
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/asia" class="menu__responsive-a">
                            <span class="menu__responsive-span--asia"></span> asia
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/africa" class="menu__responsive-a">
                            <span class="menu__responsive-span--africa"></span> africa
                        </a>
                    </li>
                    
                   {/*  <li class="menu__responsive-li">
                    <a href="/juvi" class="menu__responsive-a">
                        <span class="menu__responsive-span--juvi"></span> #juvi
                    </a>
                </li>
                */}
                </ul>
            </div>

            <div class="menu__responsive-colum">
                <ul class="menu__responsive-ul">
                    <li class="menu__responsive-li">
                        <a href="/canada" class="menu__responsive-a">
                            <span class="menu__responsive-span--canada"></span> canadá
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/estados-unidos" class="menu__responsive-a">
                            <span class="menu__responsive-span--estados-unidos"></span> estados unidos
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/mexico" class="menu__responsive-a">
                            <span class="menu__responsive-span--mexico"></span> méxico
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/centroamerica" class="menu__responsive-a">
                            <span class="menu__responsive-span--centroamerica"></span> centroamérica
                        </a>
                    </li>
                    <li class="menu__responsive-li">
                        <a href="/sudamerica" class="menu__responsive-a">
                            <span class="menu__responsive-span--sudamerica"></span> sudamérica
                        </a>
                    </li>
                </ul>
            </div>

            <div class="menu__responsive-colum">
                <ul class="menu__responsive-ul">
                        <li class="menu__responsive-li">
                            <a href="/cruceros" class="menu__responsive-a">
                                <span class="menu__responsive-span--cruceros"></span> cruceros
                            </a>
                        </li>
                        <li class="menu__responsive-li">
                        <a href="/caribe" class="menu__responsive-a">
                            <span class="menu__responsive-span--fits"></span> caribe
                        </a>
                        </li>
                        <li class="menu__responsive-li">
                            <a href="/pacifico" class="menu__responsive-a">
                                <span class="menu__responsive-span--pacifico"></span> pacífico
                            </a>
                        </li>
                        <li class="menu__responsive-li">
                            <a href="/eventos" class="menu__responsive-a">
                                <span class="menu__responsive-span--eventos"></span> eventos especiales
                            </a>
                        </li>
                        

                </ul>
            </div>
           
        </div>
    </div> 
   
    {/*menu responsive*/}
    <nav className="navbar navbar-dark bg-dark main menu__responsivo">
        <div className="container">
            <a className="navbar-brand" href="/">
            <img src={user.logo}  alt="" className="logo-img" />
            </a>
            <button className="navbar-toggler navbar-toggler-menu" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><i className="fas fa-bars" aria-hidden="true"></i></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                         <li className="menu__nav-item nav-item--pink">
                        <a className="nav-link nav_link menu__nav-link" href="/promociones">Ofertas y Promociones</a>
                    </li>
        
                    <li className="nav-item dropdown position-static menu__nav-item nav-item--orange">
                        <a className="nav-link nav_link  dropdown-toggle destinos menu__nav-link" data-toggle="dropdown" href="/" id="navbarDropdown" role="button">   <span class="menu__span">  
                        </span> destinos de viaje </a>
                        <ul className="dropdown-menu megamenu">
                            <div className="row">
                                <li className="col-md-3 menu__responsive-li">
                                    <ul>   
                                        <li class="menu__responsive-li">
                                            <a href="/europa" class="menu__responsive-a">
                                            <span class="menu__responsive-span--europa"></span>europa
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/medio-oriente" class="menu__responsive-a">
                                            <span class="menu__responsive-span--medio-oriente"></span> medio oriente
                                            </a>
                                        </li>        
                                        <li class="menu__responsive-li">
                                            <a href="/asia" class="menu__responsive-a">
                                            <span class="menu__responsive-span--asia"></span> asia
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/africa" class="menu__responsive-a">
                                            <span class="menu__responsive-span--africa"></span> africa
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/canada" class="menu__responsive-a">
                                            <span class="menu__responsive-span--canada"></span>canadá
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/estados-unidos" class="menu__responsive-a">
                                            <span class="menu__responsive-span--estados-unidos"></span> estados unidos
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/mexico" class="menu__responsive-a">
                                            <span class="menu__responsive-span--mexico"></span> méxico
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/sudamerica" class="menu__responsive-a">
                                            <span class="menu__responsive-span--sudamerica"></span> sudamérica
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/centroamerica" class="menu__responsive-a">
                                            <span class="menu__responsive-span--centroamerica"></span> centroamérica
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/pacifico" class="menu__responsive-a">
                                            <span class="menu__responsive-span--pacifico"></span> pacífico
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/caribe" class="menu__responsive-a">
                                            <span class="menu__responsive-span--fits"></span> caribe
                                            </a>
                                        </li>
                                        <li class="menu__responsive-li">
                                            <a href="/cruceros" class="menu__responsive-a">
                                            <span class="menu__responsive-span--cruceros"></span> cruceros
                                            </a>
                                        </li>   
                                        <li class="menu__responsive-li">
                                            <a href="/eventos" class="menu__responsive-a">
                                            <span class="menu__responsive-span--eventos"></span> eventos especiales
                                            </a>
                                        </li>
                                        {/*<li class="menu__responsive-li">
                                            <a href="/juvi" class="menu__responsive-a">
                                            <span class="menu__responsive-span--juvi"></span> #juvi
                                            </a>
                                            </li>*/} 
                                    </ul>
                                </li>              
                            </div>
                        </ul>
                    </li>
                    <li className="menu__nav-item nav-item--yellow">
                <span class="menu__span"> 
                <a className="menu__nav-link" href="/#somos">Quienes Somos</a>
                        </span> 
                        
                    </li>
                    <li className="menu__nav-item nav-item--green">
                        <a className="nav-link nav_link menu__nav-link" href="#contacto">Contacto</a>
                    </li>
                   
                    <li class="exchange-rate__list-item">
                            <a href="" class="exchange-rate__link">
                                tipo de cambio mxn {tc}
                            </a>
                        </li>
                    
                </ul>
            </div>
        </div>
        </nav>
   
    </header>
    </>
  );
}

export default Header;
