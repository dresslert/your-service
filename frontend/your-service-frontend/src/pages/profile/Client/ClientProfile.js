
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from '../../../components/profile/ProfileInfo';
import ProfileEditForm from '../../../components/profile/ProfileEditForm';
import ContactInfo from '../../../components/profile/ContactInfo';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`;

const ClientProfile = () => {
  const [lawyer, setLawyer] = useState({
    avatarUrl: 'https://via.placeholder.com/150',
    name: 'Dr. John Doe',
    specialty: 'Direito Civil',
    bio: 'Advogado com 10 anos de experiência em Direito Civil...',
    email: 'johndoe@example.com',
    phone: '(00) 12345-6789',
  });

  const handleSave = (updatedLawyer) => {
    setLawyer(updatedLawyer);
  };

  return (
    <Container>
      <ProfileInfo lawyer={lawyer} />
      <ProfileEditForm lawyer={lawyer} onSave={handleSave} />
      <ContactInfo email={lawyer.email} phone={lawyer.phone} />
    </Container>
  );
};

export default ClientProfile;
