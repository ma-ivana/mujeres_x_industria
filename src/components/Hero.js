import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../img/img_mujeres_1_200_x_130.png'
import image2 from '../img/img_mujeres_2.png';
import image3 from '../img/img_mujeres_3.png';
import styled from 'styled-components';

const StyledCarouselItem = styled(Carousel.Item)`
  width: 90%;
  .slide_container{
    background-color: grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .d-block w-100 {
      width: 30%;
    }
    .text {
      width: 70%;
    }
  }
`

const Hero = () => {
  return (
    <>
    <Carousel>
      <StyledCarouselItem>
        <div className="slide_container">
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <div className="text"><p>Invertir en una mujer tiene gran impacto social porque la mujer multiplica oportunidades</p></div>
        </div>        
      </StyledCarouselItem>

      <StyledCarouselItem>
        <div className="slide_container">
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
          <div className="text"><p>Invertir en una mujer tiene gran impacto social porque la mujer multiplica oportunidades</p></div>
        </div>        
      </StyledCarouselItem>

      <StyledCarouselItem>
        <div className="slide_container">
          <img
            className="d-block w-100"
            src={image3}
            alt="First slide"
          />
          <div className="text"><p>Invertir en una mujer tiene gran impacto social porque la mujer multiplica oportunidades</p></div>
        </div>        
      </StyledCarouselItem>
    </Carousel>
  </>);
}

export default Hero;