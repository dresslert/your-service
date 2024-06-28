// src/components/ContactInfo.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 2rem;
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
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
