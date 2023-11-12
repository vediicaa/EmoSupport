// MessagingPage/index.js
import React from 'react';
import styled from 'styled-components';
import ConversationList from 'components/ConversationList';
import MessageDisplay from 'components/MessageDisplay';
import MessageInputForm from 'components/MessageInputForm';

// Styled container for MessagingPage
const MessagingPageContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

function MessagingPage() {
  return (
    <MessagingPageContainer>
      <ConversationList />
      <MessageDisplay />
      <MessageInputForm />
    </MessagingPageContainer>
  );
}

export default MessagingPage;
