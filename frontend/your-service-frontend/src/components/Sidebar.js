import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUserTie, FaUser, FaSearch, FaLifeRing } from 'react-icons/fa';

const SidebarNav = styled.nav`
background: rgb(228,215,215);
background: linear-gradient(90deg, rgba(228,215,215,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);

  padding: 1rem;
  height: calc(100vh - 60px); /* Ajusta a altura para levar em conta o header */
  width: 250px;
  position: fixed;
  top: 80px; /* Define o topo da sidebar logo abaixo do header */
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    transition: width 0.3s ease;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  width: 100%;
  
  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 0.8rem 1rem;
    width: 100%;
    transition: background 0.2s ease, padding-left 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      padding-left: 1.5rem;
    }
    
    &.active {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  left: ${({ isOpen }) => (isOpen ? '210px' : '10px')};
  background: #009ffd;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1001;
  transition: left 0.3s ease, background 0.2s ease;

  &:hover {
    background: #007bbd;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </ToggleButton>
      <SidebarNav isOpen={isOpen}>
        <NavList>
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
        </NavList>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
