// src/components/ContactInfo.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 2rem;
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ContactTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ffff;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  color: #ffff;
`;

const ContactInfo = ({ email, phone }) => {
  return (
    <ContactContainer>
      <ContactTitle>Informações de Contato</ContactTitle>
      <Text>Email: {email}</Text>
      <Text>Telefone: {phone}</Text>
    </ContactContainer>
  );
};

export default ContactInfo;
