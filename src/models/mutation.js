const mutation = (sequelize, DataTypes) => {
  const Mutation = sequelize.define('mutation', {
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
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    length: {
      type: DataTypes.INTEGER,
    },
    text: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    originAlice: {
      type: DataTypes.INTEGER,
    },
    originBob: {
      type: DataTypes.INTEGER,
    }
  });

  Mutation.associate = models => {
    Mutation.belongsTo(models.Conversation);
  };

  return Mutation;
};

export default mutation;
