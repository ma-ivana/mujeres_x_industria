import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Banner from './components/Banner';
// import News from './components/News';
import Nosotras from './components/Nosotras';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Slider/>
      <Banner/>
      <Nosotras/>
    </>
  );
}

export default App;
