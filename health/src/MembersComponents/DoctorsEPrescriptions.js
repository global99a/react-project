import React, { useState } from 'react';
import DoctorHeader from './DoctorHeader';

const DoctorEprescriptions = () => {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [patientName, setPatientName] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);

  // Function to add a new e-prescription
  const addPrescription = () => {
    if (!medication || !dosage || !patientName) {
      alert('Please fill in all fields.');
      return;
    }

    const newPrescription = {
      id: prescriptions.length + 1,
      medication: medication,
      dosage: dosage,
      patient: patientName,
      date: new Date().toLocaleDateString(),
    };

    setPrescriptions([...prescriptions, newPrescription]);
    setMedication('');
    setDosage('');
    setPatientName('');
  };

  // Function to remove a prescription
  const removePrescription = (prescriptionId) => {
    const updatedPrescriptions = prescriptions.filter((prescription) => prescription.id !== prescriptionId);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <>
      <DoctorHeader />
      <div className='container'>
        <h2 style={{textAlign:"center"}}>E-Prescriptions</h2>
        <div className='contact-form'>
          <h3>Add E-Prescription</h3>
          <input
            type="text"
            placeholder="Medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <button onClick={addPrescription}>Add Prescription</button>
        </div>

        <div className='contact-form'>
          <h3>Prescriptions</h3>
          <ul>
            {prescriptions.map((prescription) => (
              <li key={prescription.id}>
                {prescription.medication} - {prescription.dosage} - {prescription.patient} - {prescription.date}
                <button onClick={() => removePrescription(prescription.id)} style={{background:"red"}}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DoctorEprescriptions;
