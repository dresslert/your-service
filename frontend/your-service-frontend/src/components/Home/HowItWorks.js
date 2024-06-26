import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

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

const Icon = styled(FaInfoCircle)`
  margin-right: 0.5rem;
  color: #fff;
`;

const SectionContent = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #fff;
`;

const HowItWork = () => {
  return (
    <Section>
      <SectionTitle>
        <Icon />
        Como Funciona
      </SectionTitle>
      <SectionContent>
        Nossa plataforma conecta você com prestadores de serviços qualificados. Navegue pelos serviços disponíveis,
        escolha o que mais se adequa às suas necessidades e agende uma videochamada com um profissional.
      </SectionContent>
    </Section>
  );
};

export default HowItWork;
