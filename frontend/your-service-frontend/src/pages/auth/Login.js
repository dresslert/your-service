import React from 'react';
import styled, {keyframes} from 'styled-components';
import FormLogin from '../../components/auth/FormLogin';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;


const Login = () => {
  return (
    <LoginContainer>
      <FormLogin />
    </LoginContainer>
  );
};

export default Login;
