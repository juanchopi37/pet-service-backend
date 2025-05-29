import { Sequelize } from "sequelize";
import UserModel from "./UserModel";
import PetModel from "./PetModel"
import AppointmentModel from "./AppointmentModel";

const sequelize = new Sequelize({
  dialect: "mariadb",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
})

const db = {
  UserModel: UserModel(sequelize),
  PetModel: PetModel(sequelize),
  AppointmentModel: AppointmentModel(sequelize),
}

db.PetModel.belongsTo(db.UserModel, {
  foreignKey: "ownerId",
  as: "owner",
})
