import React from 'react';
import Card from '../components/Card';
import {colors, mixins } from '../styles/globalCss';
import styled from 'styled-components';
import Title from '../components/Title';
import CardCircular from './CardCircular';
import icono from '../img/icono_mas_40_x_40.png';


const MisionContainer = styled.div`
  width: 100%;
  margin: 95px 0;
  ${mixins.column_flex_center};
`

const CardContainer = styled.div`
  width: 100%;
  padding: 5% 5%;
  box-sizing: border-box;
  height: auto;
  ${mixins.between_flex};
  
`

const Ejes = () => {
  return (
    <>
      <MisionContainer>
        <Title
          titleAlignment={mixins.column_flex_center}
          titleColor={colors.borravino}
          titleContent="NUESTROS EJES"
          barColor={colors.gris_claro}
          />          
        <CardContainer>
          <CardCircular
            cardColor={colors.borravino}
            iconName={icono}
            iconColor={colors.blanco}
            cardTitle="MUJERES EN PRODUCCIÓN"
            cardContent="Más mujeres en todos los espacios productivos"
            />
          <CardCircular
            cardColor={colors.borravino_claro}
            iconName={icono}
            iconColor={colors.blanco}
            cardTitle="MUJERES PROVEEDORAS"
            cardContent="Más mujeres emprendedoras como proveedoras de la industria"
            />
          <CardCircular 
            cardColor={colors.gris_claro}
            iconName={icono}
            iconColor={colors.blanco}
            cardTitle="MUJERES EN DECISIÓN"
            cardContent="Más mujeres en poder de decisión en todas las áreas"
            />
        </CardContainer>
      </MisionContainer>
    </>
  )

}

export default Ejes;