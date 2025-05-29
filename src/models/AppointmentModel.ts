import { Sequelize, DataTypes } from "sequelize";


export default (sequelize: Sequelize) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      petId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("scheduled", "completed", "cancelled"),
        allowNull: false,
        defaultValue: "scheduled", // Default status is pending
      },
    },
    {
      tableName: "appointments",
      timestamps: false,
    }


  );

  return Appointment;
}
