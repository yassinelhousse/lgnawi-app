import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Artist from "../models/Artist.js"; // IMPORTANT: import artist

const Booking = sequelize.define("Booking", {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tickets_count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  confirmation_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default Booking;
