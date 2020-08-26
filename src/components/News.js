import React from 'react';
import Title from './Title';
import { colors, mixins } from '../styles/globalCss';

const News = () => {
  return (
    <Title 
      titleAlignment={mixins.column_flex_center}
      titleColor={colors.borravino}
      titleContent="NEWS"
      barColor={colors.gris_mas_claro}
    />
  )
}

export default News;