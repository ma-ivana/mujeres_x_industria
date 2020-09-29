import React from 'react';
import Card from '../components/Card';
import {colors, mixins } from '../styles/globalCss';
import styled from 'styled-components';
import Title from '../components/Title';
import conectar from '../img/conectar_40_x_40.png';
import acompañar from '../img/acompañar_40_x_40.png';
import articular from '../img/articular_40_x_40.png';
import visibilizar from '../img/visibilizar_40_x_40.png'

const MisionContainer = styled.div`
  width: 100%;
  margin: 95px 0;
  ${mixins.column_flex_center};

  @media all and (max-width: 768px) {
    width: 94%;
    margin: 3%;
    box-sizing: border-box;
  }
`

const CardContainer = styled.div`
  width: 100%;
  padding: 5% 5%;
  box-sizing: border-box;
  height: auto;
  ${mixins.between_flex};
  
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`

const Mision = () => {
  return (
    <>
      <MisionContainer>
        <Title
          titleAlignment={mixins.column_flex_center}
          titleColor={colors.borravino}
          titleContent="NUESTRA MISIÓN"
          barColor={colors.gris_claro}
          />          
        <CardContainer>
          <Card
            cardColor={colors.borravino}
            iconName={conectar}
            iconColor={colors.blanco}
            cardTitle="CONECTAR"
            cardContent="Desde hace muchos años estamos en el mundo corporativo, gremial, sector público, universidad e industrial. Consideramos que como conectoras podemos impulsar a muchas mujeres con potencial."
            />
          <Card
            cardColor={colors.borravino_claro}
            iconName={articular}
            iconColor={colors.blanco}
            cardTitle="ARTICULAR"
            cardContent="Alineados con el ODS17 creemos en las alianzas para lograr resultados y trabajamos con todo el ecosistema para generar real impacto social."
            />
          <Card 
            cardColor={colors.gris_claro}
            iconName={visibilizar}
            iconColor={colors.blanco}
            cardTitle="VISIBILIZAR"
            cardContent="Tan importante como la gestión de ellas mismas, muchas mujeres realizan acciones increíbles pero pocos saben, incentivamos a mejorar su comunicación y autopromoción."
            />
          <Card 
            cardColor={colors.gris_oscuro}
            iconName={acompañar}
            iconColor={colors.blanco}
            cardTitle="ACOMPAÑAR"
            cardContent="Escuchándolas, monitoreándolos e impulsándolas lograremos que más mujeres multipliquen oportunidades en diferentes industrias, espacios de poder y áreas productivas."
            />
        </CardContainer>
      </MisionContainer>
    </>
  )

}

export default Mision;