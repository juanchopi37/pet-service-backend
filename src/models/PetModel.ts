import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
  const Pet = sequelize.define(
    "Pet",
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

      species: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Default age is 0
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "pets",
      timestamps: false,
    }
  );
  return Pet;
}
