import React, { useState } from 'react';
import styled from 'styled-components';
import ImgComp from '../components/ImgComp';
import image1 from '../img/img1_380_250.png'
import image2 from '../img/img2_380_250.png';
import image3 from '../img/img3_380_250.png';
import image4 from '../img/img4_380_250.png';
import image5 from '../img/img5_380_250.png';


const StyledSlider = styled.div`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .slide {
    min-width: 100%;
    height: 80%;
    transition: 0.5s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .img_container {
      width: 50%;
      height: auto;
      margin-left: 10%;
      img {
        min-width: 100%;
      }
    } 
    .text_container {
      width: 60%;
      margin-right: 10%;
      padding: 5% 10% 5% 5%;
      text-align: center;
    }     
  }
`
const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 15%;
  height: 80%;
  background: none;
  border: none;
`

const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 20%;
  height: 80%;
  background: none;
  border: none;
`

const Slider = () => {
  const [ x, setX] = useState(0);
  let sliderArr = [
  <ImgComp src={image1}/>, 
  <ImgComp src={image2}/>, 
  <ImgComp src={image3}/>, 
  <ImgComp src={image4}/>, 
  <ImgComp src={image5}/>]    
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  }

  const goRight = () => {
    (x === -100 * (sliderArr.length-1))? setX(0) : setX(x - 100);
  }

  return (
    <StyledSlider>
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
            <div className="img_container">
            {item}
            </div>
            <div className="text_container">
              <p>Invertir en una mujer tiene gran impacto social porque la mujer multiplica oportunidades</p>
            </div>
          </div>
        )
      })}

      <ButtonLeft id="goLeft" onClick={goLeft}>left</ButtonLeft>
      <ButtonRight id="goRight" onClick={goRight}>right</ButtonRight>
    </StyledSlider>
  );
}

export default Slider;