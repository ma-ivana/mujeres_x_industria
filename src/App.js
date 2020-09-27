import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Banner from './components/Banner';
import News from './components/News';
import Nosotras from './components/Nosotras';
import Ecosistema from './components/Ecosistema';
import Mision from './components/Mision';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Slider}></Route>
        <Route exact path="/" component={Banner}></Route>
        <Route exact path="/home" component={Slider}></Route>
        <Route exact path="/home" component={Banner}></Route>
        <Route exact path="/nosotras" component={Nosotras}></Route>
        <Route exact path="/nosotras" component={Mision}></Route>
        <Route exact path="/ecosistema" component={Ecosistema}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/contacto" component={Contacto}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
