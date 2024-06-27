// src/components/ProfileInfo.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background: rgb(25, 24, 24);
  background: linear-gradient(90deg, rgba(25, 24, 24, 1) 0%, rgba(211, 211, 224, 1) 100%);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  margin: 0.5rem 0;
`;

const Specialty = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const Bio = styled.p`
  margin: 1rem 0;
  color: #333;
`;

const ProfileInfo = ({ lawyer }) => {
  return (
    <ProfileContainer>
      <Avatar src={lawyer.avatarUrl} alt={`${lawyer.name}'s avatar`} />
      <Name>{lawyer.name}</Name>
      <Specialty>{lawyer.specialty}</Specialty>
      <Bio>{lawyer.bio}</Bio>
    </ProfileContainer>
  );
};

export default ProfileInfo;
