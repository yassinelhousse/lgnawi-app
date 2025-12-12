import Artist from "../models/Artist.js";

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getArtist = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (error) {
    console.error("Error fetching artist:", error);
    res.status(500).json({ error: "Server error" });
  }
};
