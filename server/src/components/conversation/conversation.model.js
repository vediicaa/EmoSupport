const mongoose = require('mongoose');
const { ErrorHandler } = require('../../utils/error');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // Add other message fields as needed
  },
  { timestamps: true }
);

const ConversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    messages: [MessageSchema],
    name: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    lastActivity: {
      type: Date,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    metadata: {
      // Additional metadata fields as needed
      unreadCount: {
        type: Number,
        default: 0,
      },
      // Add other metadata fields as needed
    },
    // Add other conversation fields as needed
  },
  { timestamps: true }
);

// Add any additional plugins or methods as needed

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
