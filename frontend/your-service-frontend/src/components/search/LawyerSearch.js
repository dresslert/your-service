import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const SearchInput = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 16px;
`;

const LawyerList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LawyerItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

const lawyers = [
  { name: 'Alice Smith', specialty: 'Family Law' },
  { name: 'Bob Johnson', specialty: 'Criminal Law' },
  { name: 'Carol White', specialty: 'Corporate Law' },
];

const LawyerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContainer>
      <h2>Search Lawyers</h2>
      <SearchInput
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LawyerList>
        {filteredLawyers.map((lawyer, index) => (
          <LawyerItem key={index}>
            <p><strong>Name:</strong> {lawyer.name}</p>
            <p><strong>Specialty:</strong> {lawyer.specialty}</p>
          </LawyerItem>
        ))}
      </LawyerList>
    </SearchContainer>
  );
};

export default LawyerSearch;
