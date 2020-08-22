import React from 'react';
import logo from '../img/mxi_logo_fondo_transp.png';
import styled from 'styled-components';

const NavBar = styled.nav`
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  height: 80px;
  background-color: #900d4f;
  padding: 0 3%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
    .nav_logo {
      height: 80px;
      width: 20%;      
      img {
        height: 100%;        
      }
    }
    .nav_menu {
      width: 73%;
      ul {
        display: flex;
        justify-content: space-evenly;
        li {
        list-style: none;
        display: inline-block;
      }}
    }
`

const Nav = () => {
  return (
    <NavBar>
      <div className="nav_logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="nav_menu">
        <ul>
          <li>Home</li>
          <li>Nosotras</li>
          <li>Ecosistema</li>
          <li>News</li>
          <li>Eventos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </NavBar>



  );
}

export default Nav;