
import React, { useState, useEffect } from 'react';
import DoctorHeader from './DoctorHeader';

function DoctorSecureMessaging() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to fetch messages from the server
  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Function to send a new message to the server
  const sendMessage = async () => {
    try {
      await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })
      });
      setNewMessage('');
      // After sending the message, fetch updated messages
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Fetch messages when the component mounts
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
    <DoctorHeader/>
    <div>
      <h1>Secure Messaging</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
</>
  );
}

export default DoctorSecureMessaging;