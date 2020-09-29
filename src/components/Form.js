import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../styles/globalCss';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonSubmit from './ButtonSubmit';


const FormContainer = styled.form`
  width: 580px;
  height: 400px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    height: 500px;
    
        
  }
`
const Fields = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  
    input {
      width: 100%;
      height: auto;
      border: none;
      box-sizing: border-box;
      padding: 5px;
      border-bottom: 1px solid ${colors.gris_oscuro};
      font-family: ${fonts.nav};
      font-size: 14px;
        :focus {
          border: none;
          outline: none;
          border-bottom: 3px solid ${colors.gris_mas_claro};
        } 
            
    }

  @media all and (max-width: 768px) {
    input {
      width: 60%;
    }
  }


`

const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  box-sizing: border-box;
  padding: 5px;
  border-bottom: 1px solid ${colors.borravino};
  font-family: ${fonts.nav};
  font-size: 14px;
      :focus {
      border: none;
      outline: none;
      border-bottom: 3px solid ${colors.gris_mas_claro};
    } 
`

toast.configure();

const StyledToastSuccess = () => {
  return (
    <div style={{
      backgroundColor: `${colors.borravino}`,
      color: `${colors.blanco}`,
      fontFamily: `${fonts.text}`,
      margin: 0,
      padding: 0,
      textAlign: "center",
    }}>El formulario se envió correctamente.</div>
  )
};

const StyledToastError = () => {
  return (
    <div style={{
      backgroundColor: `${colors.borravino}`,
      color: `${colors.blanco}`,
      fontFamily: `${fonts.text}`,
      margin: 0,
      padding: 0,
      textAlign: "center",
    }}>No se pudo enviar el formulario.</div>
  )
}

const Form = () => {

  const [state, setState] = useState({
    "nombre": "",
    "apellido": "",
    "email": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "facebook": "",
    "sitioweb": "",
    "mensaje": ""
  });

  const [formState, setFormState] = useState("");

  const handleChange = e => {
    console.log("name", e.target.name)
    console.log("value", e.target.value)
    setState({...state, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_vNgTxJCIckvAXdDUjFXsB')
      .then((result) => {
        console.log(result.text);
        setFormState("success");
         toast(<StyledToastSuccess/>, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
      }, (error) => {
          console.log(error.text);
          setFormState("error");
          toast(<StyledToastError/>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });          
      });
      
  };
  
 
  return (
    <FormContainer onSubmit={handleSubmit} >
      <Fields>
        <input type="text" value={state.nombre} required placeholder="Nombre*" name="nombre" onChange={handleChange}/>
        <input type="text" value={state.apellido} required placeholder="Apellido*" name="apellido" onChange={handleChange}/>
        <input type="email" value={state.email} required placeholder="Correo electrónico*" name="email" onChange={handleChange}/>
        <input type="text" value={state.instagram} placeholder="Instagram" name="instagram" onChange={handleChange}/>
        <input type="text" value={state.twitter} placeholder="Twitter" name="twitter" onChange={handleChange}/>
        <input type="text" value={state.linkedin} placeholder="Linkedin" name="linkedin" onChange={handleChange}/>
        <input type="text" value={state.facebook} placeholder="Facebook" name="facebook" onChange={handleChange}/>
        <input type="text" value={state.sitioweb} placeholder="Sitio web" name="sitioweb" onChange={handleChange}/>
        <TextArea type="textarea" value={state.mensaje} cols="30" rows="10" placeholder="Mensaje" name="mensaje" onChange={handleChange}></TextArea>
      </Fields>
      <ButtonSubmit buttonText="Enviar" buttonwidth="80px"/>
        {/* <input type="submit" value="Enviar"/> */}
      {/* </Button> */}
    </FormContainer>
  )
};

export default Form;

