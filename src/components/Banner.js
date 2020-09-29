import React from 'react';
import styled from 'styled-components';
import {colors } from '../styles/globalCss';

const StyledBanner = styled.div`
  background-color: ${colors.blanco};
  font-family: 'Belleza', sans-serif;
  font-size: 32px;
  color: ${colors.borravino};
  width: 100%;
  height: 150px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; 

  @media all and (max-width: 768px) {
    font-size: 23px;
    width: 100%;
    padding: 15px 5px;
  } 
`

const Banner = () => {

  return (
    <StyledBanner>
      <div>Empoderando mujeres por la igualdad de oportunidades</div>
    </StyledBanner>
  )

}

export default Banner;