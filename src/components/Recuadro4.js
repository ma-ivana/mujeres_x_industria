import React from 'react';
import styled from 'styled-components';

const Recuadro = styled.div`
  width: 200px;
  height: 300px;
   

`

const Recuadro4 = () => {

  return (
    <Recuadro>
      <Recuadro_Header>
        <Recuadro_Logo></Recuadro_Logo>
        <Recuadro_Title></Recuadro_Title>
      </Recuadro_Header>
    </Recuadro>
  )

}

export default Recuadro4;