import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Banner from './components/Banner';
// import News from './components/News';
import Nosotras from './components/Nosotras';
import Mision from './components/Mision';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      {/* <Nav/>
      <Slider/> */}
      <Nav/>

      <Route exact path="/" component={Slider}></Route>
      <Route exact path="/" component={Banner}></Route>
      <Route exact path="/home" component={Slider}></Route>
      <Route exact path="/home" component={Banner}></Route>
      <Route exact path="/nosotras" component={Nosotras}></Route>
      <Route exact path="/nosotras" component={Mision}></Route>

      <Footer/>
    </Router>
  );
}

export default App;
