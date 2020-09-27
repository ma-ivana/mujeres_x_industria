import React from 'react';
import styled from 'styled-components';
import { colors, fonts, shadows } from '../styles/globalCss';

const StyledButton = styled.div`
  width: ${props => props.buttonwidth};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 5px;

    input {
      width: ${props => props.buttonwidth};
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

const ButtonSubmit = ( {buttonText, buttonwidth } ) => {
  return (
    <StyledButton buttonwidth={buttonwidth}>
      <input type="submit" value={buttonText}/>
    </StyledButton>
  )
}

export default ButtonSubmit;