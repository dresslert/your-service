import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: #34495e;
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const ServiceCard = ({ title, link, image }) => {
  return (
    <Card>
      <Link to={link}>
        <Image src={`/images/${image}`} alt={title} />
        <Title>{title}</Title>
        <p>Descubra mais sobre nossos serviços de {title}</p>
      </Link>
    </Card>
  );
};

export default ServiceCard;