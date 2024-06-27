import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const localizer = momentLocalizer(moment);

const ScheduleContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '2rem',
    border: 'none',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'visible',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
  }
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.available ? '#28a745' : '#f8f9fa')};
  color: ${(props) => (props.available ? '#fff' : '#000')};
`;

const ScheduleCalendar = ({ lawyer, appointments }) => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    start: null,
    end: null,
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

  const handleSelectSlot = ({ start, end }) => {
    // Verificar se o slot está disponível
    const isSlotAvailable = events.every(event => {
      return (
        (start >= event.end || end <= event.start)
      );
    });

    if (!isSlotAvailable) {
      alert('This time slot is not available. Please choose another time.');
      return;
    }

    setNewAppointment({ ...newAppointment, start, end });
    setModalIsOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleConfirmAppointment = () => {
    const { start, end, clientName } = newAppointment;
    if (!clientName) {
      alert('Please enter your name');
      return;
    }
    const newEvent = {
      start,
      end,
      title: `Appointment with ${clientName}`,
    };
    setEvents([...events, newEvent]);
    // Simulação de envio do novo agendamento para o backend
    console.log('Sending appointment to backend:', newEvent);
    setModalIsOpen(false);
    setConfirmMessage('Appointment successfully scheduled!');
    setTimeout(() => setConfirmMessage(''), 5000);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#007bff';
    let borderColor = '#007bff';
    if (event.status === 'confirmed') {
      backgroundColor = '#28a745';
      borderColor = '#28a745';
    }
    return {
      style: {
        backgroundColor,
        borderColor,
        borderRadius: '8px',
        opacity: isSelected ? 0.8 : 1,
        color: '#fff',
        border: '0',
        display: 'block',
      },
    };
  };

  const renderTimeCards = (date) => {
    // Verificar horários disponíveis para a data selecionada
    const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00']; // Exemplo de horários disponíveis

    return availableTimes.map((time, index) => {
      const start = moment(date).set({ hour: parseInt(time.split(':')[0]), minute: parseInt(time.split(':')[1]) });
      const end = moment(start).add(1, 'hour');
      const isAvailable = events.every(event => {
        return (
          (start >= moment(event.end) || end <= moment(event.start))
        );
      });

      return (
        <Card
          key={index}
          available={isAvailable}
          onClick={() => handleSelectSlot({ start, end })}
        >
          {start.format('LT')} - {end.format('LT')}
        </Card>
      );
    });
  };

  return (
    <ScheduleContainer>
      <h2>Schedule an Appointment</h2>
      {confirmMessage && <p>{confirmMessage}</p>}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="calendar"
        selectable
        onSelectSlot={handleSelectSlot}
        views={['month', 'week', 'day']}
        step={30}
        timeslots={2}
        eventPropGetter={eventStyleGetter}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Schedule Appointment"
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>Schedule an Appointment</h2>
          <label>
            Your Name:
            <Input
              type="text"
              name="clientName"
              placeholder="Enter your name"
              value={newAppointment.clientName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Start Time:
            <DatePicker
              selected={newAppointment.start}
              onChange={(date) => setNewAppointment({ ...newAppointment, start: date })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </label>
          <label>
            End Time:
            <DatePicker
              selected={newAppointment.end}
              onChange={(date) => setNewAppointment({ ...newAppointment, end: date })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </label>
          <Button onClick={handleConfirmAppointment}>Confirm Appointment</Button>
          <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
        </ModalContent>
      </Modal>
      <h3>Available Times</h3>
      <CardContainer>
        {renderTimeCards(newAppointment.start || moment())}
      </CardContainer>
    </ScheduleContainer>
  );
};

export default ScheduleCalendar;
