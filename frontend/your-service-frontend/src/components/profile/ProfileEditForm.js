// src/components/ProfileEditForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  color : #ffff;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const ProfileEditForm = ({ lawyer, onSave }) => {
  const [formData, setFormData] = useState(lawyer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <Input 
        type="text"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        placeholder="Especialidade"
      />
      <TextArea 
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Biografia"
        rows="4"
      />
      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default ProfileEditForm;
