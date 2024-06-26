import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCommentsDollar, FaLaptopCode, FaMedkit, FaChalkboardTeacher } from 'react-icons/fa';
import ServiceCard from '../../components/Home/CardsHome';
import HowItWorks from '../../components/Home/HowItWorks';
import  SecurityTrust from '../../components/Home/ SecurityTrust';
import StoriesSuccess from '../../components/Home/StoriesSuccess';
import CallAction from '../../components/Home/CallAction';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const Container = styled.div`
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-in;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-in;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 2s ease-in;
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-decoration: underline;
  margin-top: 2rem;
  display: block;
  font-size: 1.25rem;
  &:hover {
    color: #2980b9;
  }
`;

const Section = styled.div`
  margin: 4rem 0;
  animation: ${fadeIn} 2s ease-in;
`;

const SectionContent = styled.p`
  font-size: 1.25rem;
`;

const services = [
  { name: 'Consultas Jurídicas', link: "/consultas-juridicas", icon: <FaBalanceScale /> },
  { name: 'Consultas Contábeis', link: "/consultas-contabeis", icon: <FaCommentsDollar /> },
  { name: 'Consultoria de TI', link: "/consultoria-ti", icon: <FaLaptopCode /> },
  { name: 'Telemedicina', link: "/telemedicina", icon: <FaMedkit /> },
  { name: 'Aulas Particulares Online', link: "/aulas-particulares", icon: <FaChalkboardTeacher /> },
];
// Home component
const Home = () => {
  return (
    <Container>
      <Title>Bem-vindo aos Serviços Profissionais Remotos</Title>
      <Subtitle>Oferecemos serviços profissionais via videochamada para sua conveniência.</Subtitle>

      {/* Services Section */}
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard 
              key={index} 
              icon={service.icon} 
              link={service.link} 
              name={service.name} 
          />
        ))}
      </ServicesGrid>
      <StyledLink to="/services">Veja todos os serviços</StyledLink>

      {/* Como Funciona Section */}
      <Section>
        <SectionContent>
          <HowItWorks />
        </SectionContent>
      </Section>

      {/* Seguranca e Confianca Section */}
      <Section>
        <SectionContent>
          <SecurityTrust />
        </SectionContent>
      </Section>

      {/* Historias de Sucesso Section */}
      <Section>
        <SectionContent>
          <StoriesSuccess />
        </SectionContent>
      </Section>

      {/* Chamada para Acao Section */}
      <Section>
        <SectionContent>
          <CallAction />
        </SectionContent>
      </Section>

    </Container>
  );
};

export default Home;
