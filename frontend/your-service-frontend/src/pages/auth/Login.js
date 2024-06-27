import React from 'react';
import styled from 'styled-components';
import FormLogin from '../../components/auth/FormLogin';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  padding: 20px;
`;


const Login = () => {
  return (
    <LoginContainer>
      <FormLogin />
    </LoginContainer>
  );
};

export default Login;
