import React, { useState } from 'react';
import PharmacistHeader from './PharmacistHeader';

function PharmacyMedicationDispensation() {
  const initialPrescriptions = [
    { id: 1, medication: 'Medication A', dosage: '10mg', prescriber: 'Dr. Smith', patient: 'John Doe', status: 'Prescribed' },
    { id: 2, medication: 'Medication B', dosage: '20mg', prescriber: 'Dr. Johnson', patient: 'Jane Doe', status: 'Prescribed' },
    { id: 3, medication: 'Medication C', dosage: '15mg', prescriber: 'Dr. Brown', patient: 'Alice Smith', status: 'Prescribed' }
  ];

  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
  const [dispensedMedications, setDispensedMedications] = useState([]);

  const dispenseMedication = (prescriptionId) => {
    const prescriptionIndex = prescriptions.findIndex(prescription => prescription.id === prescriptionId);
    if (prescriptionIndex !== -1) {
      const updatedPrescriptions = [...prescriptions];
      updatedPrescriptions[prescriptionIndex].status = 'Dispensed';
      setPrescriptions(updatedPrescriptions);

      const dispensedMedication = updatedPrescriptions[prescriptionIndex];
      setDispensedMedications([...dispensedMedications, dispensedMedication]);

    }
  };

  return (
    <>
    <PharmacistHeader/>
    <div className="pharmacy-medication-dispensation"> {/* Apply class name */}
      <h1>Medication Dispensation</h1>
      {/* Display prescribed medications */}
      <div className="prescriptions"> {/* Apply class name */}
        <h2>Prescribed Medications</h2>
        {prescriptions.length === 0 ? (
          <p>No prescriptions available for dispensation.</p>
        ) : (
          <ul>
            {prescriptions.map(prescription => (
              <li key={prescription.id}>
                <div>
                  <strong>Medication:</strong> {prescription.medication}<br />
                  <strong>Dosage:</strong> {prescription.dosage}<br />
                  <strong>Prescribed By:</strong> {prescription.prescriber}<br />
                  <strong>Patient:</strong> {prescription.patient}<br />
                  <strong>Status:</strong> {prescription.status}<br />
                </div>
                {prescription.status === 'Prescribed' && (
                  <button onClick={() => dispenseMedication(prescription.id)}>Dispense Medication</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="dispensed-medications"> {/* Apply class name */}
        <h2>Dispensed Medications</h2>
        {dispensedMedications.length === 0 ? (
          <p>No medications have been dispensed yet.</p>
        ) : (
          <ul>
            {dispensedMedications.map(dispensedMedication => (
              <li key={dispensedMedication.id}>
                <div>
                  <strong>Medication:</strong> {dispensedMedication.medication}<br />
                  <strong>Dosage:</strong> {dispensedMedication.dosage}<br />
                  <strong>Prescribed By:</strong> {dispensedMedication.prescriber}<br />
                  <strong>Patient:</strong> {dispensedMedication.patient}<br />
                  <strong>Status:</strong> {dispensedMedication.status}<br />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  );
}

export default PharmacyMedicationDispensation;
