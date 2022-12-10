import React from 'react';

import Comments from "../comments/Comments";
import Tarjeta from './card_button';
import News from '../components/news';
import UncontrolledExample from '../components/publicidad';

import imagenes from './mocking/imagenes';
import Testimonial from '../Testimonial/Testimonial';


class Home extends React.Component {
  render(){
    return (
        <div className='container-fluid'>
          <div className='row' style={{padding:'10px', margin:'10px'}}>
            {
              imagenes.map(obj=>{
                return(
                  <div className='col-4'>
                    <center><Tarjeta Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Tarjeta></center>
                  </div>
                  );
                })
              }
          </div>
              
          <div className='row justify-content-center'style={{margin:'50px'}}>
            <div className='col align-self-center' >
              <UncontrolledExample></UncontrolledExample>
            </div>
          </div>

          <div>
            <header className = "row App-header">
            <h1>Testimonios</h1>
            <Testimonial />
            </header>
          </div>

          <div className='row'>
              <Comments currentUserId="1" />
          </div>
          
          <div className='row p-5 my-5 border'>
            <h4><center>Blog</center></h4>
            <News></News>
          </div>
        </div>

        
        
      );
  }
}

export default Home;