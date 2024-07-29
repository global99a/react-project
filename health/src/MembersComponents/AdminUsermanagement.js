import React, { useState } from 'react';
import AdminHeader from './AdminHeader';

function AdminUsermanagement() {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1', isActive: true },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2', isActive: false },
    { id: 3, username: 'user3', email: 'user3@example.com', password: 'password3', isActive: true }
  ]);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', isActive: true });
  const [editUser, setEditUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const createUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ username: '', email: '', password: '', isActive: true });
  };

  const updateUser = () => {
    setUsers(users.map(user => (user.id === editUser.id ? { ...user, ...newUser } : user)));
    setEditUser(null);
    setNewUser({ username: '', email: '', password: '', isActive: true });
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const toggleActivation = (id, isActive) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, isActive: !isActive } : user
    );
    setUsers(updatedUsers);
  };

  const editUserDetails = (user) => {
    setEditUser(user);
    setNewUser(user);
  };

  return (
    <>
    <AdminHeader/>
      <div className='container'>
        <h1 style={{textAlign:"center"}}>User Management</h1>
        <div className='contact-form' style={{maxWidth:"800px"}}>
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <button onClick={editUser ? updateUser : createUser} style={{backgroundColor: '#28a745'
}}>
            {editUser ? 'Update User' : 'Create User'}
          </button>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Activate/Deactivate</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td><button onClick={() => editUserDetails(user)} style={{border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>Edit</button></td>
                  <td><button onClick={() => deleteUser(user.id)} style={{background:"#dc3545",border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>Delete</button></td>
                  <td>
                  <button
  style={{ backgroundColor: user.isActive ? '#28a745' : '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
  onClick={() => toggleActivation(user.id, user.isActive)}
>
  {user.isActive ? 'Deactivate' : 'Activate'}
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

export default AdminUsermanagement;
