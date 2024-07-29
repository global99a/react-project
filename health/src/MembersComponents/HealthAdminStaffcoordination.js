import React, { useState } from 'react';
import HealthAdminHeader from './HealthAdminHeader';

function HealthAdminStaffcoordination() {
  const initialStaff = [
    { id: 1, name: 'Dr. John Doe', role: 'Healthcare Provider', accessLevel: 'Admin' },
    { id: 2, name: 'Dr. Jane Smith', role: 'Healthcare Provider', accessLevel: 'User' },
    { id: 3, name: 'Pharmacist Alice', role: 'Pharmacist', accessLevel: 'User' }
  ];

  const [staff, setStaff] = useState(initialStaff);
  const [newStaff, setNewStaff] = useState({ name: '', role: '', accessLevel: '' });
  const [editStaff, setEditStaff] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const addStaff = () => {
    setStaff([...staff, { id: staff.length + 1, ...newStaff }]);
    setNewStaff({ name: '', role: '', accessLevel: '' });
  };

  const deleteStaff = (id) => {
    setStaff(staff.filter(member => member.id !== id));
  };

  const editStaffDetails = (member) => {
    setEditStaff(member);
    setNewStaff(member);
  };

  const updateStaff = () => {
    setStaff(staff.map(member => (member.id === editStaff.id ? { ...member, ...newStaff } : member)));
    setEditStaff(null);
    setNewStaff({ name: '', role: '', accessLevel: '' });
  };

  return (
    <>
    <HealthAdminHeader/>
    <div className='container'>
      <h1 style={{textAlign:"center"}}>Staff Coordination</h1>
      <div className='contact-form'>
        <input
          type="text"
          name="name"
          value={newStaff.name}
          onChange={handleInputChange}
          placeholder="Staff Name"
        />
        <input
          type="text"
          name="role"
          value={newStaff.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <input
          type="text"
          name="accessLevel"
          value={newStaff.accessLevel}
          onChange={handleInputChange}
          placeholder="Access Level"
        />
        <button onClick={editStaff ? updateStaff : addStaff}>
          {editStaff ? 'Update Staff' : 'Add Staff'}
        </button>
      </div>
      <div className='contact-form' style={{maxWidth:"800px",marginTop:"25px"}}>
        <h2>Existing Staff Members</h2>
        {staff.map(member => (
          <div key={member.id} style={{margin:"6px"}}>
            <span>{member.name} - {member.role}</span>
            <span style={{marginRight:"5px"}}>Access Level: {member.accessLevel}</span>
            <button onClick={() => editStaffDetails(member)}>Edit</button>
            <button onClick={() => deleteStaff(member.id)} style={{marginLeft:"5px",background:"red"}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HealthAdminStaffcoordination;