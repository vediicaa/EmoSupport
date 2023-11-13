import React, { useState, useEffect } from 'react';
import { Container } from '../../shared/layout';
import { ConversationListContainer } from './style';

function ConversationList() {
  // State to store the list of conversations
  const [conversations, setConversations] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // Replace this with actual API call or data fetching logic
    const fetchData = async () => {
      try {
        // Simulate fetching conversations from an API
        const response = await fetch('https://api.example.com/conversations');
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Container>
      <ConversationListContainer>
        <h2>Conversations</h2>
        {/* Render the list of conversations */}
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              {/* Render conversation details */}
              <p>{conversation.sender}</p>
              <p>{conversation.message}</p>
            </li>
          ))}
        </ul>
      </ConversationListContainer>
    </Container>
  );
}

export default ConversationList;
