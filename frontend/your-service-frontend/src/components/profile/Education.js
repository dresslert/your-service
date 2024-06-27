// src/components/Education.js
import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  margin-top: 2rem;
  background: rgb(25, 24, 24);
  background: linear-gradient(90deg, rgba(25, 24, 24, 1) 0%, rgba(211, 211, 224, 1) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const EducationTitle = styled.h3`
  margin-bottom: 1rem;
`;

const EducationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EducationItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Education = ({ degrees }) => {
  return (
    <EducationContainer>
      <EducationTitle>Formação Acadêmica</EducationTitle>
      <EducationList>
        {degrees.map((degree, index) => (
          <EducationItem key={index}>{degree}</EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
