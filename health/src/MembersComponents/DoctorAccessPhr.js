import React, { useState } from 'react';
import DoctorHeader from './DoctorHeader';

const DoctorAccessPhr = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [newMedicalEntry, setNewMedicalEntry] = useState('');

  const [prescriptions, setPrescriptions] = useState([]);
  const [newPrescription, setNewPrescription] = useState('');

  const [vitalSigns, setVitalSigns] = useState([]);
  const [newVitalSigns, setNewVitalSigns] = useState('');

  const [exerciseData, setExerciseData] = useState([]);
  const [newExerciseData, setNewExerciseData] = useState('');

  const addMedicalHistory = () => {
    if (newMedicalEntry.trim() === '') {
      alert('Please enter a medical history entry.');
      return;
    }
    setMedicalHistory([...medicalHistory, newMedicalEntry]);
    setNewMedicalEntry('');
  };

  const addPrescription = () => {
    if (newPrescription.trim() === '') {
      alert('Please enter a prescription.');
      return;
    }
    setPrescriptions([...prescriptions, newPrescription]);
    setNewPrescription('');
  };

  const addVitalSigns = () => {
    if (newVitalSigns.trim() === '') {
      alert('Please enter vital signs data.');
      return;
    }
    setVitalSigns([...vitalSigns, newVitalSigns]);
    setNewVitalSigns('');
  };

  const addExerciseData = () => {
    if (newExerciseData.trim() === '') {
      alert('Please enter exercise data.');
      return;
    }
    setExerciseData([...exerciseData, newExerciseData]);
    setNewExerciseData('');
  };

  return (
    <>
      <DoctorHeader />
      <div className='container'>
        <h2 style={{textAlign:"center"}}>Personal Health Records (PHR)</h2>
        <div  className='contact-form'>
          <h3>Medical History:</h3>
          <ul>
            {medicalHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add medical history"
            value={newMedicalEntry}
            onChange={(e) => setNewMedicalEntry(e.target.value)}
          />
          <button onClick={addMedicalHistory}>Add</button>
        </div>

        <div className='contact-form'>
          <h3>Prescriptions:</h3>
          <ul>
            {prescriptions.map((prescription, index) => (
              <li key={index}>{prescription}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add prescription"
            value={newPrescription}
            onChange={(e) => setNewPrescription(e.target.value)}
          />
          <button onClick={addPrescription}>Add</button>
        </div>

        <div className='contact-form'>
          <h3>Vital Signs:</h3>
          <ul>
            {vitalSigns.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add vital signs data"
            value={newVitalSigns}
            onChange={(e) => setNewVitalSigns(e.target.value)}
          />
          <button onClick={addVitalSigns}>Add</button>
        </div>

        <div className='contact-form'>
          <h3>Exercise Data:</h3>
          <ul>
            {exerciseData.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add exercise data"
            value={newExerciseData}
            onChange={(e) => setNewExerciseData(e.target.value)}
          />
          <button onClick={addExerciseData}>Add</button>
        </div>
      </div>
    </>
  );
};

export default DoctorAccessPhr;
