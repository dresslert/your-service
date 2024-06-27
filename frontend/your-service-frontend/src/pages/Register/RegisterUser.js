import React, { useState } from 'react';
import styled from 'styled-components';
import FormGrid from '../../components/Utils/FormGrid'; // Verifique o caminho correto do componente conforme necessário

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utiliza toda a altura da viewport */
`;

const LoginPageContainer = styled.div`
  background-image: linear-gradient(135deg, #0e1e3a 10%, #1a416f 100%);
  font-family: 'Roboto', sans-serif; /* Exemplo de fonte para o corpo */
  margin: 0;
  padding: 0;
  text-align: center;
`;

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ChoiceCard = styled.div`
  background-color: ${(props) => (props.isSelected ? '#4CAF50' : '#f2f2f2')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const USER_FIELDS = {
  client: [
    { name: 'username', type: 'text', placeholder: 'Username', icon: 'FiUser', label: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password', icon: 'FiLock', label: 'Password' },
    { name: 'email', type: 'email', placeholder: 'Email', icon: 'FiMail', label: 'Email' },
    { name: 'phone_number', type: 'text', placeholder: 'Phone Number', icon: 'FiPhone', label: 'Phone Number' },
    // Outros campos específicos para cliente, como date_of_birth, etc.
  ],
  professional: [
    { name: 'username', type: 'text', placeholder: 'Username', icon: 'FiUser', label: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password', icon: 'FiLock', label: 'Password' },
    { name: 'email', type: 'email', placeholder: 'Email', icon: 'FiMail', label: 'Email' },
    { name: 'phone_number', type: 'text', placeholder: 'Phone Number', icon: 'FiPhone', label: 'Phone Number' },
    { name: 'specialization', type: 'text', placeholder: 'Specialization', icon: 'FiBriefcase', label: 'Specialization' },
    { name: 'license_number', type: 'text', placeholder: 'License Number', icon: 'FiAward', label: 'License Number' },
    { name: 'years_of_experience', type: 'number', placeholder: 'Years of Experience', icon: 'FiCalendar', label: 'Years of Experience' },
    // Outros campos específicos para profissional
  ]
};

const RegisterUser = () => {
  const [userType, setUserType] = useState('client');

  const handleUserTypeChange = (type) => setUserType(type);

  const renderFields = () => USER_FIELDS[userType];

  return (
    <PageContainer>
      <LoginPageContainer>
        <ChoiceContainer>
          <ChoiceCard isSelected={userType === 'client'} onClick={() => handleUserTypeChange('client')}>
            Client
          </ChoiceCard>
          <ChoiceCard isSelected={userType === 'professional'} onClick={() => handleUserTypeChange('professional')}>
            Professional
          </ChoiceCard>
        </ChoiceContainer>
        <FormGrid
          title="Register"
          fields={renderFields()}
          submitText="Register"
          additionalLinks=""
          endpoint="/api/users/register/"
        />
      </LoginPageContainer>
    </PageContainer>
  );
};

export default RegisterUser;
