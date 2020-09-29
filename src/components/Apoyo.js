import React from 'react';
import {colors, mixins } from '../styles/globalCss';
import styled from 'styled-components';
import Title from '../components/Title';
import CardRoundIconApoyo from '../components/CardRoundIconApoyo';
import ahk from '../img/ahk_300_x_300.png';
import ab from '../img/ab_300_x_300.png';
import wise from '../img/wise_300_x_300.png';

const ApoyoContainer = styled.div`
  width: 100%;
  margin: 95px 0;
  ${mixins.column_flex_center};
  background-color: ${colors.blanco};
`

const CardContainer = styled.div`
  width: 100%;
  padding: 5% 5%;
  margin-top: 25px;
  box-sizing: border-box;
  height: auto;
  ${mixins.between_flex};

  @media all and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 55px;
    ${mixins.column_flex_center};
  }
  
`

const Apoyo = () => {
  return (
    <ApoyoContainer>
        <Title
          titleAlignment={mixins.column_flex_center}
          titleColor={colors.rosa_fuerte}
          titleContent="NOS APOYAN"
          barColor={colors.rosa_fuerte}
          />          
        <CardContainer>
          <CardRoundIconApoyo
            cardColor={colors.gris_oscuro}
            iconName={wise}
            iconColor={colors.blanco}
            cardTitle="WISE Latinoamérica"
            cardContent="Programa que fortalece el ecosistema emprendedor para una mayor integración de la mujer, como creadora de proyectos innovadores y de impacto, en áreas STEM."
            />
          <CardRoundIconApoyo
            cardColor={colors.gris_oscuro}
            iconName={ab}
            iconColor={colors.blanco}
            cardTitle="ARTHUR + BERNARD"
            cardContent="Primer Management Center de Latinoamérica, pensado para agregarle valor a las empresas y las personas."
            />
          <CardRoundIconApoyo 
            cardColor={colors.gris_oscuro}
            iconName={ahk}
            iconColor={colors.blanco}
            cardTitle="Cámara de Industria y Comercio Argentino-Alemana"
            cardContent="Agentes activos en la construcción de relaciones estratégicas que unen empresas argentinas y alemanas."
            />
        </CardContainer>
      </ApoyoContainer>
  )
};

export default Apoyo;