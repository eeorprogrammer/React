import React from 'react'
import '../hojas-de-estilo/BotonClear.css'

function BotonClear(props) {
  return (
    <div className='boton-clear' onClick= {props.manejarClear}>
      {props.child}
    </div>
    
  );
}
export default BotonClear;

