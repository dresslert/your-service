import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: rgba(44, 62, 80, 0.8);
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid #00d1ff;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none; /* Remove underline from link */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
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