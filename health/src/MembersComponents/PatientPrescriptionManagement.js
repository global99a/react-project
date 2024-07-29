import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientPrescriptionManagement = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  const handleAddPrescription = () => {
    setPrescriptions([...prescriptions, { name: '', refills: '', adherenceAlerts: false }]);
  };

  return (
    <><PatientHeader/>
    <div>
      <h2>Prescription Management</h2>
      <button onClick={handleAddPrescription}>Add Prescription</button>
      {prescriptions.map((prescription, index) => (
        <div key={index}>
          <input
            type="text"
            value={prescription.name}
            onChange={(e) => {
              const newPrescriptions = [...prescriptions];
              newPrescriptions[index].name = e.target.value;
              setPrescriptions(newPrescriptions);
            }}
            placeholder="Prescription Name"
          />
          <input
            type="number"
            value={prescription.refills}
            onChange={(e) => {
              const newPrescriptions = [...prescriptions];
              newPrescriptions[index].refills = e.target.value;
              setPrescriptions(newPrescriptions);
            }}
            placeholder="Refills"
          />
          <label>
            <input
              type="checkbox"
              checked={prescription.adherenceAlerts}
              onChange={(e) => {
                const newPrescriptions = [...prescriptions];
                newPrescriptions[index].adherenceAlerts = e.target.checked;
                setPrescriptions(newPrescriptions);
              }}
            />
            Adherence Alerts
          </label>
        </div>
      ))}
    </div>
    </>
  );
};

export default PatientPrescriptionManagement;
