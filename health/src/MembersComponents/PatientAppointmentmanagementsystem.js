import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientAppointmentmanagement = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = () => {
    setAppointments([...appointments, { date: '', time: '', provider: '' }]);
  };

  const handleRemoveAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };

  return (
    <>
      <PatientHeader />
      <div className='container'>
        <h2 style={{textAlign:"center"}}>Appointment Management</h2>
        <div className='contact-form' style={{maxWidth:"100%",marginTop:"25px"}}>
          <button onClick={handleAddAppointment}>Add Appointment</button>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Provider</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="date"
                      value={appointment.date}
                      onChange={(e) => {
                        const newAppointments = [...appointments];
                        newAppointments[index].date = e.target.value;
                        setAppointments(newAppointments);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      value={appointment.time}
                      onChange={(e) => {
                        const newAppointments = [...appointments];
                        newAppointments[index].time = e.target.value;
                        setAppointments(newAppointments);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={appointment.provider}
                      onChange={(e) => {
                        const newAppointments = [...appointments];
                        newAppointments[index].provider = e.target.value;
                        setAppointments(newAppointments);
                      }}
                      placeholder="Healthcare Provider"
                    />
                  </td>
                  <td>
                    <button onClick={() => handleRemoveAppointment(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PatientAppointmentmanagement;
