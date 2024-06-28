// src/components/Education.js
import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  margin-top: 2rem;
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const EducationTitle = styled.h3`
  margin-bottom: 1rem;
  color : #ffff;
`;

const EducationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EducationItem = styled.li`
  margin-bottom: 0.5rem;
  color : #ffff;
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
