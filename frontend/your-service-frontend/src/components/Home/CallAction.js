import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  margin: 4rem 0;
  animation: fadeIn 2s ease-in;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  font-size: 1.25rem;
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

const CallAction = () => {
  return (
    <Section>
      <SectionTitle>Comece Agora</SectionTitle>
      <SectionContent>
        Cadastre-se hoje mesmo e comece a aproveitar os melhores serviços profissionais remotos.
        <StyledLink to="/signup">Crie sua conta</StyledLink>
      </SectionContent>
    </Section>
  );
};

export default CallAction;
