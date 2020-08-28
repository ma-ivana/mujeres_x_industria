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
`

const CardContainer = styled.div`
  width: 100%;
  padding: 5% 5%;
  box-sizing: border-box;
  height: auto;
  ${mixins.between_flex};
  
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
            cardContent="Añadir un poco de texto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto texto"
            />
          <Card
            cardColor={colors.borravino_claro}
            iconName={articular}
            iconColor={colors.blanco}
            cardTitle="ARTICULAR"
            cardContent="Añadir un poco de texto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto texto"
            />
          <Card 
            cardColor={colors.gris_claro}
            iconName={visibilizar}
            iconColor={colors.blanco}
            cardTitle="VISIBILIZAR"
            cardContent="Añadir un poco de texto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto texto"
            />
          <Card 
            cardColor={colors.gris_oscuro}
            iconName={acompañar}
            iconColor={colors.blanco}
            cardTitle="ACOMPAÑAR"
            cardContent="Añadir un poco de texto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto textotexto texto texto texto texto texto"
            />
        </CardContainer>
      </MisionContainer>
    </>
  )

}

export default Mision;