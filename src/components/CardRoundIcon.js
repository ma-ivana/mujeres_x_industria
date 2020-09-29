import React from 'react';
import styled from 'styled-components';
import { fonts, mixins, colors } from '../styles/globalCss';

const CardTotal = styled.div`
  width: 22%;
  height: 350px;
  background-color: ${props => props.cardColor};
  ${mixins.column_flex_center_center};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    :hover {
      transform: scale(1.1);
    }

  @media all and (max-width: 768px) {
    width: 80%;
    margin-bottom: 65px;
  }
`

const CardTitle = styled.div`
  box-sizing: border-box;
  margin: -10px 10px 5px;
  color: ${colors.rosa_fuerte};
  font-family: ${fonts.title};
  font-size: 32px;
  height: 20px;

  @media all and (max-width: 768px) {
    height: 15px;
    margin-top: -65px;
  }
`

const CardIcon = styled.div`
  color: white;
  width: 200px;
  height: 200px;
  transform: translate(0, -70px);
  ${mixins.usual_flex};
  overflow: hidden;
  
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`
const CardText = styled.div`
  color: ${colors.gris_oscuro};
  font-family: ${fonts.text};
  height: 150px;
  box-sizing: border-box;
  padding: 25px 30px 25px;
    p {
      text-align: center;
    }

  @media all and (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
    padding: 3%;
  }
`

const CardRoundIcon = ({ cardColor, iconName, iconColor, cardTitle, cardContent }) => {
  return (
    <CardTotal cardColor={cardColor}>
      <CardIcon iconColor={iconColor}>
        <img alt={iconName} src={iconName}/>
      </CardIcon>
      <CardTitle> {cardTitle}
      </CardTitle>
      <CardText>
        <p>{cardContent}</p>
      </CardText>
    </CardTotal>
  )

}

export default CardRoundIcon;