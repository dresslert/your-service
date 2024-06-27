import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainContent = styled.main`
  margin-left: 250px; /* Espaço para a sidebar */
  padding: 5rem;
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
`;

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContainer>
      <Header />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <MainContent isOpen={isOpen}>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;

