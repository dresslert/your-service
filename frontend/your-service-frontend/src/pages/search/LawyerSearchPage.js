import React from 'react';
import styled from 'styled-components';
import LawyerSearch from '../../components/search/LawyerSearch';

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LawyerSearchPage = () => {
  return (
    <PageContainer>
      <LawyerSearch />
    </PageContainer>
  );
};

export default LawyerSearchPage;
