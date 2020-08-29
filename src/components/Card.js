import React from 'react';
import styled from 'styled-components';
import { fonts, mixins } from '../styles/globalCss';

const CardTotal = styled.div`
  width: 22%;
  height: 400px;
  background-color: ${props => props.cardColor};
  ${mixins.column_flex_center_center};
`

const CardTitle = styled.div`
  box-sizing: border-box;
  margin: 20px 10px 10px;
  color: white;
  font-family: ${fonts.title};
  font-size: 32px;
  height: 50px;
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
`

const Card = ({ cardColor, iconName, iconColor, cardTitle, cardContent }) => {
  return (
    <CardTotal cardColor={cardColor}>
      <CardTitle> {cardTitle}
      </CardTitle>
      <CardIcon iconColor={iconColor}>
        <img src={iconName}/>
      </CardIcon>
      <CardText>
        <p>{cardContent}</p>
      </CardText>
    </CardTotal>
  )

}

export default Card;