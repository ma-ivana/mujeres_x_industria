import React from 'react';
import Title from './Title';
import { colors, mixins } from '../styles/globalCss';
import TwitterContainer from './TwitterContainer';

import styled from 'styled-components';

const NewsContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  box-sizing: border-box;
  display: flex;

  @media all and (max-width: 430) {
    justify-content: flex-start;
    padding: 0;
    
  }
`;

const News = () => {
  return (
    <>
    <Title 
      titleAlignment={mixins.column_flex_center}
      titleColor={colors.borravino}
      titleContent="NEWS"
      barColor={colors.gris_mas_claro}
    />
      <NewsContainer>
      <TwitterContainer/> 
      </NewsContainer>   
    </>
  )
}

export default News;