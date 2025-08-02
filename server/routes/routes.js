import express from "express";
import { uploadImage, getImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single('file'), uploadImage);
router.get("/file/:fileid", getImage);

export default router;

// middleware (==middleman) -> after getting request on /upload, some middleware will run before going to uploadImage() function