import React from 'react';
import styled, { keyframes } from 'styled-components';
import FormVertical from '../../components/Utils/FormVertical'; // Certifique-se de ajustar o caminho correto do componente

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  animation: ${fadeIn} 1.5s ease-in-out;
  max-width: 40%;
  padding: 20px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin: 20px 0;
    color: #ffff;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #ffff;
  }

`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 400px;
  width: 100%;

  form {
    width: 100%;
  }
`;

const ServicesList = styled.div`
  margin-top: 20px;
  text-align: left;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 18px;
      color: #ffff;

      &:before {
        content: "✓";
        margin-right: 8px;
        color: #2aa33b;
      }
    }
  }
`;

const LoginPage = () => {
  const formFields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Usuário',
      icon: 'FiUser',
      label: 'Usuário'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Senha',
      icon: 'FiLock',
      label: 'Senha'
    }
  ];

  const additionalLinks = [
    { to: '/recover-password', label: 'Esqueceu seu login?' },
    { to: '/register', label: 'Cadastrar' }
  ];

  const formTitle = 'LOGIN';

  const services = [
    "Consultas Jurídicas (Advogados)",
    "Consultas Contábeis (Contadores)",
    "Consultoria de Carreira (Coaches)",
    "Consultoria de Marketing",
    "Consultoria de TI",
    "Telemedicina (Médicos)",
    "Terapia Online (Psicólogos)",
    "Consultoria Nutricional",
    "Treinamento Fitness Online (Personal Trainers)",
    "Coaching de Vida (Life Coaches)",
    "Aulas Particulares Online (Tutores)",
    "Aulas de Idiomas",
    "Aulas de Música Online",
  ];

  return (
    <PageContainer>
      <LeftSection>
        <h1>Bem-vindo ao Serviços Profissionais Remotos</h1>
        <h2>Facilitando o acesso a profissionais qualificados</h2>
        <ServicesList>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </ServicesList>
      </LeftSection>
      <RightSection>
        <FormVertical
          title={formTitle}
          fields={formFields}
          submitText="LOGIN"
          additionalLinks={additionalLinks}
        />
      </RightSection>
    </PageContainer>
  );
};

export default LoginPage;
