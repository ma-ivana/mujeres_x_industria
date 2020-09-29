import React from 'react';
import styled from 'styled-components';
import { colors, fonts, shadows } from '../styles/globalCss';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  width: ${props => props.buttonwidth};
  height: 30px;
  border-radius: 5%;
  border: none;
  background-color: ${colors.borravino};
  color: white;
  font-family: ${fonts.nav};
  font-weight: bold;
  ${shadows.card_shadow};
  margin: 5px;
  padding-top: 6px;
  font-size: 15px;
  text-decoration: none;

  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`

const ButtonLink = ( {buttonText, buttonwidth, buttonRoute } ) => {
  return (
    <StyledButton to={buttonRoute} buttonwidth={buttonwidth}>{buttonText}
      
    </StyledButton>
  )
}

export default ButtonLink;