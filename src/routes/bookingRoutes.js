import { Router } from "express";
import {
  createBooking,
  getBookingByCode,
  getBookingsByEmail,
} from "../controllers/bookingController.js";

const router = Router();

router.post("/bookings", createBooking);


router.get("/bookings/:code", getBookingByCode);


router.get("/bookings/email/:email", getBookingsByEmail);

export default router;
