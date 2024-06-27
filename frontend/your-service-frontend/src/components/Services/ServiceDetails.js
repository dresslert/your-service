import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: 300% 300%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Container = styled.div`
  background: rgba(44, 62, 80, 0.8);
  backdrop-filter: blur(20px);
  text-align: center;
  padding: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  background: #e7e4f0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #e7e4f0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  font-size: 1.2rem;
  color: #e7e4f0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const FeatureIcon = styled(FaCheckCircle)`
  margin-right: 0.5rem;
  color: #4caf50;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 1rem 2.5rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Info = styled.div`
  margin-top: 2.5rem;
  font-size: 1.2rem;
  color: #e7e4f0;
`;

const ServiceDetails = ({ title, description, features, buttonText, buttonAction, extraInfo }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon />
            {feature}
          </FeatureItem>
        ))}
      </FeaturesList>
      {buttonText && buttonAction && (
        <Button onClick={buttonAction}>{buttonText}</Button>
      )}
      {extraInfo && <Info>{extraInfo}</Info>}
    </Container>
  </Wrapper>
);

export default ServiceDetails;
