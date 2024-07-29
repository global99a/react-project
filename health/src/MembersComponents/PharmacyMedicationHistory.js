import React, { useState, useEffect } from 'react';
import PharmacistHeader from './PharmacistHeader';

function PharmacyMedicationHistory() {
  // State to manage patient medication history
  const [medicationHistory, setMedicationHistory] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');

  // Simulated patient data (dummy data)
  const patients = ['Patient 1', 'Patient 2', 'Patient 3'];

  // Simulated medication history data (dummy data)
  const fetchMedicationHistory = (patient) => {
    // Simulated API call to fetch medication history based on patient
    // Replace this with actual API call in real implementation
    switch (patient) {
      case 'Patient 1':
        setMedicationHistory([
          { id: 1, medication: 'Medication A', dosage: '10mg', date: '2023-01-01', notes: 'None' },
          { id: 2, medication: 'Medication B', dosage: '20mg', date: '2023-01-05', notes: 'None' },
        ]);
        break;
      case 'Patient 2':
        setMedicationHistory([
          { id: 1, medication: 'Medication C', dosage: '5mg', date: '2023-02-10', notes: 'None' },
          { id: 2, medication: 'Medication D', dosage: '15mg', date: '2023-02-15', notes: 'None' },
        ]);
        break;
      case 'Patient 3':
        setMedicationHistory([
          { id: 1, medication: 'Medication E', dosage: '30mg', date: '2023-03-20', notes: 'None' },
          { id: 2, medication: 'Medication F', dosage: '25mg', date: '2023-03-25', notes: 'None' },
        ]);
        break;
      default:
        setMedicationHistory([]);
    }
  };

  // Effect to fetch medication history when patient changes
  useEffect(() => {
    if (selectedPatient !== '') {
      fetchMedicationHistory(selectedPatient);
    }
  }, [selectedPatient]);

  return (
    <>
    <PharmacistHeader/>
    <div>
      <h1>Medication History</h1>
      {/* Patient selection dropdown */}
      <div>
        <label>
          Select Patient:
          <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient} value={patient}>{patient}</option>
            ))}
          </select>
        </label>
      </div>
      {/* Display medication history */}
      {medicationHistory.length > 0 && (
        <div>
          <h2>Medication History for {selectedPatient}</h2>
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Date</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {medicationHistory.map(history => (
                <tr key={history.id}>
                  <td>{history.medication}</td>
                  <td>{history.dosage}</td>
                  <td>{history.date}</td>
                  <td>{history.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>

  );
}

export default PharmacyMedicationHistory;