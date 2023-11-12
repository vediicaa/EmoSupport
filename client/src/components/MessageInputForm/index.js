// MessageInputForm/index.js
import React, { useState } from 'react';
import { MessageForm, Input, Button } from './style';

function MessageInputForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message submitted:', message);
    // You can use an API call to send the message to the server
    // Reset the message input
    setMessage('');
  };

  return (
    <MessageForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <Button type="submit">Send</Button>
    </MessageForm>
  );
}

export default MessageInputForm;
