import React from 'react';
import styled from 'styled-components';
import { colors, fonts, shadows } from '../styles/globalCss';

const FormContainer = styled.form`
  width: 580px;
  height: 400px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
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
      border-bottom: 1px solid ${colors.borravino};
      font-family: ${fonts.nav};
      font-size: 14px;
        :focus {
          border: none;
          outline: none;
          border-bottom: 2px solid ${colors.borravino};
        }     
    }
`
const Submit = styled.div`
  width: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

    input {
      width: 80px;
      height: 30px;
      border-radius: 5%;
      border: none;
      background-color: ${colors.borravino};
      color: white;
      font-family: ${fonts.nav};
      font-weight: bold;
      ${shadows.card_shadow};
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
      border-bottom: 2px solid ${colors.borravino};
    } 
`

const Form = () => {
  return (
    <FormContainer action="../formPHP.php" method="post">
      <Fields>
        <input type="text" required placeholder="Nombre*" name="nombre"/>
        <input type="text" required placeholder="Apellido*" name="apellido"/>
        <input type="email" required placeholder="Correo electrónico*" name="email"/>
        <input type="url" placeholder="Instagram" name="instagram"/>
        <input type="url" placeholder="Twitter" name="twitter"/>
        <input type="url" placeholder="Linkedin" name="linkedin"/>
        <input type="url" placeholder="Facebook" name="facebook"/>
        <input type="url" placeholder="Sitio web" name="sitioweb"/>
        <TextArea type="textarea" cols="30" rows="10" placeholder="Mensaje" name="mensaje"></TextArea>
      </Fields>
      <Submit>
        <input type="submit" value="Enviar"/>
      </Submit>
    </FormContainer>

  )
}

export default Form;

