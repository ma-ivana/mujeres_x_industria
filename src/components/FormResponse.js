import React from 'react';


const FormResponse = status => {
  
  return (
    status === "success"
    ? <p>Formulario enviado correctamente.</p>
    : <p>No se pudo enviar el formulario.</p>
  )
}

export default FormResponse;