import React from 'react';
import styled from 'styled-components';

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

const SecurityTrust = () => {
  return (
    <Section>
      <SectionTitle>Segurança e Confiança</SectionTitle>
      <SectionContent>
        Garantimos a segurança e a privacidade de suas informações. Todos os prestadores de serviços passam por um rigoroso
        processo de verificação para garantir a qualidade e a confiança.
      </SectionContent>
    </Section>
  );
};

export default SecurityTrust;
