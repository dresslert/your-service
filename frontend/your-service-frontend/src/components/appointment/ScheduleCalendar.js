import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScheduleContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.available ? '#28a745' : '#f8f9fa')};
  color: ${(props) => (props.available ? '#fff' : '#000')};
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.available ? '#218838' : '#e2e6ea')};
    color: ${(props) => (props.available ? '#fff' : '#000')};
  }
`;

const ScheduleCalendar = ({ lawyer, appointments }) => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    date: null,
    time: '',
    clientName: ''
  });
  const [confirmMessage, setConfirmMessage] = useState('');

  useEffect(() => {
    const events = appointments.map((appointment) => ({
      title: `Appointment with ${appointment.clientName}`,
      start: new Date(appointment.startTime),
      end: new Date(appointment.endTime),
    }));
    setEvents(events);
  }, [appointments]);

  const handleDateChange = (e) => {
    setNewAppointment({ ...newAppointment, date: e.target.value });
  };

  const handleTimeSelect = (time) => {
    setNewAppointment({ ...newAppointment, time });
    setModalIsOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleConfirmAppointment = () => {
    const { date, time, clientName } = newAppointment;
    if (!clientName) {
      alert('Por favor, insira seu nome');
      return;
    }

    const start = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
    const end = moment(start).add(1, 'hour').toDate();

    const newEvent = {
      start,
      end,
      title: `Appointment with ${clientName}`,
    };
    setEvents([...events, newEvent]);
    console.log('Enviando agendamento para o backend:', newEvent);
    setModalIsOpen(false);
    setConfirmMessage('Agendamento realizado com sucesso!');
    setTimeout(() => setConfirmMessage(''), 5000);
  };

  const renderTimeCards = (date) => {
    const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00'];

    return availableTimes.map((time, index) => {
      const start = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
      const end = moment(start).add(1, 'hour').toDate();

      const isAvailable = events.every(event => {
        return (start >= event.end || end <= event.start);
      });

      return (
        <Card
          key={index}
          available={isAvailable}
          onClick={() => isAvailable && handleTimeSelect(time)}
        >
          {moment(start).format('LT')} - {moment(end).format('LT')}
        </Card>
      );
    });
  };

  return (
    <ScheduleContainer>
      <h2>Agendar um Compromisso</h2>
      {confirmMessage && <p>{confirmMessage}</p>}
      <Form.Group>
        <Form.Label>Selecione a Data:</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={newAppointment.date || ''}
          onChange={handleDateChange}
        />
      </Form.Group>
      {newAppointment.date && (
        <>
          <h3>Horários Disponíveis</h3>
          <CardContainer>
            {renderTimeCards(newAppointment.date)}
          </CardContainer>
        </>
      )}
      <CSSTransition in={modalIsOpen} timeout={300} classNames="modal" unmountOnExit>
        <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Agendar um Compromisso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Seu Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="clientName"
                  placeholder="Digite seu nome"
                  value={newAppointment.clientName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleConfirmAppointment}>
                Confirmar Compromisso
              </Button>
              <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
                Cancelar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </CSSTransition>
    </ScheduleContainer>
  );
};

export default ScheduleCalendar;
