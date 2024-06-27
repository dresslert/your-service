import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #007bff;
  border-radius: 0 4px 4px 0;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de busca
    console.log('Buscando por:', query);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Buscar advogados por nome, especialidade..." 
          value={query} 
          onChange={handleInputChange}
          aria-label="Buscar advogados por nome, especialidade"
        />
        <Button type="submit">Buscar</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
