import React, { useState } from 'react';
import AdminHeader from './AdminHeader';

function AdminReportGeneration() {
  const [reports, setReports] = useState([
    { id: 1, title: 'Report 1', description: 'Description 1', isActive: true },
    { id: 2, title: 'Report 2', description: 'Description 2', isActive: false },
    { id: 3, title: 'Report 3', description: 'Description 3', isActive: true }
  ]);
  const [newReport, setNewReport] = useState({ title: '', description: '', isActive: true });
  const [editReport, setEditReport] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };

  const createReport = () => {
    setReports([...reports, { id: reports.length + 1, ...newReport }]);
    setNewReport({ title: '', description: '', isActive: true });
  };

  const updateReport = () => {
    setReports(reports.map(report => (report.id === editReport.id ? { ...report, ...newReport } : report)));
    setEditReport(null);
    setNewReport({ title: '', description: '', isActive: true });
  };

  const deleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  const toggleActivation = (id, isActive) => {
    const updatedReports = reports.map(report =>
      report.id === id ? { ...report, isActive: !isActive } : report
    );
    setReports(updatedReports);
  };

  const editReportDetails = (report) => {
    setEditReport(report);
    setNewReport(report);
  };

  const successColor = '#28a745'; // Green color code
  const dangerColor = '#dc3545'; // Red color code

  return (
    <>
      <AdminHeader />
      <div className='container'>
        <h1>Report Generation</h1>
        <div className='contact-form'>
          <input
            type="text"
            name="title"
            value={newReport.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={newReport.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <button
            style={{ backgroundColor: successColor, color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            onClick={editReport ? updateReport : createReport}
          >
            {editReport ? 'Update Report' : 'Create Report'}
          </button>
        </div>
        <div className='contact-form' style={{ maxWidth: "650px", marginTop: '5px' }}>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Activate/Deactivate</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.title}</td>
                  <td>{report.description}</td>
                  <td><button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => editReportDetails(report)}>Edit</button></td>
                  <td><button style={{ backgroundColor: dangerColor, color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => deleteReport(report.id)}>Delete</button></td>
                  <td>
                    <button style={{ backgroundColor: report.isActive ? successColor : dangerColor, color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => toggleActivation(report.id, report.isActive)}>
                      {report.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminReportGeneration;
