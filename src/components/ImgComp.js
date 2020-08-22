import React from 'react';
import image1 from '../img/img_mujeres_1_200_x_130.png'
import image2 from '../img/img_mujeres_2.png';
import image3 from '../img/img_mujeres_3.png';
import image4 from '../img/img_mujeres_4.png';
import image5 from '../img/img_mujeres_5.png';

const ImgComp = ({ src }) => {
  return (
    <img src={src} alt="slide-img"/>

  )

}

export default ImgComp;