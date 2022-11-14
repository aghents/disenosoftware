import React from 'react';

import Perfil from './card';

import imagenes from './mocking/imagenes';


function lugares() {

    return (
        <div className = "container p-5 my-5 border">
          <div className='row'>
            {
              imagenes.map(obj=>{
                return(
                  <div className='col'>
                    <center><Perfil Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Perfil></center>
                  </div>
                );
              })
            }
          </div>
        </div>
  
      );
}

export default lugares;