import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EventInfo = sequelize.define("EventInfo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});

export default EventInfo;
