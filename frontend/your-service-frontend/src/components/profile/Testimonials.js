// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  margin-top: 2rem;
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const TestimonialTitle = styled.h3`
  margin-bottom: 1rem;
  color : #ffff;
`;

const TestimonialItem = styled.div`
  margin-bottom: 1rem;
  color : #ffff;
`;

const TestimonialName = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color : #ffff;
`;

const TestimonialText = styled.p`
  margin: 0;
  color : #ffff;
`;

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialsContainer>
      <TestimonialTitle>Avaliações e Testemunhos</TestimonialTitle>
      {testimonials.map((testimonial, index) => (
        <TestimonialItem key={index}>
          <TestimonialName>{testimonial.name}</TestimonialName>
          <TestimonialText>"{testimonial.text}"</TestimonialText>
        </TestimonialItem>
      ))}
    </TestimonialsContainer>
  );
};

export default Testimonials;
