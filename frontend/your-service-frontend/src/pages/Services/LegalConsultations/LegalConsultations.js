import React from 'react';
import ServiceDetails from '../../../components/Services/ServiceDetails';
import Layout from '../../../components/Layout';

const LegalConsultation = () => {
  const handleScheduleConsultation = () => {
    // Lógica para agendar a consulta
    console.log('Consulta agendada!');
    // Aqui você pode adicionar lógica para abrir um modal ou redirecionar para outra página
  };

  const extraInfo = "As consultas jurídicas são realizadas por advogados especializados, através de videochamadas seguras e confidenciais. Para mais informações, entre em contato conosco.";

  return (
    <Layout>
    <ServiceDetails
      title="Consultas Jurídicas (Advogados)"
      description="Consultas e aconselhamento jurídico via videochamada."
      features={[
        "Assessoria jurídica especializada",
        "Revisão de contratos",
        "Orientação para questões legais diversas"
      ]}
      buttonText="Agendar Consulta"
      buttonAction={handleScheduleConsultation}
      extraInfo={extraInfo}
    />
    </Layout>
  );
};

export default LegalConsultation;
