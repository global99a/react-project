import React, { useState } from 'react';
import AdminHeader from './AdminHeader';

function AdminSystemConfiguration() {
  const [configurations, setConfigurations] = useState([
    { id: 1, name: 'Configuration 1', value: 'Value 1', isActive: true },
    { id: 2, name: 'Configuration 2', value: 'Value 2', isActive: false },
    { id: 3, name: 'Configuration 3', value: 'Value 3', isActive: true }
  ]);
  const [newConfiguration, setNewConfiguration] = useState({ name: '', value: '', isActive: true });
  const [editConfiguration, setEditConfiguration] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConfiguration({ ...newConfiguration, [name]: value });
  };

  const createConfiguration = () => {
    setConfigurations([...configurations, { id: configurations.length + 1, ...newConfiguration }]);
    setNewConfiguration({ name: '', value: '', isActive: true });
  };

  const updateConfiguration = () => {
    setConfigurations(configurations.map(config => (config.id === editConfiguration.id ? { ...config, ...newConfiguration } : config)));
    setEditConfiguration(null);
    setNewConfiguration({ name: '', value: '', isActive: true });
  };

  const deleteConfiguration = (id) => {
    setConfigurations(configurations.filter(config => config.id !== id));
  };

  const toggleActivation = (id, isActive) => {
    const updatedConfigurations = configurations.map(config =>
      config.id === id ? { ...config, isActive: !isActive } : config
    );
    setConfigurations(updatedConfigurations);
  };

  const editConfigurationDetails = (config) => {
    setEditConfiguration(config);
    setNewConfiguration(config);
  };

  return (
    <>
     <AdminHeader/>
      <div className='container'>
        <h1 style={{textAlign:"center"}}>System Configuration</h1>
        <div className='contact-form' style={{maxWidth:"100%"}}>
          <input
            type="text"
            name="name"
            value={newConfiguration.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="value"
            value={newConfiguration.value}
            onChange={handleInputChange}
            placeholder="Value"
          />
          <button onClick={editConfiguration ? updateConfiguration : createConfiguration}>
            {editConfiguration ? 'Update Configuration' : 'Create Configuration'}
          </button>
          {configurations.map(config => (
            <div key={config.id} style={{margin:"15px"}}>
              <span>{config.name} - {config.value}</span>
              <button onClick={() => editConfigurationDetails(config)}>Edit</button>
              <button onClick={() => deleteConfiguration(config.id)} style={{marginLeft:"15px",background:"#dc3545"}}>Delete</button>
              <button onClick={() => toggleActivation(config.id, config.isActive)} style={{marginLeft:"15px",background:"#28a745"}}>
                {config.isActive ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminSystemConfiguration;
