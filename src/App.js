import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Formulario from "./components/form";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nosotros from './components/about';
import ContactForm from './components/contact_form';

// Routes es igual a Switch component en los demás tutoriales

class App extends React.Component {
    render(){
      return (
        <>
            <Router>
              <div className='App'>
                <NavBar Name='Uruchkech' First='Home' Second='Lugares' Third='Nosotros' Fourth='Reservar'/>
                <div className='content'>               
                  <div className='container-fluid'>
                    <Switch>
                      <Route exact path="/home">
                        <Home />
                      </Route>

                      <Route path="/about">
                        <Nosotros />
                      </Route>
                      <Route path='/form'>
                        <Formulario />
                      </Route>

                    </Switch>
                  </div>
                </div>
                <ContactForm></ContactForm>
                
                <Footer />
        
              </div>
            </div>

          </div>
        </Router>

      </>

    );
  }
}

export default App;
