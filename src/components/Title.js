import React from 'react';
import styled from 'styled-components';
import { fonts } from '../styles/globalCss';

const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  ${props => props.titleAlignment};
`

const TitleLine = styled.h2`
  font-family: ${fonts.title};
  color: ${props => props.titleColor};
  font-size: 30px;
  margin-bottom: 0;
  padding-bottom: 0;
`

const HorizontalBar = styled.div`
  height: 5px;
  width: 350px;
  background-color: ${props => props.barColor};
  margin-top: 0;
  padding-top: 0;
`

const Title = ({ titleAlignment, titleContent, titleColor, barColor }) => {
  return (
    <TitleContainer titleAlignment={titleAlignment}>
      <div>
        <TitleLine 
          titleColor={titleColor}>
          {titleContent}
        </TitleLine>
      </div>
      <HorizontalBar barColor={barColor}></HorizontalBar>
    </TitleContainer>

  )

}

export default Title;