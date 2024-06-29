import React from 'react';
import styled, { keyframes } from 'styled-components';
import LawyerSearch from '../../components/search/LawyerSearch';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 5rem;
  animation: ${fadeIn} 1s ease-in-out;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const lawyers = [
  { id: 1, name: 'Alice Smith', specialty: 'Family Law', rating: 4.5 },
  { id: 2, name: 'Bob Johnson', specialty: 'Criminal Law', rating: 4.0 },
  { id: 3, name: 'Carol White', specialty: 'Corporate Law', rating: 4.8 },
  { id: 4, name: 'David Brown', specialty: 'Environmental Law', rating: 3.9 },
  { id: 5, name: 'Eva Green', specialty: 'Tax Law', rating: 4.6 },
  { id: 6, name: 'Frank Black', specialty: 'Intellectual Property', rating: 4.7 },
  { id: 7, name: 'Grace Miller', specialty: 'Labor Law', rating: 4.3 },
  { id: 8, name: 'Hank Moore', specialty: 'Real Estate Law', rating: 4.1 },
];

const LawyerSearchPage = () => {
  return (
    <PageContainer>
      <LawyerSearch lawyers={lawyers} />
    </PageContainer>
  );
};

export default LawyerSearchPage;
