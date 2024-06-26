import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block;
  background: rgba(44, 62, 80, 0.8);
  border: 2px solid #00d1ff;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none; /* Remove underline from link */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00d1ff;
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #ecf0f1;
`;

const ServiceCard = ({ icon, link, name }) => {
  return (
    <Card to={link}>
      <Icon>{icon}</Icon>
      <ServiceName>{name}</ServiceName>
    </Card>
  );
};

export default ServiceCard;
