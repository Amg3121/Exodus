/** Imports */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main';
import Header from './Componentes/Header';
import MainEuropa from './Componentes/MainEuropa';
import MainCanada from './Componentes/MainCanada';
import MainEstadosUnidos from './Componentes/MainEstadosUnidos';
import MainSudamerica from './Componentes/MainSudamerica';
import MainMexico from './Componentes/MainMexico';
import MainCentroAmerica from './Componentes/MainCentroAmerica';
import MainPacifico from './Componentes/MainPacifico';
import MainMedioOriente from './Componentes/MainMedioOriente';
import MainAsia from './Componentes/MainAsia';
import MainAfrica from './Componentes/MainAfrica';
import MainEventos from './Componentes/MainEventos';
import MainCruceros from './Componentes/MainCruceros';
import MainJuvi from './Componentes/MainJuvi';
import Ofertas from './Componentes/Ofertas';
import Promociones from './Componentes/Promociones';
import MainExoticos from './Componentes/MainExoticos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


function Detail() {
  const { detail, name }  = useParams()
  const [ open, setOpen ] = useState(false)
	const [ open2, setOpen2 ] = useState(false)
  return (
      <>  
      <div className="main">
    <section>
    <nav className={ open ? "sidebar show" : "sidebar"}>
        <div className="aside__icon__close">
        <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "aside__icon-a1" : "aside__icon-a1"}
      onClick={ () => setOpen(!open) }>
     <i class="fas fa-window-close" aria-hidden="true"></i>
       </a>
        </div>
        
        <div className="aside__icon">
        <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "aside__icon-a1" : "aside__icon-a1"}
      onClick={ () => setOpen(!open) }>
       </a>
       
        </div>
      
        <ul>
          <li >
            <a href="/promociones">
              ofertas y <br /> promociones
            </a>
          </li>
          <li>
            <a  aria-expanded={open2 === true ? "true" : "false"}
      className={open2 === true ? "feat-btn" : "feat-btn"}
      onClick={ () => setOpen2(!open2) }>
              destinos <br /> de viaje
              <span className="fas fa-chevron-circle-down first"></span>
            </a>
            <ul className={ open2 ? "feat-show show" : "feat-show"}>
              <li>
                <a href="/europa">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/viajes-a-europa.jpg" alt="" />
                  <span className="span__submenu">viajes a europa</span>
                </a>
              </li>
              <li>
                <a href="/canada">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/canada.jpg" alt="" />
                  <span className="span__submenu ">canadá</span>
                </a>
              </li>
              <li>
                <a href="/estados-unidos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/estados-unidos.jpg" alt="" />
                  <span className="span__submenu">estados unidos</span>
                </a>
              </li>
              <li>
                <a href="/mexico">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/mexico.jpg" alt="" />
                  <span className="span__submenu ">méxico</span>
                </a>
              </li>
              <li>
                <a href="/sudamerica">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/sudamerica.jpg" alt="" />
                  <span className="span__submenu">sudamérica</span>
                </a>
              </li>
              <li>
                <a href="/centroamerica">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/centroamerica.jpg" alt="" />
                  <span className="span__submenu font">centroamérica</span>
                </a>
              </li>
              <li>
                <a href="/pacifico">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/pacifico.jpg" alt="" />
                  <span className="span__submenu">pacífico</span>
                </a>
              </li>
              <li>
                <a href="/medio-oriente">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/medio-oriente.jpg" alt="" />
                  <span className="span__submenu">medio oriente</span>
                </a>
              </li>
              <li>
                <a href="/asia">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/asia.jpg" alt="" />
                  <span className="span__submenu ">asia</span>
                </a>
              </li>
              <li>
                <a href="/africa">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/africa.jpg" alt="" />
                  <span className="span__submenu">africa</span>
                </a>
              </li>
              <li>
                <a href="/eventos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/eventos.jpg" alt="" />
                  <span className="span__submenu ">eventos</span>
                </a>
              </li>
              <li>
                <a href="/cruceros">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/cruceros.jpg" alt="" />
                  <span className="span__submenu">cruceros</span>
                </a>
              </li>

              <li>
                <a href="/juvi">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/juvi.jpg" alt="" />
                  <span className="span__submenu">#juvi</span>
                </a>
              </li>

              <li>
                <a href="/exoticos">
                  <img src="https://exodus.b-cdn.net/exodus/frutas/frutos-rojos/img/menu/grupos-y-fits.jpg" alt="" />
                  <span className="span__submenu">Exoticos</span>
                </a>
              </li>



              
            </ul>
          </li>

          <li>
         
            <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "feat-showsomos showsomos" : "feat-showsomos"}
      onClick={ () => setOpen(!open) } href="/#somos">quienes somos</a>
          </li>
          <li>
         
         <a aria-expanded={open === true ? "true" : "false"}
   className={open === true ? "feat-show1 show1" : "feat-show1"}
   onClick={ () => setOpen(!open) } href="/#somosagencia">quienes somos</a>
       </li>    
          
          <li>
            <a aria-expanded={open === true ? "true" : "false"}
      className={open === true ? "feat-show show" : "feat-show"}
      onClick={ () => setOpen(!open) } href="#contacto">contacto</a>
          </li>
      
        </ul>
        
      </nav>
    <div className="aside__icon">
<a aria-expanded={open === true ? "true" : "false"}
className={open === true ? "aside__icon-a" : "aside__icon-a"}
onClick={ () => setOpen(!open) }>
<i class="fa fa-bars" aria-hidden="true"></i>
</a>
</div>
    <h1 className="main__span ">
                   {name}
            </h1>
    </section>
    <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
          <iframe className="iframe-detail" title="detail" src={'https://www.megatravel.com.mx/tools/circuito.php?&txtColor=212529&aColor=212529&ahColor=80b92e&thBG=80b92e&thTxColor=fff&ff=7&viaje='+detail} width="100%" height="4700"  allowtransparency="true"> </iframe>
          </div> 
            </div> 
        </div>   
        </section> 
        </div>     
      </>
  )
}


function App() {

  /** Conexion API */

  const [datos, setUser] = useState([]);
    
  useEffect(() => {
  axios.get('https://2020.exodus.mx/api/agency/294').then(res => {
  const datos = res.data;
  
  setUser(datos);    
  });
  }, [])

  /** Devuelve Template */
  return (
    <Router >
    <div className="App">
      
        <Switch>

        <Route path="/detail/:detail/:name">
              <Header 
                  user={datos}
              />
              <Detail />
              <Footer 
                user={datos} 
              />
        </Route>

        <Route path="/ofertas">
          <Header 
            user={datos}
          />
          
          <Ofertas />
          <Footer 
            user={datos} 
          />
        </Route>
          
          <Route path="/europa">
          <Header 
            user={datos}
          />
          <MainEuropa user={datos} />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/canada">
          <Header 
            user={datos}
          />
          <MainCanada />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/estados-unidos">
          <Header 
            user={datos}
          />
          <MainEstadosUnidos />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/mexico">
          <Header 
            user={datos}
          />
          <MainMexico />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/sudamerica">
          <Header 
            user={datos}
          />
          <MainSudamerica />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/centroamerica">
          <Header 
            user={datos}
          />
          <MainCentroAmerica />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/pacifico">
          <Header 
            user={datos}
          />
          <MainPacifico />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/medio-oriente">
          <Header 
            user={datos}
          />
          <MainMedioOriente />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/asia">
          <Header 
            user={datos}
          />
          <MainAsia />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/africa">
          <Header 
            user={datos}
          />
          <MainAfrica />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/eventos">
          <Header 
            user={datos}
          />
          <MainEventos />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/cruceros">
          <Header 
            user={datos}
          />
          <MainCruceros />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/juvi">
          <Header 
            user={datos}
          />
          <MainJuvi />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/grupos-fit">
          <Header 
            user={datos}
          />
          <Footer 
            user={datos} 
          />
          </Route>
          <Route path="/luna-de-miel">
          <Header 
            user={datos}
          />
          <Footer 
            user={datos} 
          />
          </Route>

          <Route path="/promociones">
          <Header 
            user={datos}
          />
          <Promociones />
          <Footer 
            user={datos} 
          />
          </Route>

          <Route path="/exoticos">
          <Header 
            user={datos}
          />
          <MainExoticos />
          <Footer 
            user={datos} 
          />
          </Route>

          <Route exact path="/">
          <Header 
            user={datos}
          />
          <Main 
            user={datos} 
          />
          <Footer 
            user={datos} 
          />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
