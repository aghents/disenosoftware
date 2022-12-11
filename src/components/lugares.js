import React from 'react';

import Tarjeta from './card_button';

import imagenes from './mocking/imagenes';


function lugares() {

    return (
        <div className = "container p-5 my-5 border">
          <div className='row'>
            <br></br>
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
        </div>
  
      );
}

export default lugares;