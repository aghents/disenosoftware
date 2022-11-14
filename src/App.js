import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tipo_viaje from './components/tipo_viaje';
import Lugar from './components/lugares';
import Nosotros from './components/about';
import ContactForm from './components/contact_form';

// Routes es igual a Switch component en los demás tutoriales

class App extends React.Component {
    render(){
      return (
        <>
            <Router>
              <div className='App'>
                <NavBar Name='Uruchkech' First='Home' Second='Lugares' Third='Nosotros' Fourth='Tipo de Viaje'/>
                <div className='content'>               
                  <div className='container-fluid'>
                    <Switch>
                      <Route exact path="/home">
                        <Home />
                      </Route>

                      <Route path = "/Lugares">
                        <Lugar />
                      </Route>

                      <Route path="/about">
                        <Nosotros />
                      </Route>

                      <Route path = "/Tipo_de_Viajes">
                        <Tipo_viaje />
                      </Route>

                    </Switch>
                  </div>
                </div>
                <ContactForm></ContactForm>
                
                <Footer />
        
              </div>
            </Router>

          </>
        
      );
    }
  }

export default App;
