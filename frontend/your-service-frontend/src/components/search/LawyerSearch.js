import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SearchContainer = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(333deg, rgba(2,0,36,1) 0%, rgba(12,12,13,0.8995973389355743) 100%, rgba(21,0,255,0.8631827731092436) 100%);
  padding: 20px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    padding: 15px;
    margin: 15px 0;
  }

  @media (max-width: 400px) {
    padding: 10px;
    margin: 10px 0;
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #a0a0a0;
  }

  @media (max-width: 600px) {
    width: calc(100% - 30px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 20px);
    font-size: 14px;
  }
`;

const SpecialtySelect = styled.select`
  width: calc(100% - 40px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #a0a0a0;
  }

  @media (max-width: 600px) {
    width: calc(100% - 30px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 20px);
    font-size: 14px;
  }
`;

const LawyerList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  background: linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(255, 255, 255, 1) 100%);

`;

const LawyerItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

const LawyerInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    padding: 8px 16px;
  }
`;

const PageInfo = styled.span`
  font-size: 16px;
  color : #ffff;
  
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Text = styled.h2`
  color : #ffff;
`; 

const TextP = styled.p`
  color : #ffff;
`;

const LawyersPerPage = 3;

const LawyerSearch = ({ lawyers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const specialties = [...new Set(lawyers.map(lawyer => lawyer.specialty))];

  const filteredLawyers = lawyers.filter(lawyer => 
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSpecialty === '' || lawyer.specialty === selectedSpecialty)
  );

  const totalPages = Math.ceil(filteredLawyers.length / LawyersPerPage);
  const currentLawyers = filteredLawyers.slice(
    (currentPage - 1) * LawyersPerPage,
    currentPage * LawyersPerPage
  );

  const handleLawyerClick = (id) => {
    navigate(`/lawyer-profile/${id}`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {[...Array(fullStars)].map((_, index) => <FaStar key={`full-${index}`} color="gold" />)}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, index) => <FaRegStar key={`empty-${index}`} color="gold" />)}
      </>
    );
  };

  return (
    <SearchContainer>
      <Text>Search Lawyers</Text>
      <SearchInput
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SpecialtySelect
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        <option value="">All Specialties</option>
        {specialties.map((specialty, index) => (
          <option key={index} value={specialty}>{specialty}</option>
        ))}
      </SpecialtySelect>
      <LawyerList>
        {currentLawyers.map((lawyer) => (
          <LawyerItem key={lawyer.id} onClick={() => handleLawyerClick(lawyer.id)}>
            <LawyerInfo>
              <p><strong>Name:</strong> {lawyer.name}</p>
              <p><strong>Specialty:</strong> {lawyer.specialty}</p>
            </LawyerInfo>
            <Rating>
              {renderStars(lawyer.rating)}
            </Rating>
          </LawyerItem>
        ))}
      </LawyerList>
      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
      <TextP>{filteredLawyers.length} lawyer(s) found</TextP>
    </SearchContainer>
  );
};

export default LawyerSearch;
