// src/components/Expertise.js
import React from 'react';
import styled from 'styled-components';

const ExpertiseContainer = styled.div`
  margin-top: 2rem;
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ExpertiseTitle = styled.h3`
  margin-bottom: 1rem;
  color : #ffff;
`;

const ExpertiseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExpertiseItem = styled.li`
  margin-bottom: 0.5rem;
  color : #ffff;
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
