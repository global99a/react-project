import React, { useState } from 'react';
import HealthAdminHeader from './HealthAdminHeader';

function HealthadminComplianceoversight() {
  // State to manage compliance-related issues
  const [complianceIssues, setComplianceIssues] = useState([]);
  const [newIssue, setNewIssue] = useState('');

  // Function to add a new compliance issue
  const addComplianceIssue = () => {
    if (newIssue.trim() !== '') {
      setComplianceIssues([...complianceIssues, newIssue.trim()]);
      setNewIssue('');
    }
  };

  // Function to delete a compliance issue
  const deleteComplianceIssue = (index) => {
    const updatedIssues = [...complianceIssues];
    updatedIssues.splice(index, 1);
    setComplianceIssues(updatedIssues);
  };

  return (
    <>
    <HealthAdminHeader/>
    <div>
      <h1>Compliance Oversight</h1>
      {/* Add new compliance issue form */}
      <div>
        <input
          type="text"
          value={newIssue}
          onChange={(e) => setNewIssue(e.target.value)}
          placeholder="Enter new compliance issue"
        />
        <button onClick={addComplianceIssue}>Add Issue</button>
      </div>
      {/* Display existing compliance issues */}
      <div>
        <h2>Existing Compliance Issues</h2>
        {complianceIssues.length === 0 ? (
          <p>No compliance issues found.</p>
        ) : (
          <ul>
            {complianceIssues.map((issue, index) => (
              <li key={index}>
                {issue}
                <button onClick={() => deleteComplianceIssue(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </>
  );
}

export default HealthadminComplianceoversight;