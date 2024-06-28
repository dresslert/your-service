import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUserTie, FaUser, FaSearch, FaLifeRing } from 'react-icons/fa';

const SidebarNav = styled.nav`
background: rgb(51,42,42);
background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 1rem;
  height: calc(100vh - 60px);
  width: 250px;
  position: fixed;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    box-shadow: none;
  }
`;

const NavItem = styled.li`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    padding: 0.8rem 1rem;
    transition: background 0.2s ease, padding-left 0.2s ease;
    font-family: 'Arial', sans-serif;  /* Altere para a fonte desejada */
    
    font-size: 1.1rem;  /* Ajusta o tamanho da fonte */

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      padding-left: 1.5rem;
    }

    &.active {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarNav isOpen={isOpen}>
      <ul style={{ listStyle: 'none', margin: '20px 0 0 0', padding: 0, width: '100%' }}>
        <NavItem>
          <NavLink to="/" exact activeClassName="active">
            <FaHome /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/lawyer-profile" activeClassName="active">
            <FaUserTie /> Área do Advogado
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/client-profile" activeClassName="active">
            <FaUser /> Área do Cliente
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/search" activeClassName="active">
            <FaSearch /> Buscar Advogados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact-support" activeClassName="active">
            <FaLifeRing /> Suporte
          </NavLink>
        </NavItem>
      </ul>
    </SidebarNav>
  );
};

export default Sidebar;
