import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
background: rgb(51,42,42);
background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 60px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem; /* Tamanho do título ajustável */
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  margin-right: 2rem;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Meu Sistema de Agendamento</Title>
      <NavLinks>
        <NavLinkItem to="/login" activeClassName="active">Login</NavLinkItem>
        {/* Adicione mais links conforme necessário */}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
