import React from 'react';
import styled from 'styled-components';
import img3 from '../img/img3_640_x_540.png';
import { colors, mixins } from '../styles/globalCss';
import Title from './Title';
import Form from './Form';

const ContactoContainer = styled.div`
  margin: 80px 3%;
  width: 94%;
  height: 700px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
`

const LeftDiv = styled.div`
  width: 50%;
  height: 700px;
  background-color: ${colors.gris_oscuro};
  display: flex;
  justify-content: flex-end;
  align-items: center;
    img {
      width: 640px;
      height: 540px;
    }    
`

const RightDiv = styled.div`
  width: 50%;
  height: 700px;
  background-color: ${colors.borravino};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;    
`
const TitleContainer = styled.div`
  padding-left: 25px;
  width: 640px;
  height: 540px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Contacto = () => {
  return (
    <ContactoContainer>
      <LeftDiv>
        <img alt="Imagen de mujeres" src={ img3 }/>
      </LeftDiv>
      <RightDiv>
        <TitleContainer>
          <Title
            titleAlignment={mixins.column_flex_left}
            titleColor={colors.gris_oscuro}
            titleContent="CONTACTO / SUMATE"
            barColor={colors.borravino}
            ></Title>
            <Form/>
        </TitleContainer>
        
      </RightDiv>
    </ContactoContainer>
  )
}

export default Contacto;