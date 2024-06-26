import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  margin: 4rem 0;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: #fff;
`;

const SectionContent = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-decoration: underline;
  margin-top: 2rem;
  display: block;
  font-size: 1.25rem;
  &:hover {
    color: #2980b9;
  }
`;

const StoriesSuccess = () => {
  return (
    <Section>
      <SectionTitle>Histórias de Sucesso</SectionTitle>
      <SectionContent>
        Veja como nossa plataforma ajudou diversas pessoas a encontrar os serviços de que precisavam, no conforto de suas casas.
        <StyledLink to="/success-stories">Leia mais histórias de sucesso</StyledLink>
      </SectionContent>
    </Section>
  );
};

export default StoriesSuccess;
