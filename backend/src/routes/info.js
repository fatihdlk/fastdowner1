import express from "express";
import { runYtDlpJson } from "../utils/ytdlp.js";
import { normalizeUrl } from "../utils/parseUrl.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const url = normalizeUrl(req.body?.url || "");
    if (!url) {
      return res.status(400).json({ error: "Missing url" });
    }

    const json = await runYtDlpJson(url);
    return res.json({
      url,
      title: json.title,
      description: json.description,
      duration: json.duration,
      thumbnail: json.thumbnail,
      webpage_url: json.webpage_url,
      extractor: json.extractor,
    });
  } catch (err) {
    console.error("info error", err);
    return res.status(500).json({ error: "info_failed" });
  }
});

export default router;
