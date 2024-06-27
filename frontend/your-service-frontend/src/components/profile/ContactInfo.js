// src/components/ContactInfo.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ContactTitle = styled.h3`
  margin-bottom: 1rem;
`;

const ContactInfo = ({ email, phone }) => {
  return (
    <ContactContainer>
      <ContactTitle>Informações de Contato</ContactTitle>
      <p>Email: {email}</p>
      <p>Telefone: {phone}</p>
    </ContactContainer>
  );
};

export default ContactInfo;
