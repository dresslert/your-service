// src/pages/profile/LawyerProfile.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from '../../../components/profile/ProfileInfo';
import ProfileEditForm from '../../../components/profile/ProfileEditForm';
import ContactInfo from '../../../components/profile/ContactInfo';
import Expertise from '../../../components/profile/Expertise';
import Education from '../../../components/profile/Education';

const Container = styled.div`
  padding: 2rem;
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
    education: ['Bacharel em Direito - Universidade X', 'Mestrado em Direito - Universidade Y']
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
    </Container>
  );
};

export default LawyerProfile;
