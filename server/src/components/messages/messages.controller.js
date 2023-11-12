// src/components/messages/messages.controller.js
const Message = require('./messages.model');
const messageValidation = require('./messages.validation');

// Example controller methods
const sendMessage = async (req, res) => {
  try {
    // Validate request body
    const { error } = messageValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create and save message
    const { senderId, receiverId, content } = req.body;
    const newMessage = new Message({ senderId, receiverId, content });
    const savedMessage = await newMessage.save();

    res.json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMessagesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Retrieve messages for the given user
    const messages = await Message.find({ $or: [{ senderId: userId }, { receiverId: userId }] });

    res.json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  sendMessage,
  getMessagesByUserId,
};
