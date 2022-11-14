import React from 'react';
import Tarjeta from './card_button';
import tipo_viaje_imagenes from './mocking/tipo_viaje_imagenes';


class tipo_viaje extends React.Component {
  render(){
    return (
        <>
        <div className='row'>
          {
            tipo_viaje_imagenes.map(obj=>{
              return(
                <div className='col'>
                  <center><Tarjeta Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Tarjeta></center>
                </div>
              );
            })
          }
        </div>
        </>
  
      );
  }
}

export default tipo_viaje;