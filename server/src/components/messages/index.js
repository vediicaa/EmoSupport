// src/components/messages/index.js
const messagesController = require('./messages.controller');
const messagesRouter = require('./messages.router');
const messagesValidation = require('./messages.validation');

module.exports = {
  messagesController,
  messagesRouter,
  messagesValidation,
};
