
import React from 'react';
import Comments from "./comments/Comments";
import NavBar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Tarjeta from './components/card';
import News from './components/news';
import UncontrolledExample from './components/publicidad';
import About from './components/about';
import Clients from './components/clients';
import imagenes from './mocking/imagenes';
import Testimonial from "./Testimonial/Testimonial";


import { BrowserRouter, Route, Routes } from "react-router-dom"


class App extends React.Component {
    render(){
      return (
        <><div className='container-fluid'>
          <div className='row'>
            
            <NavBar Name='Empresa' First='Home' Second='Lugares' Third='Reservar' />
              <Routes>
                  <Route path="/" element={<About/>} exact />
                  <Route path="/about" element={<About/>} />
                  <Route path="/clients" element={<Clients/>} />
              </Routes>
        
            <Jumbotron Name='Empresa' Cuerpo='Eslogan'></Jumbotron>
          </div>

        </div><div className='container-fluid'>
            <div className='row'>
                {
                  imagenes.map(obj=>{
                    return(
                      <div className='col'>
                      <center><Tarjeta Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Tarjeta></center>
                      </div>
                    );
                  })
                }
            </div>

          <br></br>  
          </div><div className='container p-5 my-5'>
            <UncontrolledExample></UncontrolledExample>
          </div>
          
          <div className='container'>
            <Comments currentUserId="1" />
          </div>

          <div className='container p-5 my-5 border'>
            <h4><center>Blog</center></h4>
            <News></News>
          </div>
          
          </>
        
      );
    }
  }

export default App;
