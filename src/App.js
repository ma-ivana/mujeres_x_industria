import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import styled from 'styled-components';
import Slider from './components/Slider';

const HeroContainer = styled.div`
  padding: 25px;
  height: 300px;
  display: flex;
  justify-content: center;

`

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Slider/>
    </div>
  );
}

export default App;
