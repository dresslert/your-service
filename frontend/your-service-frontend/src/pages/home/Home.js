import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchBar from '../../components/search/SearchBar';
import backgroundVideo from '../../assets/homevideo.mp4';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Ajuste a opacidade conforme necessário */
  z-index: 1;
`;

const Content = styled.div`
  z-index: 2;
  animation: ${fadeIn} 1s ease-in-out;
  color: #fff;
  max-width: 800px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1.75rem;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.25rem;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <VideoBackground autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </VideoBackground>
      <Overlay />
      <Content>
        <Title>Advoguei</Title>
        <SearchBar />
        <Description>
          Facilitando sua vida para você priorizar o que importa.
        </Description>
        <Button>Saiba Mais</Button>
      </Content>
    </HomeContainer>
  );
};

export default Home;
