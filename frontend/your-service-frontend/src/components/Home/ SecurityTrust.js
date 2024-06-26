import React from 'react';
import styled from 'styled-components';

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
