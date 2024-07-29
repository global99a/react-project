import React, { useState } from 'react';
import HealthAdminHeader from './HealthAdminHeader';

function HealthadminIncidentresponse() {
  const [incidents, setIncidents] = useState([]);
  const [newIncident, setNewIncident] = useState({
    type: '',
    description: '',
    reportedBy: '',
    status: 'Open'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident({ ...newIncident, [name]: value });
  };

  const addIncident = () => {
    if (newIncident.type.trim() !== '' && newIncident.description.trim() !== '' && newIncident.reportedBy.trim() !== '') {
      setIncidents([...incidents, { ...newIncident, id: incidents.length + 1 }]);
      setNewIncident({
        type: '',
        description: '',
        reportedBy: '',
        status: 'Open'
      });
    }
  };

  const updateIncidentStatus = (id, newStatus) => {
    const updatedIncidents = incidents.map(incident =>
      incident.id === id ? { ...incident, status: newStatus } : incident
    );
    setIncidents(updatedIncidents);
  };

  return (
    <>
    <HealthAdminHeader/>
    <div className='container'>
      <h1 style={{textAlign:"center"}}>Incident Response</h1>
      <div className='contact-form'>
        <input
          type="text"
          name="type"
          value={newIncident.type}
          onChange={handleInputChange}
          placeholder="Incident Type"
        />
        <input
          type="text"
          name="description"
          value={newIncident.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="reportedBy"
          value={newIncident.reportedBy}
          onChange={handleInputChange}
          placeholder="Reported By"
        />
        <button onClick={addIncident}>Add Incident</button>
      </div>
      <div className='contact-form' style={{marginTop:"6px",maxWidth:"800px"}}>
        <h2>Existing Incidents</h2>
        {incidents.length === 0 ? (
          <p>No incidents found.</p>
        ) : (
          <ul style={{margin:"15px"}}>
            {incidents.map(incident => (
              <li key={incident.id}>
                <strong>Type:</strong> {incident.type}<br />
                <strong>Description:</strong> {incident.description}<br />
                <strong>Reported By:</strong> {incident.reportedBy}<br />
                <strong>Status:</strong> {incident.status}<br />
                {incident.status === 'Open' && (
                  <button onClick={() => updateIncidentStatus(incident.id, 'Resolved')}>Resolve</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  );
}

export default HealthadminIncidentresponse;