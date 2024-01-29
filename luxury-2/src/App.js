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
  return (
      <>  
      <section className="experiencia">
            <h1 className="text-center experiencia__h3">{name}</h1>
            <br/>
        <br/>
        </section>
        
        <br/>
        <br/>

      <br/>
    <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
          <iframe className="iframe-detail" title="detail" src={'https://www.megatravel.com.mx/tools/circuito.php?&txtColor=000&aColor=000&ahColor=5a7770&thBG=5a7770&thTxColor=fff&ff=7&viaje='+detail} width="100%" height="1200"  allowtransparency="true"> </iframe>
          </div> 
            </div> 
        </div>   
        </section> 
        
      </>
  )
}


function App() {

  /** Conexion API */

  const [datos, setUser] = useState([]);
    
  useEffect(() => {
  axios.get('https://2020.exodus.mx/api/agency/618').then(res => {
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

          <Route path="/caribe">
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
