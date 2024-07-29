import React, { useState } from 'react';
import AdminHeader from './AdminHeader';

function AdminDataoversight() {
  const [dataIntegrity, setDataIntegrity] = useState([]);

  const handleDataIntegrityCheck = () => {
    // Simulated data integrity check
    alert('Data integrity check completed.');
  };

  const handleDataBreachResponse = () => {
    // Simulated data breach response
    alert('Data breach response initiated.');
  };

  return (
    <>
   <AdminHeader/>
      <div>
        <h1>Data Oversight</h1>
        <button onClick={handleDataIntegrityCheck}>Check Data Integrity</button>
        <button onClick={handleDataBreachResponse}>Respond to Data Breach</button>
      </div>
    </>
  );
}

export default AdminDataoversight;
