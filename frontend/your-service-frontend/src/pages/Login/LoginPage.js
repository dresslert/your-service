import React from 'react';
import styled from 'styled-components';
import FormUtils from '../../components/Utils/FormUtils'; // Certifique-se de ajustar o caminho correto do componente

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utiliza toda a altura da viewport */
`;

const LoginPageContainer = styled.div`
  background-image: linear-gradient(135deg, #0e1e3a 10%, #1a416f 100%);
  font-family: 'Roboto', sans-serif; /* Exemplo de fonte para o corpo */
  margin: 0;
  padding: 0;
  text-align: center;
`;

const LoginPage = () => {
  // Defina os campos do formulário que deseja exibir
  const formFields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      icon: 'FiUser',
      label: 'Username'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      icon: 'FiLock',
      label: 'Password'
    }
    // Adicione outros campos conforme necessário
  ];

  // Links adicionais abaixo do formulário
  const additionalLinks = [
    { to: '/recover-password', label: 'Esqueceu seu login?' },
    { to: '/register', label: 'Cadastrar' }
  ];

  // Título do formulário
  const formTitle = 'Login';

  return (
    <PageContainer>
      <LoginPageContainer>
        <FormUtils
          title={formTitle}
          fields={formFields}
          submitText="Entrar"
          additionalLinks={additionalLinks}
        />
      </LoginPageContainer>
    </PageContainer>
  );
};

export default LoginPage;
