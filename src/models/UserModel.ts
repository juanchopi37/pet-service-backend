import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },

      role: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0, // 0 = user, 1 = admin
      },
    },
    {
      tableName: "users",
      timestamps: false,
    },
  );

  return User
};
