// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  margin-top: 2rem;
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const PortfolioTitle = styled.h3`
  margin-bottom: 1rem;
  color : #ffff;
`;

const PortfolioItem = styled.div`
  margin-bottom: 1rem;
  color : #ffff;
`;

const PortfolioCase = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color : #ffff;
`;

const PortfolioDescription = styled.p`
  margin: 0;
  color : #ffff;
`;

const Portfolio = ({ cases }) => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Portfólio de Casos</PortfolioTitle>
      {cases.map((item, index) => (
        <PortfolioItem key={index}>
          <PortfolioCase>{item.case}</PortfolioCase>
          <PortfolioDescription>{item.description}</PortfolioDescription>
        </PortfolioItem>
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
