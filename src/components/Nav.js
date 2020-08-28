import React from 'react';
import logo from '../img/mxi_logo_fondo_transp.png';
import styled from 'styled-components';
import { colors } from '../styles/globalCss';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  width: 100%;
  margin: 0;
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 21px;
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
        color: white;
          a {
            text-decoration: none;
            color: white;
          }
        }
          li:hover{
            text-shadow: 1px 1px ${colors.rosa_muy_claro};
            font-weight: bolder;
          }
        }
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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/nosotras">Nosotras</Link></li>
          <li><Link to="/ecosistema">Ecosistema</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </NavBar>



  );
}

export default Nav;