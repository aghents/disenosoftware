import React from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './components/about';
// Routes es igual a Switch component en los demás tutoriales

class App extends React.Component {
    render(){
      return (
        <>
            <Router>
              <div className='App'>
                <NavBar Name='Empresa' First='Home' Second='Lugares' Third='Reservar' />
                <div className='content'>               
                  <div className='container-fluid'>
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>

                      <Route path="/about">
                        <AboutUs />
                      </Route>

                    </Switch>
                  </div>
                </div>
                
                <Footer />
        
              </div>
            </Router>

          </>
        
      );
    }
  }

export default App;
