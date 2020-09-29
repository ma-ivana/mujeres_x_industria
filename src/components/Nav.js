import React from 'react';
import logo from '../img/mxi_logo_fondo_transp.png';
import styled from 'styled-components';
import { colors, fonts, mixins } from '../styles/globalCss';
import Burger from '../components/Burger';

const NavBar = styled.nav`
  width: 100%;
  margin: 0;
  color: ${colors.blanco};
  font-family: ${fonts.nav};
  font-size: 21px;
  font-weight: 700;
  height: 80px;
  background-color: ${colors.borravino};
  padding: 0 3%;
  box-sizing: border-box;
  ${mixins.between_flex}
    .nav_logo {
      height: 80px;
      width: 20%;      
      img {
        height: 100%;        
      }
    }

`

const Nav = () => {
  return (
    <NavBar>
      <div className="nav_logo">
        <img src={logo} alt="logo"/>
      </div>
      <Burger/>
    </NavBar>
  )
};

export default Nav;