// src/components/ProfileInfo.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
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
  color : #ffff;
`;

const Specialty = styled.p`
  margin: 0.5rem 0;
  color : #ffff;
`;

const Bio = styled.p`
  margin: 1rem 0;
  color : #ffff;
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
