import React from 'react';
import styled from 'styled-components';
import { fonts, mixins } from '../styles/globalCss';

const CardTotal = styled.div`
  width: 22%;
  height: 400px;
  background-color: ${props => props.cardColor};
  ${mixins.column_flex_center_center};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    :hover {
      transform: scale(1.1);
    }

    @media all and (max-width: 768px) {
      width: 85%;
      height: auto;
      margin-bottom: 25px;
    }
`

const CardTitle = styled.div`
  box-sizing: border-box;
  margin: 20px 10px 10px;
  color: white;
  font-family: ${fonts.title};
  font-size: 32px;
  height: 50px;

  @media all and (max-width: 768px) {
    font-size: 30px;
    heigh: 37px;
  }
`

const CardIcon = styled.div`
  color: white;
  width: 55px;
  height: 55px;
  ${mixins.usual_flex};
  overflow: hidden;
    img {
      width: 90%;
      height: auto;
    }
`
const CardText = styled.div`
  color: white;
  font-family: ${fonts.text};
  height: 280px;
  box-sizing: border-box;
  padding: 25px 30px 25px;
    p {
      text-align: center;
    }

  @media all and (max-width: 768px) {
    font-size: 18px;
  }
`

const Card = ({ cardColor, iconName, iconColor, cardTitle, cardContent }) => {
  return (
    <CardTotal cardColor={cardColor}>
      <CardTitle> {cardTitle}
      </CardTitle>
      <CardIcon iconColor={iconColor}>
        <img alt="Nombre del ícono" src={iconName}/>
      </CardIcon>
      <CardText>
        <p>{cardContent}</p>
      </CardText>
    </CardTotal>
  )

}

export default Card;