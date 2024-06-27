import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background: rgb(25,24,24);
  background: linear-gradient(90deg, rgba(25,24,24,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 20px;
  }

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #2c3e50;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  align-items: center;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #007bff;
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
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
  padding: 15px;
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FormLogin = () => {
  return (
    <FormContainer>
      <Title>Login</Title>
      <Label>
        Email:
        <InputWrapper>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Input type="email" name="email" placeholder="Digite seu email" required />
        </InputWrapper>
      </Label>
      <Label>
        Senha:
        <InputWrapper>
          <Icon>
            <FaLock />
          </Icon>
          <Input type="password" name="password" placeholder="Digite sua senha" required />
        </InputWrapper>
      </Label>
      <Button type="submit">Entrar</Button>
      <LinkWrapper>
        <Link href="#">Esqueceu sua senha?</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="#">Não tem uma conta? Registre-se como Cliente ou Registre-se como Advogado</Link>
      </LinkWrapper>
    </FormContainer>
  );
};

export default FormLogin;
