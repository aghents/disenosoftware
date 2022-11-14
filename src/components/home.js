import React from 'react';

import Comments from "../comments/Comments";
import Tarjeta from './card_button';
import News from '../components/news';
import UncontrolledExample from '../components/publicidad';
import imagenes from './mocking/imagenes';

class Home extends React.Component {
  render(){
    return (
        <>
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
        <div className='container'>
          <UncontrolledExample></UncontrolledExample>
        </div>
        <br></br>


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

export default Home;