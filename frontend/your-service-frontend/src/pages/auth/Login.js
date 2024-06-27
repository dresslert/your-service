import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #333;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Link = styled.a`
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #34495e;
`;

const Login = () => {
  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form>
        <Label>
          Email:
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Senha:
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Entrar</Button>
      </Form>
      <Link href="/reset-password">Esqueceu sua senha?</Link>
      <Footer>
        Não tem uma conta? <Link href="/register-client">Registre-se como Cliente</Link> ou <Link href="/register-lawyer">Registre-se como Advogado</Link>
      </Footer>
    </LoginContainer>
  );
};

export default Login;
