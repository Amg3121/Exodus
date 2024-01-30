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
        <div className="container-fluid superior ">
            <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
               <div className="logo">
               <a  href="/">
              <img src={user.logo} alt={user.name_agency} class="img-fluid" />
              </a>
                  
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
               
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                               <div className="container">
                                   <div className="row">
                                       <div className="col-xs-3">
                                           <i className="fas fa-phone negro align-self-center mr-3"></i>
                                       </div>
                                       <div className="col-xs-9">
                                           <h5 className="mt-0 h5__menu">Call:</h5>
                                           <a href={'tel:'+user.phone} className="link__top__menu">{user.phone}</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-7 col-md-6 col-sm-6 col-6 ">
                               <div className="container">
                                   <div className="row">
                                       <div className="col-xs-3">
                                           <i className="far fa-envelope negro align-self-center mr-3"></i>
                                       </div>
                                       <div className="col-xs-9">
                                           <h5 className="mt-0 h5__menu">Email:</h5>
                                           <a href={'mailto:'+user.agency_mail} className="link__top__menu">{user.agency_mail}</a> 
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                  
               
            </div>
            
            <div className="col-lg-3 col-md-12 col-sm-12">
               <div className="contactame__menu">
                   <a href="/#contacto" className="contactame__menu-a back__negro border-negro">Contáctame</a>
               </div>
            </div>
        </div>   
       </div>
        <div className="container__nav back__footer_negro">
         <div className="container-fluid">
         <nav className="nav__menu nav nav-pills nav-fill navbar navbar-expand-lg navbar-light">
           <button className="navbar-toggler toggler__blue" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               
               <i className="fas fa-bars"></i>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
               <li className="nav-item">
           <a className=" nav-link nav__link negrohovermenu line-menu" href="/">Inicio</a>
       </li>
       <li className="nav-item">
           <a className=" nav-link nav__link negrohovermenu" href="/#somos">nosotros</a>
           
   </li>
   <li className="nav-item">
           <a className=" nav-link nav__link negrohovermenu" href="/promociones">promociones</a>
       </li>
       <li className="dropdown nav-item">
           <a className=" nav-link nav__link negrohovermenu dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               destinos
               
           </a>
           <div className="dropdown-menu dropdown-multicol" aria-labelledby="navbarDropdown">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-md-6 col-sm-12">
                          
                          <a class="dropdown-item link__sub negro" href="/europa">europa</a>
                    <a class="dropdown-item link__sub negro" href="/canada">canadá</a>
                    <a class="dropdown-item link__sub negro" href="/estados-unidos">estados unidos</a>
                    <a class="dropdown-item link__sub negro" href="/mexico">méxico</a>
                    <a class="dropdown-item link__sub negro" href="/sudamerica">sudamérica</a>
                    <a class="dropdown-item link__sub negro" href="/centroamerica">centroamérica</a>
                   
                      </div>
                      <div className="col-md-6 col-sm-12">
                          
                          <a class="dropdown-item link__sub negro" href="/medio-oriente">medio oriente</a>
                            <a class="dropdown-item link__sub negro" href="/asia">asia</a>
                            <a class="dropdown-item link__sub negro" href="/africa">africa</a>
                            <a class="dropdown-item link__sub negro" href="/eventos">eventos</a>
                            {/* <a class="dropdown-item link__sub negro" href="/juvi">#juvi</a>*/}
                            <a class="dropdown-item link__sub negro" href="/cruceros">cruceros</a>
                            <a class="dropdown-item link__sub negro" href="/pacifico">pacífico</a>
                           {/* <a class="dropdown-item link__sub negro" href="/exoticos">exoticos</a>*/}
                      </div>
               </div>
             </div>
             </div>   
       </li>
      <li className="nav-item">
           <a className=" nav-link nav__link negrohovermenu" href="/#contacto">contacto</a>
       </li>
       <li className="nav-item">
           <a className=" nav-link nav__link negrohovermenu" href="#">T.C.{tc} MXN</a>
        </li>
           </div>
         </nav>
         </div>
       </div>
   
   
   
       </header>
    
    </>
  );
}

export default Header;
