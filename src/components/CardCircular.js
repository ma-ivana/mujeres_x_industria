import React from 'react';
import styled from 'styled-components';
import { fonts, mixins } from '../styles/globalCss';

const CardTotal = styled.div`
  width: 30%;
  height: 400px;
  border-radius: 50%;
  padding: 3%;
  box-sizing: border-box;
  background-color: ${props => props.cardColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    :hover {
      transform: scale(1.1);
    }

    @media all and (max-width: 768px) and (min-width: 321px){
      width: 270px;
      height: 270px;
      padding: 0;
      margin-bottom: 15px;
    }

    @media all and (max-width: 320px) {
      width: 230px;
      height: 220px;
      padding: 0;
      margin-bottom: 15px;
    }
`

const CardTitle = styled.div`
  box-sizing: border-box;
  margin: 20px 10px 10px;
  color: white;
  text-align: center;
  font-family: ${fonts.title};
  font-size: 32px;
  height: 50px;

  @media all and (max-width: 768px) and (min-width: 321px){
    margin: 2%;
    font-size: 28px;
    height: 30px;
  }

  @media all and (max-width: 320px) {
    font-size: 23px;
    height: 21px;
    margin: 1%;
  }
`

const CardIcon = styled.div`
  color: white;
  width: 100px;
  height: 100px;
  ${mixins.usual_flex};
  overflow: hidden;
    img {
      width: 82%;
      height: auto;
    }

  @media all and (max-width: 768px) and (min-width: 321px){
    width: 70px;
    height: 70px;
  }

  @media all and (max-width: 320px) {
    width: 60px;
    height: 60px;
  }
`
const CardText = styled.div`
  color: white;
  font-family: ${fonts.text};
  font-size: 21px;
  height: 120px;
  box-sizing: border-box;
  padding: 25px 30px 25px;
    p {
      text-align: center;
    }
  
  @media all and (max-width: 768px) and (min-width: 321px) {
    font-size: 18px;
    height: 120px;
  }

  @media all and (max-width: 320px) {
    font-size: 15px;
    height: 110px;

  }
`

const CardCircular = ({ cardColor, iconName, iconColor, cardTitle, cardContent }) => {
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

export default CardCircular;