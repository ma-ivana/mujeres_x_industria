import React from 'react';
import Title from './Title';
import { colors } from '../styles/globalCss';

const News = () => {
  return (
    <Title 
      titleColor={colors.borravino}
      titleContent="NEWS"
      barColor={colors.gris_mas_claro}
    />
  )
}

export default News;