import EventInfo from "../models/EventInfo.js";

export const getEvent = async (req, res) => {
  try {
    const event = await EventInfo.findOne();

    if (!event) {
      return res.status(404).json({ message: "Event info not found" });
    }

    res.json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ error: "Server error" });
  }
};
