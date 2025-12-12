import { Router } from "express";
import { getArtists, getArtist } from "../controllers/artistController.js";

const router = Router();

router.get("/artists", getArtists);

router.get("/artists/:id", getArtist);

export default router;
