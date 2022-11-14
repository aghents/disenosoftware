import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagenes from './mocking/imagenes';
import item from './publicidad.css';

class UncontrolledExample extends React.Component {
  render(){
    return (
      <div className='item'>
        <Carousel>
          {
            imagenes.map(obj=>{
              return(
                <Carousel.Item>
                  <div className='col'>
                    <img className="d-block w-100" 
                      src={obj.imagen}
                      alt={obj.slide}
                    />
                  </div>
                  <Carousel.Caption>
                    <h3>{obj.nombre}</h3>
                    <p>{obj.cuerpo}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                );
              })
          }
        </Carousel>
      </div>
    );
  }
}

export default UncontrolledExample;