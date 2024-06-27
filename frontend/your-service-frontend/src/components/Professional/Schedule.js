// pages/Schedule.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProfessionalAvailability from '../components/ProfessionalAvailability';

const Schedule = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Agendar Consulta</h1>
      <ProfessionalAvailability professionalId={id} />
    </div>
  );
};

export default Schedule;
