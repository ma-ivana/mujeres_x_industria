import React from 'react';
import Card from '../components/Card';
import {colors, mixins } from '../styles/globalCss';
import styled from 'styled-components';
import Title from '../components/Title';


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
          {/* <Card
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
            /> */}
        </CardContainer>
      </MisionContainer>
    </>
  )

}

export default Ejes;