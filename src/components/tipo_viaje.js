import React from 'react';
import Perfiles from './card';
import tipo_viaje_imagenes from './mocking/tipo_viaje_imagenes';


function tipo_viaje() {

    return (
        <div className="container p-5 my-5 border">
          <div className='row'>
            {
              tipo_viaje_imagenes.map(obj=>{
                return(
                  <div className='col-md-4'>
                    <center><Perfiles Name={obj.nombre} Corp={obj.cuerpo} Imagen={obj.imagen}></Perfiles></center>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
}

export default tipo_viaje;