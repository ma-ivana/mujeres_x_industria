import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  background-color: #293039;
  font-family: 'Belleza', sans-serif;
  font-size: 32px;
  color: white;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;  
`

const Banner = () => {

  return (
    <StyledBanner>
      <div>Empoderando mujeres por la igualdad de oportunidades</div>
    </StyledBanner>
  )

}

export default Banner;