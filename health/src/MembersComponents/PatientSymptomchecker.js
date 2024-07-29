import React, { useState } from 'react';
import PatientHeader from './PatientHeader';

const PatientSymptomchecker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [guidance, setGuidance] = useState('');

  const handleSymptomChange = (e) => {
    const { value } = e.target;
    setSymptoms((prevSymptoms) => [...prevSymptoms, value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating symptom checking logic
    if (symptoms.length > 0) {
      const symptomString = symptoms.join(', ');
      setGuidance(`Based on your symptoms (${symptomString}), you might be experiencing a common cold. Please rest and drink plenty of fluids. If your symptoms persist, consult a healthcare professional.`);
    } else {
      setGuidance('Please select at least one symptom.');
    }
  };

  return (
    <>
      <PatientHeader />
      <div>
        <h2 style={{textAlign:"center"}}>Symptom Checker</h2>
        <form onSubmit={handleSubmit}>
        <div className='contact-form ' style={{marginTop:"25px"}}>
          <label htmlFor="symptom">Select Symptoms</label>
          <select id="symptom" onChange={handleSymptomChange}>
            <option value="">Select</option>
            <option value="fever">Fever</option>
            <option value="cough">Cough</option>
            <option value="headache">Headache</option>
            <option value="fatigue">Fatigue</option>
          </select>
          
          <button type="submit" style={{marginTop:"25px",width:"100%",marginBottom:"25px"}}>Check Symptoms</button>
          {guidance && <div>{guidance}</div>}
          </div>
        </form>
        
      </div>
    </>
  );
};

export default PatientSymptomchecker;
