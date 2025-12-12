import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Booking from "../models/Booking.js"; 

const Artist = sequelize.define("Artist", {

    
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  photo_url: {
    type: DataTypes.STRING,
  },
  performance_time: {
    type: DataTypes.STRING,
  },
});


export default Artist;
