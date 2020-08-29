import React from 'react';
import styled from 'styled-components';
import instagram from '../img/instagram_40_x_40.png';
import mail from '../img/mail_40_x_40.png';
import twitter from '../img/twitter_40_x_40.png';
import linkedin from '../img/linkedin_40_x_40.png';
import web from '../img/web_40_x_40.png';
import { mixins, colors, fonts } from '../styles/globalCss';
import Bar from '../components/DivisionBar';

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  ${mixins.usual_flex};
  font-family: ${fonts.text};
  color: ${colors.borravino};
`
const Social = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
    
    a {
      text-decoration: none;
      color: ${colors.borravino};
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin: 10px 0 0 0;
        padding: 0;
        font-size: 15px;
        text-align: center;
      }
    }

    :hover {
      transform: scale(1.2);
    }
`

const Footer = () => {
  return (
    <>
      <Bar/>
      <FooterContainer>
        <Social>
          <a href="mailto:mujeresporlaindustria@gmail.com" target="_blank">
            <img src={ mail }/>
            <p>mujeresporlaindustria@gmail.com</p>
          </a>
        </Social>
        <Social>
          <a href="https://emprenderenfemenino.com.ar/" target="_blank">
            <img src={ web }/>
            <p>Emprender en Femenino</p>
          </a>
        </Social>
        <Social>
          <a href="https://www.instagram.com/mujeresxindustria/" target="_blank">
            <img src={ instagram }/>
            <p>@mujeresxindustria</p>
          </a>
        </Social>
        <Social>
          <a href="https://twitter.com/EmprendeFem" target="_blank">
            <img src={ twitter }/>
            <p>@EmprendeFem</p>
          </a>
        </Social>
        <Social>
          <a href="https://www.linkedin.com/groups/12139183/" target="_blank">
            <img src={ linkedin }/>
            <p>Grupo de Mujeres por la Industria</p>
          </a>
        </Social>
      </FooterContainer>
    </>
  )
}

export default Footer;