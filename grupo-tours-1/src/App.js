import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Main from './componentes/Main';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
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
import Promociones from './componentes/Promociones';
import MainExoticos from './componentes/MainExoticos';
import MainCaribe from './componentes/MainCaribe';
function Detail() {
  const { detail, name } = useParams()
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center title-section  mb-4 "> {name}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-top-ten">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe className="iframe-detail" src={'https://www.megatravel.com.mx/tools/circuito.php?&txtColor=343a40&aColor=343a40&ahColor=e87234&thBG=e87234&thTxColor=fff&ff=9&viaje=' + detail} width="100%" height="1200" allowtransparency="true"> </iframe>
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
    axios.get('https://2020.exodus.mx/api/agency/38').then(res => {
      const datos = res.data;
      setUser(datos);
    });
  }, [])
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
            <MainEuropa />
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
          <Route path="/caribe">
            <Header
              user={datos}
            />
            <MainCaribe />
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
