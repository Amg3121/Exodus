/**
 * Component App.js
 * Developed by David Marin
 */
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainEuropa from './componentes/MainEuropa';
import MainCanada from './componentes/MainCanada';
import MainEstadosUnidos from './componentes/MainEstadosUnidos';
import MainSudamerica from './componentes/MainSudamerica';
import MainMexico from './componentes/MainMexico';
import MainCentroAmerica from './componentes/MainCentroAmerica';
import MainPacifico from './componentes/MainPacifico';
import MainMedioOriente from './componentes/MainMedioOriente';
import MainAsia from './componentes/MainAsia';
import MainAfrica from './componentes/MainAfrica';
import MainEventos from './componentes/MainEventos';
import MainCruceros from './componentes/MainCruceros';
import MainJuvi from './componentes/MainJuvi';
import Ofertas from './componentes/Ofertas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Main from './componentes/Main';
import Promociones from './componentes/Promociones';
import MainExoticos from './componentes/MainExoticos';
import MainCaribe from './componentes/MainCaribe';
function Detail() {
  const { detail, name } = useParams()
  return (
    <>
      <section className="bg-image-01 context-dark section-70 section-xl-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12 container-main-title">
              <h1 className="text-spacing-60 text-uppercase text-ubold2 p text-center"> {name}</h1>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </section>
      <section className="section-top-ten">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe className="iframe-detail" src={'https://www.megatravel.com.mx/tools/circuito.php?&txtColor=333333&aColor=333333&ahColor=002a8e&thBG=002a8e&thTxColor=fff&ff=9&viaje=' + detail} width="100%" height="1200" allowtransparency="true"> </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
function App() {
  const [datos, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://2020.exodus.mx/api/agency/712').then(res => {
      const datos = res.data;
      setUser(datos);
    });
  }, [])
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/detail/:detail/:name">
            <Navbar
              user={datos}
            />
            <Detail />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/ofertas">
            <Navbar
              user={datos}
            />
            <Ofertas />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/europa">
            <Navbar
              user={datos}
            />
            <MainEuropa />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/canada">
            <Navbar
              user={datos}
            />
            <MainCanada />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/estados-unidos">
            <Navbar
              user={datos}
            />
            <MainEstadosUnidos />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/mexico">
            <Navbar
              user={datos}
            />
            <MainMexico />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/sudamerica">
            <Navbar
              user={datos}
            />
            <MainSudamerica />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/centroamerica">
            <Navbar
              user={datos}
            />
            <MainCentroAmerica />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/pacifico">
            <Navbar
              user={datos}
            />
            <MainPacifico />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/medio-oriente">
            <Navbar
              user={datos}
            />
            <MainMedioOriente />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/asia">
            <Navbar
              user={datos}
            />
            <MainAsia />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/africa">
            <Navbar
              user={datos}
            />
            <MainAfrica />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/eventos">
            <Navbar
              user={datos}
            />
            <MainEventos />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/cruceros">
            <Navbar
              user={datos}
            />
            <MainCruceros />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/juvi">
            <Navbar
              user={datos}
            />
            <MainJuvi />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/grupos-fit">
            <Navbar
              user={datos}
            />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/luna-de-miel">
            <Navbar
              user={datos}
            />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/promociones">
            <Navbar
              user={datos}
            />
            <Promociones />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/exoticos">
            <Navbar
              user={datos}
            />
            <MainExoticos />
            <Footer
              user={datos}
            />
          </Route>
          <Route path="/caribe">
            <Navbar
              user={datos}
            />
            <MainCaribe />
            <Footer
              user={datos}
            />
          </Route>
          <Route exact path="/">
            <Navbar
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
