import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2a2a72, #009ffd);
  color: white;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1001;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Meu Sistema de Agendamento</p>
    </FooterContainer>
  );
};

export default Footer;
