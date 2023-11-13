const Conversation = require('../models/conversation.model');

const createConversation = async (req, res) => {
  try {
    const { participants, name } = req.body;

    const existingConversation = await Conversation.findOne({
      participants: { $all: participants },
    });

    if (existingConversation) {
      return res.status(400).json({ error: 'Conversation already exists' });
    }

    const newConversation = new Conversation({ participants, name });
    await newConversation.save();

    res.status(201).json({ message: 'Conversation created successfully', conversation: newConversation });
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getConversationById = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    res.status(200).json({ conversation });
  } catch (error) {
    console.error('Error fetching conversation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { content, sender } = req.body;
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    conversation.messages.push({ content, sender });
    conversation.lastActivity = new Date();
    await conversation.save();

    res.status(201).json({ message: 'Message sent successfully', conversation });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getConversationMessages = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserConversations = async (req, res) => {
  try {
    const userId = req.params.userId;

    const conversations = await Conversation.find({ participants: userId });

    res.status(200).json({ conversations });
  } catch (error) {
    console.error('Error fetching user conversations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addParticipant = async (req, res) => {
  try {
    const { userId } = req.body;
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    if (!conversation.participants.includes(userId)) {
      conversation.participants.push(userId);
      await conversation.save();
    }

    res.status(200).json({ message: 'Participant added successfully', conversation });
  } catch (error) {
    console.error('Error adding participant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeParticipant = async (req, res) => {
  try {
    const { userId } = req.params;
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    conversation.participants.pull(userId);
    await conversation.save();

    res.status(200).json({ message: 'Participant removed successfully', conversation });
  } catch (error) {
    console.error('Error removing participant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateConversation = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    const { name } = req.body;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    conversation.name = name;
    await conversation.save();

    res.status(200).json({ message: 'Conversation updated successfully', conversation });
  } catch (error) {
    console.error('Error updating conversation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteConversation = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    await conversation.remove();

    res.status(200).json({ message: 'Conversation deleted successfully' });
  } catch (error) {
    console.error('Error deleting conversation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createConversation,
  getConversationById,
  sendMessage,
  getConversationMessages,
  getUserConversations,
  addParticipant,
  removeParticipant,
  updateConversation,
  deleteConversation,
};
