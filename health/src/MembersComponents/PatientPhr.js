import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientPhr = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ date: '', medicalHistory: '', prescriptions: '' });

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setNewRecord({ ...newRecord, [key]: value });
  };

  const addRecord = () => {
    if (newRecord.date && newRecord.medicalHistory && newRecord.prescriptions) {
      setHealthRecords([...healthRecords, { ...newRecord }]);
      setNewRecord({ date: '', medicalHistory: '', prescriptions: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <PatientHeader />
      <div className="health-records-container contact-form">
        <h2>Personal Health Records</h2>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={newRecord.date}
          onChange={(e) => handleInputChange(e, 'date')}
        />
        <label htmlFor="medicalHistory">Medical History:</label>
        <textarea
          id="medicalHistory"
          value={newRecord.medicalHistory}
          onChange={(e) => handleInputChange(e, 'medicalHistory')}
        />
        <label htmlFor="prescriptions">Prescriptions:</label>
        <textarea
          id="prescriptions"
          value={newRecord.prescriptions}
          onChange={(e) => handleInputChange(e, 'prescriptions')}
        />
        <button onClick={addRecord}>Add Record</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Medical History</th>
              <th>Prescriptions</th>
            </tr>
          </thead>
          <tbody>
            {healthRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.medicalHistory}</td>
                <td>{record.prescriptions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientPhr;
