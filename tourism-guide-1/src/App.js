import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import MainEuropa from './components/MainEuropa';
import MainCanada from './components/MainCanada';
import MainEstadosUnidos from './components/MainEstadosUnidos';
import MainSudamerica from './components/MainSudamerica';
import MainMexico from './components/MainMexico';
import MainCentroAmerica from './components/MainCentroAmerica';
import MainPacifico from './components/MainPacifico';
import MainMedioOriente from './components/MainMedioOriente';
import MainAsia from './components/MainAsia';
import MainAfrica from './components/MainAfrica';
import MainEventos from './components/MainEventos';
import MainCruceros from './components/MainCruceros';
import MainJuvi from './components/MainJuvi';
import Ofertas from './components/Ofertas';
import Promociones from './components/Promociones';
import MainExoticos from './components/MainExoticos';


function Detail() {
  const { detail, name }  = useParams()
  return (
      <>  
      <section className="back-head">
			<div className="container">
				<div className="row">
					<div className="col-md-12 container-main-title">
						<h1 className="text-center main-title mb-1"> {name}</h1>
					</div>
				</div>
			</div>
			<div className="filter"></div>
		</section>
    <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
          <iframe className="iframe-detail" src={'https://www.megatravel.com.mx/tools/circuito.php?&txtColor=333333&aColor=333333&ahColor=3dbc77&thBG=3dbc77&thTxColor=fff&ff=9&viaje='+detail} width="100%" height="1200"  allowtransparency="true"> </iframe>
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
    axios.get('https://2020.exodus.mx/api/agency/279').then(res => {
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
