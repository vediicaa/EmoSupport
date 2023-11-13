const express = require('express');
const conversationController = require('./conversation.controller');

const router = express.Router();

// Create a new conversation
router.post('/create', conversationController.createConversation);

// Get a conversation by ID
router.get('/:conversationId', conversationController.getConversationById);

// Send a message in a conversation
router.post('/:conversationId/messages', conversationController.sendMessage);

// Get all messages in a conversation
router.get('/:conversationId/messages', conversationController.getConversationMessages);

// Get all conversations for a user
router.get('/user/:userId', conversationController.getUserConversations);

// Add a participant to a conversation
router.post('/:conversationId/participants', conversationController.addParticipant);

// Remove a participant from a conversation
router.delete('/:conversationId/participants/:userId', conversationController.removeParticipant);

// Update conversation details
router.put('/:conversationId', conversationController.updateConversation);

// Delete a conversation
router.delete('/:conversationId', conversationController.deleteConversation);

module.exports = router;
