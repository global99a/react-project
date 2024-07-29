import React, { useState, useEffect } from 'react';
import DoctorHeader from './DoctorHeader';
import { Line } from 'react-chartjs-2';

function DoctorAppointmentManagement() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [appointmentsPerDay, setAppointmentsPerDay] = useState({});

  useEffect(() => {
    countAppointmentsPerDay();
  }, [appointments]);

const addAppointment = () => {
  const newAppointment = {
    id: appointments.length + 1,
    patientName: patientName,
    date: date,
  };
  setAppointments([...appointments, newAppointment]);
  setPatientName('');
  setDate('');
};


  // Function to remove an appointment
  const removeAppointment = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  // Function to count appointments per day
  const countAppointmentsPerDay = () => {
    const counts = {};
    appointments.forEach((appointment) => {
      const day = appointment.date;
      counts[day] = counts[day] ? counts[day] + 1 : 1;
    });
    setAppointmentsPerDay(counts);
  };

  // Prepare data for the Line chart
  const chartData = {
    labels: Object.keys(appointmentsPerDay),
    datasets: [
      {
        label: 'Appointments per Day',
        data: Object.values(appointmentsPerDay),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <DoctorHeader/>
      <h1 style={{textAlign:"center"}}>Doctor Appointment Management</h1>
      <div className='container contact-form' style={{marginTop:"45px"}}>
        <h2>Add Appointment</h2>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addAppointment}>
          Add Appointment
        </button>
      </div>

      <div className='container'>
        <h2>Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.patientName} - {appointment.date}
              <button onClick={() => removeAppointment(appointment.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='container'>
        <h2>Appointment Trends</h2>
        <div className='chart-container'>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default DoctorAppointmentManagement;
