import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiCalendar, FiClock, FiCheckCircle } from 'react-icons/fi'; // Importando ícones do Feather Icons

const Container = styled.div`
  color: #333; /* Cor de texto ajustada para melhor legibilidade */
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #3490dc; /* Cor do título ajustada para destacar */
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 3rem; /* Aumentado o espaçamento entre as seções */
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: center; /* Centralizando os links */
  gap: 1rem;
  margin-bottom: 2rem;
`;

const LinkButton = styled(Link)`
  background-color: #3490dc;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 0.5rem;
  text-align: center;
  transition: background-color 0.3s ease; /* Adicionado efeito de transição */

  &:hover {
    background-color: #2779bd;
  }
`;

const AppointmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AppointmentItem = styled.li`
  background-color: #f9f9f9; /* Fundo mais suave para os itens da lista */
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppointmentInfo = styled.div`
  flex: 1;
`;

const IconWrapper = styled.div`
  background-color: #3490dc;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  background-color: #f0f0f0; /* Fundo suave para o histórico */
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HistoryInfo = styled.div`
  flex: 1;
`;

const Dashboard = () => {
  const upcomingAppointments = [
    { id: 1, service: 'Consulta Jurídica', date: '2024-06-25', professional: 'Dr. John Doe' },
    { id: 2, service: 'Consultoria Financeira', date: '2024-06-26', professional: 'Jane Smith' },
  ];

  const appointmentHistory = [
    { id: 1, service: 'Consulta Jurídica', date: '2024-06-22', professional: 'Dr. John Doe', status: 'Concluída' },
    { id: 2, service: 'Consultoria Financeira', date: '2024-06-18', professional: 'Jane Smith', status: 'Concluída' },
  ];

  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <Layout>
      <Container>
        <Heading>Bem-vindo ao Dashboard</Heading>
        <Paragraph>Escolha um serviço para agendar uma consulta.</Paragraph>

        <QuickLinks>
          <LinkButton to="/schedule?service=legal">Consulta Jurídica</LinkButton>
          <LinkButton to="/schedule?service=accounting">Consulta Contábil</LinkButton>
          <LinkButton to="/schedule?service=career">Consultoria de Carreira</LinkButton>
          <LinkButton to="/schedule?service=marketing">Consultoria de Marketing</LinkButton>
        </QuickLinks>

        <Section>
          <SubHeading>Nova Consulta</SubHeading>
          <AppointmentList>
            {upcomingAppointments.map(appointment => (
              <AppointmentItem key={appointment.id}>
                <IconWrapper>
                  <FiCalendar size={20} />
                </IconWrapper>
                <AppointmentInfo>
                  <h3>{appointment.service}</h3>
                  <p>Data: {appointment.date}</p>
                  <p>Profissional: {appointment.professional}</p>
                </AppointmentInfo>
                <LinkButton to={`/schedule?service=${encodeURIComponent(appointment.service.toLowerCase())}`}>
                  Agendar
                </LinkButton>
              </AppointmentItem>
            ))}
          </AppointmentList>
        </Section>

        <Section>
          <SubHeading>Consultas Agendadas</SubHeading>
          <AppointmentList>
            {upcomingAppointments.map(appointment => (
              <AppointmentItem key={appointment.id}>
                <IconWrapper>
                  <FiClock size={20} />
                </IconWrapper>
                <AppointmentInfo>
                  <h3>{appointment.service}</h3>
                  <p>Data: {appointment.date}</p>
                  <p>Profissional: {appointment.professional}</p>
                </AppointmentInfo>
                <LinkButton to={`/schedule?service=${encodeURIComponent(appointment.service.toLowerCase())}`}>
                  Alterar
                </LinkButton>
              </AppointmentItem>
            ))}
          </AppointmentList>
        </Section>

        <Section>
          <SubHeading>Histórico de Consultas</SubHeading>
          <HistoryList>
            {appointmentHistory.map(appointment => (
              <HistoryItem key={appointment.id}>
                <IconWrapper>
                  <FiCheckCircle size={20} />
                </IconWrapper>
                <HistoryInfo>
                  <h3>{appointment.service}</h3>
                  <p>Data: {appointment.date}</p>
                  <p>Profissional: {appointment.professional}</p>
                  <p>Status: {appointment.status}</p>
                </HistoryInfo>
              </HistoryItem>
            ))}
          </HistoryList>
        </Section>

        <Section>
          <Heading>Estatísticas</Heading>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#3490dc" strokeWidth={2} /> {/* Ajustado estilo da linha */}
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} /> {/* Ajustado estilo da linha */}
            </LineChart>
          </ResponsiveContainer>
        </Section>
      </Container>
    </Layout>
  );
};

export default Dashboard;
