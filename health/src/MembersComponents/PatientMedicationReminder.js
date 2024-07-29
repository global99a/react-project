import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientMedicationReminder = () => {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleAddMedication = () => {
    if (name && schedule) {
      setMedications([...medications, { name, schedule }]);
      setConfirmation('Medication added successfully.');
      setName('');
      setSchedule('');
    } else {
      setConfirmation('Please enter medication name and schedule.');
    }
  };

  const handleRemoveMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
    setConfirmation('Medication removed successfully.');
  };

  return (
    <>
      <PatientHeader />
      <div className="medication-container contact-form">
        <h2>Medication Reminders</h2>
        <div>
          <input
            type="text"
            placeholder="Medication Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Medication Schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
          <button onClick={handleAddMedication}>Add Medication</button>
        </div>
        {confirmation && <div>{confirmation}</div>}
        {medications.map((medication, index) => (
          <div key={index} className="medication-item">
            <span>{medication.name} - {medication.schedule}</span>
            <button onClick={() => handleRemoveMedication(index)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PatientMedicationReminder;
