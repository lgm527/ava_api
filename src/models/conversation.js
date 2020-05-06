//     {
//       "id": "string",
//       "lastMutation": "Object, The last mutation applyed on this conversation",
//       "text": "string"
//     },
//     "..."

const conversation = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('conversation', {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    conversationId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    data: {
      
    }
  });

  Conversation.associate = models => {
    Conversation.hasMany(models.Mutation);
  };

  return Conversation;
};

export default conversation;
