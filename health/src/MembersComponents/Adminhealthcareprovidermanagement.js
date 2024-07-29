import React, { useState } from 'react';
import AdminHeader from './AdminHeader';

function Adminhealthcareprovidermanagement() {
  const [providers, setProviders] = useState([
    { id: 1, name: 'Provider 1', specialty: 'Specialty 1', email: 'provider1@example.com', contact: '1234567890', gender: 'Male', isActive: true },
    { id: 2, name: 'Provider 2', specialty: 'Specialty 2', email: 'provider2@example.com', contact: '9876543210', gender: 'Female', isActive: false },
    { id: 3, name: 'Provider 3', specialty: 'Specialty 3', email: 'provider3@example.com', contact: '5678901234', gender: 'Male', isActive: true }
  ]);
  const [newProvider, setNewProvider] = useState({ name: '', specialty: '', email: '', contact: '', gender: '', isActive: true });
  const [editProvider, setEditProvider] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProvider({ ...newProvider, [name]: value });
  };

  const createProvider = () => {
    setProviders([...providers, { id: providers.length + 1, ...newProvider }]);
    setNewProvider({ name: '', specialty: '', email: '', contact: '', gender: '', isActive: true });
  };

  const updateProvider = () => {
    setProviders(providers.map(provider => (provider.id === editProvider.id ? { ...provider, ...newProvider } : provider)));
    setEditProvider(null);
    setNewProvider({ name: '', specialty: '', email: '', contact: '', gender: '', isActive: true });
  };

  const deleteProvider = (id) => {
    setProviders(providers.filter(provider => provider.id !== id));
  };

  const toggleActivation = (id, isActive) => {
    const updatedProviders = providers.map(provider =>
      provider.id === id ? { ...provider, isActive: !isActive } : provider
    );
    setProviders(updatedProviders);
  };

  const editProviderDetails = (provider) => {
    setEditProvider(provider);
    setNewProvider(provider);
  };

  return (
    <>
      <AdminHeader/>
      <div className='container'>
        <h1 style={{textAlign:"center"}}>Healthcare Provider Management</h1>
        <div className='contact-form' style={{maxWidth:"900px",marginTop:"25px"}}>
          <input
            type="text"
            name="name"
            value={newProvider.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="specialty"
            value={newProvider.specialty}
            onChange={handleInputChange}
            placeholder="Specialty"
          />
          <input
            type="email"
            name="email"
            value={newProvider.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="contact"
            value={newProvider.contact}
            onChange={handleInputChange}
            placeholder="Contact"
          />
          <select
            name="gender"
            value={newProvider.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={editProvider ? updateProvider : createProvider} style={{width:"100%",background:"#28a745"}}>
            {editProvider ? 'Update Provider' : 'Create Provider'}
          </button>
          </div>
        <div className='contact-form' style={{maxWidth:"900px"}}>
        
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Specialty</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Gender</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Activate/Deactivate</th>
    </tr>
  </thead>
  <tbody>
    {providers.map(provider => (
      <tr key={provider.id}>
        <td>{provider.name}</td>
        <td>{provider.specialty}</td>
        <td>{provider.email}</td>
        <td>{provider.contact}</td>
        <td>{provider.gender}</td>
        <td><button onClick={() => editProviderDetails(provider)} >Edit</button></td>
        <td><button onClick={() => deleteProvider(provider.id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button></td>
        <td>
          <button onClick={() => toggleActivation(provider.id, provider.isActive)} style={{ backgroundColor: provider.isActive ? 'red' : '#28a745', color: 'white' }}>
            {provider.isActive ? 'Deactivate' : 'Activate'}
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

export default Adminhealthcareprovidermanagement;
