import Artist from "./Artist.js";
import Booking from "./Booking.js";

// Artist 1 --- n Booking
Artist.hasMany(Booking, { foreignKey: "artist_id" });
Booking.belongsTo(Artist, { foreignKey: "artist_id" });

export { Artist, Booking };
