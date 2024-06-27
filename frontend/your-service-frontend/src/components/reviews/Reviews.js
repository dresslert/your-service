
import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  margin-top: 2rem;
`;

const ReviewItem = styled.div`
  background: #f1f1f1;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Reviewer = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  margin: 0;
`;

const Reviews = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <Reviewer>{review.reviewer}</Reviewer>
          <ReviewText>{review.text}</ReviewText>
        </ReviewItem>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;
