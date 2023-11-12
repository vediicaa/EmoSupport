// src/components/messages/messages.validation.js
const Joi = require('joi');

const messageSchema = Joi.object({
  senderId: Joi.string().required(),
  receiverId: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = messageSchema;
