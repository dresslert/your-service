// components/ProfessionalList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfessionalList = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    // Placeholder para dados simulados, substitua pelo fetch real
    const sampleProfessionals = [
      { id: 1, name: 'Dr. John Doe', description: 'Especialista em Direito' },
      { id: 2, name: 'Jane Smith', description: 'Consultora Financeira' }
    ];
    setProfessionals(sampleProfessionals);
  }, []);

  return (

    <div className="space-y-4">
      {professionals.map(professional => (
        <div key={professional.id} className="p-4 border rounded shadow-sm">
          <h3 className="text-xl">{professional.name}</h3>
          <p>{professional.description}</p>
          <Link to={`/schedule/${professional.id}`} className="bg-blue-500 text-white p-2 rounded">Ver Disponibilidade</Link>
        </div>
      ))}
    </div>

  );
};

export default ProfessionalList;
