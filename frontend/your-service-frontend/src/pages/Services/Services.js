import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../../components/Services/ServiceCard'; // Componente para os cards de serviços
import Layout from '../../components/Layout';

const Container = styled.div`
  color: #fff;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const services = {
  "Consultoria": [
    { title: "Consultas Jurídicas", link: "/services/legal-consultation", image: "juridicas.jpg" },
    { title: "Consultas Contábeis", link: "/consultas-contabeis", image: "contabeis.jpg" },
    { title: "Consultoria de Carreira", link: "/consultoria-carreira", image: "carreira.jpg" },
    { title: "Consultoria de Marketing", link: "/consultoria-marketing", image: "marketing.jpg" },
    { title: "Consultoria de TI", link: "/consultoria-ti", image: "ti.jpg" },
  ],
  "Saúde": [
    { title: "Telemedicina", link: "/telemedicina", image: "telemedicina.jpg" },
    { title: "Terapia Online", link: "/terapia-online", image: "terapia.jpg" },
    { title: "Consultoria Nutricional", link: "/consultoria-nutricional", image: "nutricional.jpg" },
    { title: "Treinamento Fitness Online", link: "/treinamento-fitness", image: "fitness.jpg" },
  ],
  "Educação": [
    { title: "Coaching de Vida", link: "/coaching-vida", image: "coaching.jpg" },
    { title: "Aulas Particulares Online", link: "/aulas-particulares", image: "particulares.jpg" },
    { title: "Aulas de Idiomas", link: "/aulas-idiomas", image: "idiomas.jpg" },
    { title: "Aulas de Música Online", link: "/aulas-musica", image: "musica.jpg" },
  ],
};

const Services = () => {
  return ( 
    <Layout>
    <Container>
      <Title>Nossos Serviços</Title>
      {Object.keys(services).map(category => (
        <div key={category}>
          <SectionTitle>{category}</SectionTitle>
          <CardsContainer>
            {services[category].map(service => (
              <ServiceCard 
                key={service.title} 
                title={service.title} 
                link={service.link} 
                image={service.image}
              />
            ))}
          </CardsContainer>
        </div>
      ))}
    </Container> 
    </Layout>
  );
};

export default Services;