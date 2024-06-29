import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ContactInfo from '../../components/profile/ContactInfo';
import Expertise from '../../components/profile/Expertise';
import Education from '../../components/profile/Education';
import Testimonials from '../../components/profile/Testimonials';
import Portfolio from '../../components/profile/Portfolio';

import Schedule from '../../components/appointment/Schedule';

const DetailContainer = styled.div`
  padding: 5rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 5rem;
`;

const LawyerDetails = () => {
  const { id } = useParams();
  const lawyers = [
    {
      id: 1,
      avatarUrl: 'https://via.placeholder.com/150',
      name: 'Alice Smith',
      specialty: 'Family Law',
      rating: 4.5,
      bio: 'Experienced in family law...',
      email: 'alice.smith@example.com',
      phone: '(123) 456-7890',
      areas: ['Divorce', 'Child Custody'],
      education: ['JD - Harvard Law School'],
      testimonials: [
        { name: 'Client A', text: 'Alice was very helpful!' },
        { name: 'Client B', text: 'Great experience working with Alice.' }
      ],
      portfolio: [
        { case: 'Case A', description: 'Handled a complex divorce case.' },
        { case: 'Case B', description: 'Won a child custody battle.' }
      ],
      appointments: [
        { clientName: 'John Doe', startTime: '2024-07-01T10:00:00', endTime: '2024-07-01T11:00:00' },
        { clientName: 'Jane Doe', startTime: '2024-07-02T12:00:00', endTime: '2024-07-02T13:00:00' }
      ]
    },
    // Other lawyers...
  ];
  
  const lawyer = lawyers.find(lawyer => lawyer.id === parseInt(id));

  if (!lawyer) {
    return <p>Lawyer not found</p>;
  }

  return (
    <DetailContainer>
      <ProfileInfo lawyer={lawyer} />
      <ContactInfo email={lawyer.email} phone={lawyer.phone} />
      <Expertise areas={lawyer.areas} />
      <Education degrees={lawyer.education} />
      <Testimonials testimonials={lawyer.testimonials} />
      <Portfolio cases={lawyer.portfolio} />
      <Schedule lawyer={lawyer} appointments={lawyer.appointments} />
    </DetailContainer>
  );
};

export default LawyerDetails;
