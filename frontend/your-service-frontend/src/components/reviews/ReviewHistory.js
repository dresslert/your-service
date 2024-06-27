// src/components/ReviewHistory.js
import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
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

const ReviewHistory = ({ onClose }) => {
  return (
    <HistoryContainer>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
      <h3>Histórico de Avaliações</h3>
      {/* Implemente o histórico de avaliações do cliente aqui */}
    </HistoryContainer>
  );
};

export default ReviewHistory;
