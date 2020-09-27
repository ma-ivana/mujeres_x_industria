import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/globalCss';
import { Link } from 'react-router-dom';

const NavMenu = styled.div`
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
        
        @media (max-width: 768px) {
          width: 200px;
          height: 280px;
          background-color: #900d4f;
          position: fixed;
          transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
          top: 0;
          right: 0;
          padding-top: 35px;
          z-index: 10;
          
          
          ul {
            flex-flow: column nowrap;
            align-items: flex-start;
            font-size: 18px;

            li {
              margin: 10px;
            }
          }
        }
`;


const NavRight = ({ open }) => {
  return (
    <NavMenu open={open}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/nosotras">Nosotras</Link></li>
          <li><Link to="/ecosistema">Ecosistema</Link></li>
          <li><Link to="/news">News</Link></li>
          {/* <li><Link to="/eventos">Eventos</Link></li> */}
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </NavMenu>
  )
}

export default NavRight;