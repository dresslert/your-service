import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchBar from '../../components/search/SearchBar';
// import backgroundImage from '../../assets/background.jpg'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.div`

  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  z-index: 2;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Overlay />
      <Content>
        <Title>Bem-vindo à Plataforma de Advogados</Title>
        <SearchBar />
        <Description>Encontre advogados especializados para suas necessidades jurídicas.</Description>
        <Button>Saiba Mais</Button>
      </Content>
    </HomeContainer>
  );
};

export default Home;
