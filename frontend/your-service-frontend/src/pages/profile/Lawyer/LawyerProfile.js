// src/pages/profile/LawyerProfile.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from '../../../components/profile/ProfileInfo';
import ProfileEditForm from '../../../components/profile/ProfileEditForm';
import ContactInfo from '../../../components/profile/ContactInfo';
import Expertise from '../../../components/profile/Expertise';
import Education from '../../../components/profile/Education';
import Testimonials from '../../../components/profile/Testimonials';
import Portfolio from '../../../components/profile/Portfolio';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`;

const LawyerProfile = () => {
  const [lawyer, setLawyer] = useState({
    avatarUrl: 'https://via.placeholder.com/150',
    name: 'Dr. John Doe',
    specialty: 'Direito Civil',
    bio: 'Advogado com 10 anos de experiência em Direito Civil...',
    email: 'johndoe@example.com',
    phone: '(00) 12345-6789',
    areas: ['Direito do Consumidor', 'Direito de Família', 'Direito Empresarial'],
    education: ['Bacharel em Direito - Universidade X', 'Mestrado em Direito - Universidade Y'],
    testimonials: [
      { name: 'Cliente 1', text: 'Excelente advogado, muito atencioso e profissional.' },
      { name: 'Cliente 2', text: 'Resolvemos nosso caso rapidamente, recomendo!' }
    ],
    portfolio: [
      { case: 'Caso 1', description: 'Descrição do caso 1' },
      { case: 'Caso 2', description: 'Descrição do caso 2' }
    ]
  });

  const handleSave = (updatedLawyer) => {
    setLawyer(updatedLawyer);
  };

  return (
    <Container>
      <ProfileInfo lawyer={lawyer} />
      <ProfileEditForm lawyer={lawyer} onSave={handleSave} />
      <ContactInfo email={lawyer.email} phone={lawyer.phone} />
      <Expertise areas={lawyer.areas} />
      <Education degrees={lawyer.education} />
      <Testimonials testimonials={lawyer.testimonials} />
      <Portfolio cases={lawyer.portfolio} />
    </Container>
  );
};

export default LawyerProfile;
