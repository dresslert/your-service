import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SearchContainer = styled.div`
  background: rgb(51,42,42);
  background: linear-gradient(90deg, rgba(51,42,42,1) 100%, rgba(211,211,224,1) 100%, rgba(211,211,224,1) 100%);
  padding: 40px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    padding: 30px;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #999;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const SpecialtySelect = styled.select`
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #999;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const LawyerList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 20px 0;
`;

const LawyerItem = styled.li`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
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
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
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
  color: #fff;
  
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #fff;
  margin-top: 20px;
  text-align: center;
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
      <Title>Search Lawyers</Title>
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
      <Subtitle>{filteredLawyers.length} lawyer(s) found</Subtitle>
    </SearchContainer>
  );
};

export default LawyerSearch;
