import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserTie, FaUser, FaSearch, FaLifeRing, FaUserTimes } from 'react-icons/fa';

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
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
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

const UserProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const UserProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  margin-right: 2rem;
  &:hover {
    color: lightgray;
  }
`;

const UserProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ddd;
  }
`;

const DropdownIcon = styled.span`
  margin-right: 8px;
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Title>Meu Sistema de Agendamento</Title>
      <NavLinks>
        <NavLinkItem to="/" exact activeClassName="active">
          <FaHome /> Home
        </NavLinkItem>
        <NavLinkItem to="/search" activeClassName="active">
          <FaSearch /> Buscar Advogados
        </NavLinkItem>
        <UserProfileContainer>
          <UserProfileButton onClick={toggleDropdown}>
            <UserProfileImage src="https://via.placeholder.com/150" alt="Foto do Usuário" />
            Nome do Usuário
          </UserProfileButton>
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem to="/login">
              <DropdownIcon><FaUser /></DropdownIcon> Login
            </DropdownItem>
            <DropdownItem to="/client-profile">
              <DropdownIcon><FaUser /></DropdownIcon> Perfil Cliente
            </DropdownItem>
            <DropdownItem to="/lawyer-profile">
              <DropdownIcon><FaUserTie /></DropdownIcon> Perfil Advogado
            </DropdownItem>
            <DropdownItem to="/contact-support">
              <DropdownIcon><FaLifeRing /></DropdownIcon> Suporte
            </DropdownItem>
            <DropdownItem to="/logout">
              <DropdownIcon><FaUserTimes /></DropdownIcon> Logout
            </DropdownItem>
          </DropdownMenu>
        </UserProfileContainer>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
