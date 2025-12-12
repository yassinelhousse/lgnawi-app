import express from "express";
import cors from "cors";

import eventRoutes from "./routes/eventRoutes.js";
import artistRoutes from "./routes/artistRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", eventRoutes);
app.use("/api", artistRoutes);
app.use("/api", bookingRoutes);

export default app;
