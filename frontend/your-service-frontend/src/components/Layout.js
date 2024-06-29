import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import backgroundVideo from '../assets/homevideo.mp4';

import Header from './Header';
import Footer from './Footer';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Mantém o vídeo no fundo */
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1; /* Garante que o conteúdo esteja acima do vídeo */
`;

const Layout = () => {
  const [isOpen] = useState(false);

  return (
    <AppContainer>
      <Header />
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <MainContent isOpen={isOpen}>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
