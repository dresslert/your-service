// src/components/AppointmentForm.js
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const AppointmentForm = ({ onClose }) => {
  return (
    <FormContainer>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
      <h3>Formulário de Agendamento</h3>
      {/* Implemente o formulário de agendamento aqui */}
    </FormContainer>
  );
};

export default AppointmentForm;
