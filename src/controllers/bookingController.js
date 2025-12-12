import Booking from "../models/Booking.js";
import Artist from "../models/Artist.js";
import { v4 as uuidv4 } from "uuid";

export const createBooking = async (req, res) => {
  try {
    const { full_name, email, tickets_count, artist_id } = req.body;

    const confirmation_code = uuidv4().slice(0, 8).toUpperCase();

    const booking = await Booking.create({
      full_name,
      email,
      tickets_count,
      artist_id,
      confirmation_code,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getBookingByCode = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      where: { confirmation_code: req.params.code },
      include: Artist,
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getBookingsByEmail = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { email: req.params.email },
      include: Artist,
    });

    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings by email:", error);
    res.status(500).json({ error: "Server error" });
  }
};
