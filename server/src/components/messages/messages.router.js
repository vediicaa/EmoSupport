// src/components/messages/messages.router.js
const express = require('express');
const messagesController = require('./messages.controller');

const router = express.Router();

// Routes for messages
router.post('/send', messagesController.sendMessage);
router.get('/user/:userId', messagesController.getMessagesByUserId);

module.exports = router;
