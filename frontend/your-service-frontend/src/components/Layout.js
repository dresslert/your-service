// components/Layout.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const Content = styled.div`
  background-image: linear-gradient(135deg, #0e1e3a 10%, #1a416f 100%);
  font-family: 'Roboto', sans-serif; /* Exemplo de fonte para o corpo */
  margin: 0;
  padding: 0;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <header className="header">
        <Navbar />
      </header>
      <Content>
        {children}
      </Content>
      <footer className="footer">
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;
