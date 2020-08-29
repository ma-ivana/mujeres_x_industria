import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/globalCss';

const Bar = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 15px;
  background-color: ${colors.gris_oscuro};
`

const DivisionBar = () => {
  return (
    <Bar>

    </Bar>
  )
}

export default DivisionBar;