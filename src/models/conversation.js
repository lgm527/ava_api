const conversation = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('conversation', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastMutation: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  });

  Conversation.associate = models => {
    Conversation.hasMany(models.Mutation, { onDelete: 'CASCADE' });
  };

  return Conversation;
};

export default conversation;
