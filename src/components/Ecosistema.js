import React from 'react';
import {colors, mixins } from '../styles/globalCss';
import styled from 'styled-components';
import Title from '../components/Title';
import CardRoundIcon from '../components/CardRoundIcon';
import Apoyo from '../components/Apoyo';
import empresas from '../img/empresa_100_x_100.png';
import ecosistema from '../img/ecosistema_100_x_100.png';
import gobierno from '../img/gobierno_100_x_100.png';
import mujeres from '../img/mujeres_100_x_100.png';

const EcosistemaContainer = styled.div`
  width: 100%;
  margin: 95px 0;
  ${mixins.column_flex_center};
  background-color: ${colors.gris_oscuro};

  @media all and (max-width: 768px) {
    margin-right: 15px;
    margin-top: 15px;
    box-sizing: border-box;
  }
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
    ${mixins.column_flex_center_center};
  }
  
`

const Ecosistema = () => {
  return (
    <>
      <EcosistemaContainer>
          <Title
            titleAlignment={mixins.column_flex_center}
            titleColor={colors.rosa_fuerte}
            titleContent="ECOSISTEMA"
            barColor={colors.gris_mas_claro}
            />          
          <CardContainer>
            <CardRoundIcon
              cardColor={colors.blanco}
              iconName={empresas}
              iconColor={colors.blanco}
              cardTitle="Empresas"
              cardContent="Necesitamos mas mujeres mas igualdad de oportunidades en sus recursos humanos."
              />
            <CardRoundIcon
              cardColor={colors.blanco}
              iconName={mujeres}
              iconColor={colors.blanco}
              cardTitle="Mujeres"
              cardContent="Necesitamos que se animen de verdad. Que se capaciten y luchen por sus sueños."
              />
            <CardRoundIcon 
              cardColor={colors.blanco}
              iconName={gobierno}
              iconColor={colors.blanco}
              cardTitle="Gobierno"
              cardContent="Aunar esfuerzos, trabajar con todos los ministerios es fundamental."
              />
            <CardRoundIcon 
              cardColor={colors.blanco}
              iconName={ecosistema}
              iconColor={colors.blanco}
              cardTitle="Ecosistema"
              cardContent="Necesitamos mas mujeres con  poder de decisión en las grandes empresas, debemos capacitarlas y conectarlas."
              />
          </CardContainer>
        </EcosistemaContainer>

        <Apoyo>

        </Apoyo>

    </>
  )
};

export default Ecosistema;