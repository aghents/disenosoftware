import React from 'react';

import Tarjeta from './card_button';

import imagenes from './mocking/imagenes';


class lugares extends React.Component {
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
        </>
  
      );
  }
}

export default lugares;