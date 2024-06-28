import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: rgb(51,42,42);
background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
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
