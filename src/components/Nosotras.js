import React from 'react';
import styled from 'styled-components';
import { mixins, colors, fonts } from '../styles/globalCss';
import img_central from '../img/img_400_x_370.png';
import Title from './Title';
import Mision from './Mision';
import Ejes from './Ejes';

const MainContainer = styled.section`
  margin: 120px 3%;
  width: 94%;
  height: 420px;
  box-sizing: border-box;
  ${mixins.between_flex};
  background-color: ${colors.borravino};
`
const TextContainer = styled.div`
  width: 50%;
  height: 420px;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-content: space-between;
`
const Text = styled.p`
  margin-top: 35px;
  color: ${colors.blanco};
  font-family: ${fonts.banner};
  font-size: 21px;
`

const ImageContainer = styled.div`
  width: 35%;
  height: 420px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
    img {
      min-width: 100%;
      height: auto;
    }
`

const Nosotras = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <div>
            <Title
              titleAlignment={mixins.column_flex_left} 
              titleColor={colors.blanco}
              titleContent="NOSOTRAS"
              barColor={colors.rosa_fuerte}
            ></Title>
          </div>
          <div>
            <Text>Quienes nos ocupamos de empoderar mujeres entendemos la urgencia de la igualdad de oportunidades en todos los ámbitos. Hay mujeres que buscan un empleo digno, emprendedoras que desean ser parte de los proveedores de las industrias a nivel regional, empleadas que esperan una oportunidad para crecer en puestos de trabajo como intrapreneurs que aspiran a ocupar puestos de decisión.</Text>
            <Text>Somos lo que soñamos ser y buscamos una oportunidad para todas ellas.</Text>
          </div>
        </TextContainer>
        <ImageContainer>
          <img src={img_central} alt="Mujer con un fondo de cerezos en flor"/>
        </ImageContainer>
      </MainContainer>

      <Mision/>

      <Ejes/>
    </>
  )

}

export default Nosotras;