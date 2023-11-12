// MessageDisplay/index.js
import React from 'react';
import { Container } from '../../shared/layout';
import { MessageDisplayContainer } from './style';

function MessageDisplay() {
  // Fetch and display messages for the selected conversation
  return (
    <Container>
      <MessageDisplayContainer>
        <h2>Selected Conversation</h2>
        {/* Render the messages */}
      </MessageDisplayContainer>
    </Container>
  );
}

export default MessageDisplay;
