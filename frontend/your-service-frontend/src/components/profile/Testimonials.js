// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  margin-top: 2rem;
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
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
