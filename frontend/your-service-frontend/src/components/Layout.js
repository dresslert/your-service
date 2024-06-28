import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainContent = styled.main`

  padding: 5rem;
  background: #ECF0F1;

`;

const Layout = () => {
  const [isOpen] = useState(false);


  return (
    <AppContainer>
      <Header />

      <MainContent isOpen={isOpen}>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;

