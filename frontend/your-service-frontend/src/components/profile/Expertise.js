// src/components/Expertise.js
import React from 'react';
import styled from 'styled-components';

const ExpertiseContainer = styled.div`
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ExpertiseTitle = styled.h3`
  margin-bottom: 1rem;
`;

const ExpertiseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExpertiseItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Expertise = ({ areas }) => {
  return (
    <ExpertiseContainer>
      <ExpertiseTitle>Áreas de Especialização</ExpertiseTitle>
      <ExpertiseList>
        {areas.map((area, index) => (
          <ExpertiseItem key={index}>{area}</ExpertiseItem>
        ))}
      </ExpertiseList>
    </ExpertiseContainer>
  );
};

export default Expertise;
